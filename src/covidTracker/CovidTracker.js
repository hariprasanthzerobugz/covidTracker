import React from 'react'
import StateList from './body/StateList'
import Header from './header/Header'
import Topbar from './header/Topbar'

export const CovidTracker = () => {
  return (
    <div>
        <Header />
        <Topbar />
        <StateList />
    </div>
  )
}
