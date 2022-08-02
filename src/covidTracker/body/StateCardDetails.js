import React from 'react'
import './stateCard.css'
import StateDelta from './StateDelta'
import StateDelta7 from './StateDelta7'
import StateTotal from './StateTotal'

const StateCardDetails = ({value: {total, delta, delta7}}) => {

    return (
        <div>
            <StateTotal details={total} />
            {/* <StateDelta details={delta} />
            <StateDelta7 details={delta7} /> */}
        </div>
    )
}

export default StateCardDetails