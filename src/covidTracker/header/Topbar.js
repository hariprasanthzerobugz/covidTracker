import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { dateValue, searchValue } from '../../store/actions/actions';
import './topbar.css'

const Topbar = () => {
  const dispatch = useDispatch();

  // * search
  const [search, setSearch] = useState('')
  const onChange = e => {
    const value = e?.target?.value ?? null
    setSearch(value)
  }
  const checkForEnterKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const value = e?.target?.value ?? null
      setSearch(value)
      dispatch(searchValue(value))
    }
  }

  // * date
  const [date, setDate] = useState('')
  const onChangeDate = e => {
    const value = e?.target?.value ?? null
    setDate(value)
    dispatch(dateValue(value))
  }

  return (
    <nav className="border-bottom d-flex header-bg justify-content-start mx-3 navbar navbar-dark second-nab-bar" >

      <div className="d-flex">
        <div className='form-label mt-2 mx-3' htmlFor='stateSearch'>State</div>
        <input type="search" placeholder="Search" className='form-control' id='stateSearch' value={search}
          onChange={e => onChange(e)} onKeyUp={e => checkForEnterKey(e)} name="search" />
      </div>

      <div className='mx-5 text-center'>
        <input type="date" placeholder="Date" className='form-control mt-3' id='dateSearch' value={date}
          onChange={e => onChangeDate(e)} name="date" min="2020-01-30" max="2021-10-31" />
        <span className='date-description'>FROM: 2020-01-30 - To: 2021-10-31</span>
        {/* FROM: 2020-01-30 - To: 2021-10-31 */}
      </div>

    </nav>
  )
}

export default Topbar