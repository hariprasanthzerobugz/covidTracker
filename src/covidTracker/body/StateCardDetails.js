import React, { useState } from 'react'
import './stateCard.css'
import StateDelta from './StateDelta'
import StateDelta7 from './StateDelta7'
import StateTotal from './StateTotal'

const StateCardDetails = ({ value: { total, delta, delta7 } }) => {

    // * state
    const [carousel, setCarousel] = useState(0)

    // * carousel
    const changeNextCarousel = () => setCarousel(carousel > 2 ? 1 : carousel+1)
    const changePreviousCarousel = () => setCarousel(carousel === 0 ? 2 : carousel-1)

    return (
        <div className='d-flex justify-content-between'>
            <div className='mt-5' onClick={e => changeNextCarousel()}>{'<'}</div>
            {
                carousel === 0 ? <StateTotal details={total} /> : carousel === 1 ? <StateDelta details={delta} /> : <StateDelta7 details={delta7} />
            }
            <div className='mt-5' onClick={e => changePreviousCarousel()}>{'>'}</div>
        </div>
    )
}

export default StateCardDetails