import axios from 'axios'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setStateList } from '../../store/actions/actions';
import { convertObjectToArrayOfObject } from '../functions/functions';

const StateList = () => {
    // * state
    const listData = useSelector((state) => state?.covidTracker?.stateList ?? []);

    // * dispatch
    const dispatch = useDispatch();

    // * state list Data
    const stateListData = async () => {
        const response = await axios.get(`https://data.covid19india.org/v4/min/data.min.json`).catch(err => {
            console.log("Err :", err);
        })
        const data = await convertObjectToArrayOfObject(response?.data ?? {})
        dispatch(setStateList(data))
    }

    // * used for call state list
    useEffect(() => {
        return () => {
            stateListData()
        }
    }, [])

  return (
    <div className=''>
        listData
    </div>
  )
}

export default memo(StateList)