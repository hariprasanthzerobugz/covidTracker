import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import TopbarForState from '../header/TopbarForState';

const StateDetails = () => {
    // * params
    let {state = ''} = useParams();

    // * store state
    const { stateList } = useSelector((state) => state?.covidTracker);

    // * state
    const [details, setDetails] = useState('')

    // * effects
    useEffect(() => {
      return () => {
        setDetails(stateList.find(({name}) => name === state))
      }
    }, [state])
    


  return (
    <div>
      <TopbarForState />
      StateDetails 
      {
        console.log(details)
      }
      </div>
  )
}

export default memo(StateDetails)