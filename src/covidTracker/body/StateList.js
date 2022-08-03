import React, { memo, useEffect, useState } from 'react'
import StateCard from './StateCard'

const StateList = ({ list, temp }) => {

    const render = list?.map(({ name, value, districts }, index) => <StateCard key={index} name={name} value={value} districts={districts} />)

    return (
        <div className='row'>
            {
                render
            }
        </div>
    )
}

export default StateList