import React from 'react'

const StateDelta7 = ({ details, isDate = false }) => {
  return (
    <div className='text-center'>
      <div>Delta 7</div>
      {
        isDate ?
          <div className='d-flex justify-content-evenly'>
            <div>Confirmed</div>
            <div>: {details?.confirmed ?? 0}</div>
          </div>
          :
          <div>
            <div className='d-flex justify-content-evenly'>
              <div>Confirmed</div>
              <div>:</div>
              <div>{details?.confirmed ?? 0}</div>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div>Recovered</div>
              <div>:</div>
              <div>{details?.recovered ?? 0}</div>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div>Tested</div>
              <div>:</div>
              <div>{details?.tested ?? 0}</div>
            </div>
          </div>
      }
    </div>
  )
}

export default StateDelta7