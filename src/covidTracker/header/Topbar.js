import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchValue } from '../../store/actions/actions';

const Topbar = () => {
    const dispatch = useDispatch();

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
            dispatch(searchValue(search))
        }
    }

  return (
    <nav className="border-bottom d-flex header-bg justify-content-between mx-3 navbar navbar-dark" >
        <div className="d-flex">
        <div className='form-label mt-2 mx-3' htmlFor='stateSearch'>State</div>
        <input type="search" placeholder="Search" className='form-control' id='stateSearch' value={search}
         onChange={e => onChange(e)} onKeyUp={e => checkForEnterKey(e)} name="search" />
         </div>
    </nav>
  )
}

export default Topbar