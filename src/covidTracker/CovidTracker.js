import React, { useEffect, useState } from 'react'
import StateList from './body/StateList'
import Header from './header/Header'
import Topbar from './header/Topbar'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setStateList, searchValue } from '../store/actions/actions';
import { generateStateList, searhByName } from './functions/functions'
import store from '../store/store';


export const CovidTracker = () => {

  // * component state
  const [listData, setListData] = useState([])
  const [tempData, setTempData] = useState([])

  // * store state
  const { search } = useSelector((state) => state?.covidTracker);

  // * dispatch
  const dispatch = useDispatch();

  // * state list Data
  const stateListData = async () => {
      const response = await axios.get(`https://data.covid19india.org/v4/min/data.min.json`).catch(err => {
          console.log("Err :", err);
      })
      const data = await generateStateList(response?.data ?? {})
      await dispatch(setStateList(data))
      await setListData(data)
      await setTempData(data)
  }

  // * used for call state list
  useEffect(() => {
      return () => {
          stateListData()
      }
  }, [])
    // * effects
    useEffect(() => {
        return () => {
            const {covidTracker: { search: searchText }} = store.getState()
            listData?.length && setListData(searhByName(searchText, tempData))
        }
    }, [search])

  return (
    <div>
        <Header />
        <Topbar />
        <StateList list={listData} />
    </div>
  )
}
