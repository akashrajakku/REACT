import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// outlet ki help se hum header footer ko fix rkh skte hain aaur bich ke content ko apni marzi ke hisab se change kr paenge
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout