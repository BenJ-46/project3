import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col, Card,  } from 'reactstrap';
import './Search.css'


import { Router } from 'react-router-dom';
import Footer from '../../components/Footer';


const Search = () => {
  const [input, setInput] = useState("");
  let languages = [

    { name: "HTML", },
    { name: "CSS", },
    { name: "Javascript", },
    { name: "React", },
    { name: "Node", },
    { name: "C++", },
    { name: "Handlebars", },
    { name: "MongoDB", },
    { name: "C#", },
    { name: "API", },
    { name: "Express", },
    { name: "MySQL", },
    { name: "Axios", },
    { name: "jQuery", },
    { name: "Bootstrap", },
    
   

  ];

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  if (input.length > 0) {
    languages = languages.filter((i) => {
      return i.name.toLowerCase().match(input)
    })
  }
  return (
  
    <div className="search-box">
      <input className="search-txt"
        type="text"
        placeholder="Desired Language"
        onChange={handleChange}
        value={input} />
        <a className="search-btn" href="#"></a>
      {languages.map((language, index) => {

        return (
          <>
          

            <div key={index}>
         
                <ul>{language.name}</ul>
              
            </div>
          </>
        )
      })}</div>
    
  )
}

export default Search