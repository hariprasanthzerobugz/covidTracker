import React, { useEffect, useState } from 'react'
import StateList from './body/StateList'
import Header from './header/Header'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setStateList, sortValue } from '../store/actions/actions';
import { generateStateList, generateStateListWithDate, searhByName, sortAsc, sortAscTotalAffected, sortAscTotalConfirmed, sortAscTotalConfirmedWithDate, sortAscTotalVaccinated, sortDescTotalAffected, sortDescTotalConfirmed, sortDescTotalConfirmedWithDate, sortDescTotalVaccinated } from './functions/functions'
import store from '../store/store';
import { Routes, Route } from "react-router-dom";
import StateDetails from './body/stateDetails/StateDetails';


export const CovidTracker = () => {

    // * component state
    const [listData, setListData] = useState([])
    const [tempData, setTempData] = useState([])

    // * store state
    const { search, sort, date } = useSelector((state) => state?.covidTracker);

    // * dispatch
    const dispatch = useDispatch();

    // * state list Data
    const stateListData = async () => {
        const response1 = await axios.get(`https://data.covid19india.org/v4/min/data.min.json`).catch(err => {
            console.log("Err :", err);
        })
        const response2 = await axios.get(`https://data.covid19india.org/v4/min/timeseries.min.json`).catch(err => {
            console.log("Err :", err);
        })
        const data1 = await generateStateList(response1?.data ?? {})
        const data2 = await generateStateListWithDate(response2?.data ?? {})
        const final = data1.map(e => {
            const obj = data2.find(({ name }) => name === e.name)
            return { ...obj, ...e }
        })
        await dispatch(setStateList(final))
        await setListData(final)
        await setTempData(final)
    }

    // * used for call state list
    useEffect(() => {
        return () => {
            stateListData()
        }
    }, [])
    // * search
    useEffect(() => {
        return () => {
            const { covidTracker: { search: searchText } } = store.getState()
            setListData(searhByName(searchText, tempData))
            dispatch(sortValue('asc'))
        }
    }, [listData.length, search, tempData])
    // * sort
    useEffect(() => {
        return () => {
            const { covidTracker: { sort: sortText } } = store.getState()
            console.log(listData.length)
            if(sortText === 'confirmedAscending') {
                date ? 
                setListData(sortAscTotalConfirmedWithDate([...listData], date)) :
                setListData(sortAscTotalConfirmed([...listData]))
            }
            if(sortText === 'confirmedDescending') {
                date ? 
                setListData(sortDescTotalConfirmedWithDate([...listData], date)) :
                setListData(sortDescTotalConfirmed([...listData]))
            }
            if(sortText === 'affectedAscending') {
                setListData(sortAscTotalAffected([...listData]))
            }
            if(sortText === 'affectedDescending') {
                setListData(sortDescTotalAffected([...listData]))
            }
            if(sortText === 'vaccinatedAscending') {
                setListData(sortAscTotalVaccinated([...listData]))
            }
            if(sortText === 'vaccinatedDescending') {
                setListData(sortDescTotalVaccinated([...listData]))
            }
            if(sortText === 'asc') setListData(sortAsc([...listData], 'name'))
        }
        }, [listData.length, sort])

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<StateList list={listData} />} />
                <Route path="state/:state" element={<StateDetails />} />
            </Routes>

        </div>
    )
}
