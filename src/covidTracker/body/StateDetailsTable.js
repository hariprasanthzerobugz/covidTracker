import React from 'react'
import StateDetailsTableRow from './StateDetailsTableRow'

const StateDetailsTable = ({ details }) => {
    return (
        <div className='mt-3'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Deceased</th>
                        <th scope="col">Delta</th>
                        <th scope="col">Delta 7</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details?.dates?.length && details?.dates?.map((e, index) => <StateDetailsTableRow key={index} data={e} />)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default StateDetailsTable