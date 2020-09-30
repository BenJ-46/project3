import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Footer.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
    <div className="main-footer center ">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list-unstyled">
                <li> <AiOutlinePhone/> (619) 555-5555</li>
                <li> <AiOutlineMail/> codeIn@customerserice.com</li>
              <li>San Diego,CA</li>
              <li>905 California Street</li>
            </ul>
         </div>
          {/* Column2 */}
          <div className="col">
            <h4>Resources</h4>
            <ul className="list-unstyled">
              <li>Test1</li>
              <li>Test2</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>FAQ'S</h4>
            <ul className="list-unstyled">
                <li>
                 Accessibility</li>
              <li>Customer Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm center">
            &copy;{new Date().getFullYear()} codeIn | All rights reserved | Terms of service | Privacy
          </p>

        </div>

      </div>

    </div>
</>

  )
}

export default Footer