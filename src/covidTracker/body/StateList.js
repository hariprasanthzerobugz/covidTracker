import React, { memo } from 'react'
import StateCard from './StateCard'

const StateList = ({list}) => {

  return (
    <div className='row'>
        {
            list?.map(({name, value, districts}, index) => <StateCard key={index} name={name} value={value} districts={districts} />)
        }
    </div>
  )
}

export default memo(StateList)