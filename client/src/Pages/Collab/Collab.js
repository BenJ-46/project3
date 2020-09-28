import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import axios from 'axios'


const Collab = () => {

    const [savedState, setSavedState] = useState({
      saved: []
    })

    useEffect((console.log('ping')))

    useEffect(() => {
      API.getSavedUser()
        .then(({ data }) => {
          setSavedState({ ...savedState, saved: data })
        })
    })

    useEffect(() => {
      API.getUser(localStorage.getItem('user'))
        .then(({ data }) => {
          setSavedState({ ...savedState, saved: data })
        })
    })


    return (
      <>
        
      </>
    )
  }

  export default Collab


