import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import StateDetailsTable from './StateDetailsTable';

const StateDetails = () => {
  // * params
  let { state = '' } = useParams();

  // * store state
  const { stateList } = useSelector((state) => state?.covidTracker);

  // * state
  const [details, setDetails] = useState('')

  // * effects
  useEffect(() => {
    return () => {
      setDetails(stateList.find(({ name }) => name === state))
    }
  })

  // * date
  const [date, setDate] = useState('')
  const onChangeDate = e => {
    const value = e?.target?.value ?? null
    setDate(value)
  }

  // * district
  const [district, setDistrict] = useState('')

  return (
    <div>
      <nav className="border-bottom d-flex header-bg justify-content-start mx-3 navbar navbar-dark" >

        <div className="d-flex">
          <div className='form-label mt-2 mx-3' htmlFor='stateSearch'>{state}</div>
          <input type="date" placeholder="Date" className='form-control' id='dateSearch' value={date}
            onChange={e => onChangeDate(e)} name="date" min="2020-01-30" max="2021-10-31" />
        </div>

        <div className='mx-5'>
              <select name="districts" placeholder='Districts' value={district} className='form-control'
                onChange={e => setDistrict(e?.target?.value)}>
                <option value='' disabled>Districs</option>
                {
                  details?.districts?.map(({ name }, index) => <option key={index} value={name}>{name}</option>)
                }
              </select>
        </div>

      </nav>

      <StateDetailsTable details={details} />

    </div>
  )
}

export default memo(StateDetails)