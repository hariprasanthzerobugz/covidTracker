import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux';
import StateCardDetails from './StateCardDetails'

const StateCard = ({ name, value, districts, dates }) => {

    // * store state
    const { date } = useSelector((state) => state?.covidTracker);

  // * states
  const [district, setDistrict] = useState('')

  return (
    <div className="col-sm-4 mt-3">
      <div className="card">
        <div className='card-header'>
          <div className='d-flex justify-content-between'>
            <h5>{name}</h5>
            <div>
              <select name="districts" placeholder='Districts' value={district} className='form-control'
                onChange={e => setDistrict(e?.target?.value)}>
                <option value='' disabled>Districs</option>
                {
                  districts?.map(({ name }, index) => <option key={index} value={name}>{name}</option>)
                }
              </select>
            </div>
          </div>
        </div>
        <div className="card-body">
          {
            console.log('date', date)
          }
          <StateCardDetails 
          value={value} 
          district={ { value: district ? true : false, data: districts.find(({name})=>name === district) } } 
          date={ { value: date ? true : false, data: dates.find(({name}) => name === date) } }
          />
        </div>
      </div>
    </div>
  )
}

export default memo(StateCard)