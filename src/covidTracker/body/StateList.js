import React, { memo } from 'react'
import StateCard from './StateCard'

const StateList = ({ list }) => {

    const render = list?.map(({ name, value, districts, dates }, index) => <StateCard key={index} name={name} value={value} districts={districts} dates={dates} />)

    return (
        <div className='row'>
            {
                render
            }
        </div>
    )
}

export default memo(StateList)