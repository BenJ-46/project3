import axios from 'axios'
import React, {useEffect, useState } from 'react'
import './Friends.css'
import { Card, Button, InputGroup, Input, InputGroupAddon, Form, CardSubtitle, Container, Row, Col } from "reactstrap";




const Friends = () => {
  const [ collabList, setCollabList] = useState([])
  // Pull from local storage the current user
   const currentUser = localStorage.getItem('user')
   console.log(currentUser)
  // do an axios get request for the list of friends
  useEffect(() => {
    axios.get(`/api/users/${currentUser}`).then( ({data}) => {
console.log(data[0].collabList)
// const friendsList = data[0].collabList

     
// friendsList.map(friendId => {

//   axios.get(`/api/users/id/${friendId}`).then((friendInfo) => {
//     console.log(friendInfo)
    setCollabList(data[0].collabList)
    
  // })
})
   

        
      
    // })
    
  },[])
  // const loadFriends = ()=> {

  // }
  return (
    <>
    {/* // map through this is the jsx return */}
   {collabList.map(friend => {
     console.log(collabList)
       
    return  (
      

    <h1 key={friend}>{friend}</h1>)
     
   })}

  </>
)

}

export default Friends