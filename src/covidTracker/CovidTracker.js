import React, { useEffect, useState } from 'react'
import StateList from './body/StateList'
import Header from './header/Header'
import Topbar from './header/Topbar'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setStateList } from '../store/actions/actions';
import { convertObjectToArrayOfObject } from './functions/functions'

export const CovidTracker = () => {

  // * component state
  const [listData, setListData] = useState([])

  // * dispatch
  const dispatch = useDispatch();

  // * state list Data
  const stateListData = async () => {
      const response = await axios.get(`https://data.covid19india.org/v4/min/data.min.json`).catch(err => {
          console.log("Err :", err);
      })
      const data = await convertObjectToArrayOfObject(response?.data ?? {})
      dispatch(setStateList(data))
      setListData(data)
  }

  // * used for call state list
  useEffect(() => {
      return () => {
          stateListData()
      }
  }, [])

  return (
    <div>
        <Header />
        <Topbar />
        <StateList list={listData}  />
    </div>
  )
}
