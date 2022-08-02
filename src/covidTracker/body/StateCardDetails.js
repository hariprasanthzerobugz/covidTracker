import React, { memo, useState } from 'react'
import './stateCard.css'
import StateDelta from './StateDelta'
import StateDelta7 from './StateDelta7'
import StateTotal from './StateTotal'

const StateCardDetails = ({ value: { total, delta, delta7 }, district: { value: districtValue = false, data: districtData = {} } }) => {

    // * state
    const [carousel, setCarousel] = useState(0)

    // * carousel
    const changeNextCarousel = () => setCarousel(carousel === 2 ? 0 : carousel+1)
    const changePreviousCarousel = () => setCarousel(carousel === 0 ? 2 : carousel-1)

    return (
        <div className='d-flex justify-content-between'>
            <button type='button' className='btn btn-icon' onClick={e => changePreviousCarousel()}>{'<'}</button>
            {
                carousel === 0 ? 
                <StateTotal details={districtValue ? districtData?.value?.total ?? {} : total} /> : 
                carousel === 1 ? 
                <StateDelta details={districtValue ? districtData?.value?.total ?? {} : delta} /> : 
                <StateDelta7 details={districtValue ? districtData?.value?.total ?? {} : delta7} />
            }
            <button type='button' className='btn btn-icon' onClick={e => changeNextCarousel()}>{'>'}</button>
        </div>
    )
}

export default memo(StateCardDetails)