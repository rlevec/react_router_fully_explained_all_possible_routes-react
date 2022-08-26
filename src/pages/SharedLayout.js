import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

const SharedLayout = () => {
  return (
    <>
        <Navbar /> 
        <Outlet /> {/* Shared layout of all components (page content) displayed depending on the target Link so the Home can be independent component with its own layout*/}

    </>
  )
}

export default SharedLayout