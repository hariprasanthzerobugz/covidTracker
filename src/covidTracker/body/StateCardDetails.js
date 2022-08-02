import React, { useState } from 'react'
import './stateCard.css'
import StateDelta from './StateDelta'
import StateDelta7 from './StateDelta7'
import StateTotal from './StateTotal'

const StateCardDetails = ({ value: { total, delta, delta7 } }) => {

    // * state
    const [carousel, setCarousel] = useState(0)

    // * carousel
    const changeNextCarousel = () => setCarousel(carousel === 2 ? 0 : carousel+1)
    const changePreviousCarousel = () => setCarousel(carousel === 0 ? 2 : carousel-1)

    return (
        <div className='d-flex justify-content-between'>
            <button type='button' className='btn btn-icon' onClick={e => changePreviousCarousel()}>{'<'}</button>
            {
                carousel === 0 ? <StateTotal details={total} /> : carousel === 1 ? <StateDelta details={delta} /> : <StateDelta7 details={delta7} />
            }
            <button type='button' className='btn btn-icon' onClick={e => changeNextCarousel()}>{'>'}</button>
        </div>
    )
}

export default StateCardDetails