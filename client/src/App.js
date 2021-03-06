import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Collab from './Pages/Collab'
import Team from './Pages/Team'
import Friends from './Pages/Friends'
import Footer from './components/Footer'
import logo from './components/Assets/Images/project_3_logo.png'
import './App.css'
import { Collapse, Card, CardImg, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const App = () => {
  const [collapsed, setCollapsed] = useState(true);
 
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      
      <div className="page-container">
        <div className="content-wrap">
          <Router>
          <div className="color">
              <Navbar color="#EEF5DB" light>
                <img className="sizing" src={logo} alt="logo" />
                <h1></h1>
  <NavbarBrand  href="/" className="mr-auto">codeIn </NavbarBrand>
                
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                      <NavLink href="/">Login</NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink href="/Search">Search</NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                      <NavLink href="/Signup">Signup</NavLink>
                    </NavItem> */}
                    <NavItem>
                      <NavLink href="/Profile">Profile</NavLink>
                    </NavItem>
                  <NavItem>
                    <NavLink href="/Collab/">Collab</NavLink>
                  </NavItem>
                    <NavItem>
                      <NavLink href="/Friends">Friends</NavLink>
                    </NavItem>
                  <NavItem>
                    <NavLink href="/Team">Team</NavLink>
                  </NavItem>
                    
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <Switch>
            <Route exact path="/" component={Login} />
              {/* <Route exact path="/Search" component={Search} /> */}
              <Route path="/Profile" component={Profile} />
            <Route path="/Collab" component={Collab} />
              <Route path="/Friends" component={Friends} />
            <Route path="/Team" component={Team} />
              <Route path="/Signup" component={Signup} />
             </Switch>
          </Router>

        
        </div>
          <Footer />          
         </div>
      
    </>
    
  )
}

export default App