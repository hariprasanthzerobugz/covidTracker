import React, { memo } from 'react'
import StateCard from './StateCard'

const StateList = ({list}) => {

  return (
    <div className=''>
        listData
        {
            list?.map(({name, value}, index) => <StateCard key={index} name={name} value={value} />)
        }
    </div>
  )
}

export default memo(StateList)