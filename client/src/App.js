import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'
import Footer from './components/Footer'
import './App.css'
const App = () => {
 

  return (
    <>
    {/* //   <h1>Hello World!</h1> */}
      <div className="page-container">
        <div className="content-wrap">
        
        </div>
        <Footer />
         </div>
      
    </>
    
  )
}

export default App
