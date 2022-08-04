import React from 'react'
import { sortAscTotalAffected, sortAscTotalConfirmed, sortDescTotalAffected, sortDescTotalConfirmed, stateTableSortAscTotalRecovered, stateTableSortDescTotalRecovered } from '../../functions/functions'
import StateDetailsTableRow from './StateDetailsTableRow'

const StateDetailsTable = ({ details, date, district, sort }) => {

    const dates = details?.dates?.length ? details.dates : []
    const districts = details?.districts?.length ? details.districts : []
    const filtered = district ? 
    districts.filter(({name}) => name === district) : 
    date ? dates.filter(({name}) => name === date) : dates

    const sorted = (filtered) => {
        if(filtered?.length) {
            if(sort === 'confirmedAsc') return sortAscTotalConfirmed(filtered)
            if(sort === 'confirmedDesc') return sortDescTotalConfirmed(filtered)
            if(sort === 'recoveredAsc') return stateTableSortAscTotalRecovered(filtered)
            if(sort === 'recoveredDesc') return stateTableSortDescTotalRecovered(filtered)
            if(sort === 'decasedAsc') return sortAscTotalAffected(filtered)
            if(sort === 'decasedDesc') return sortDescTotalAffected(filtered)
            return filtered
        } else return []
    }

    const final = sorted(filtered)

    const render = final?.length ? final?.map((e, index) => <StateDetailsTableRow key={index} data={e} />) : <tr></tr>
    
    return (
        <div className='mt-3'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">{ district ? 'District' : 'Date' }</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Deceased</th>
                        <th scope="col">Delta</th>
                        <th scope="col">Delta 7</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        render
                    }
                </tbody>
            </table>
            {
               !filtered?.length && <h5 className='text-center mt-3'>Result not found</h5>
            }
        </div>
    )
}

export default StateDetailsTable