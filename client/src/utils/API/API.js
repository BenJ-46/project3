import axios from 'axios'

const API = {

getSavedUser: () => axios.get('/api/users'),
getUser: name => axios.get(`/api/users/${name}`),
saveUser: user => axios.post('/api/users', user)
// saveMedia: media => axios.post('/api/media', media),

}

export default API



 // savedState.handleInfoSaved = id => {
  //   API.getUser(id)
  //   .then(() => {
  //     let saved = savedState.saved.filter(user => saved.user_.id === id)
  //     setSavedState({ ...savedState, saved: saved})
  //   })
  // }


   // useEffect(() => {
  //   API.getUser()
  //     .then(({ data }) => {
  //       let saved = data.userID
  //       setSavedState({ ...savedState, saved })
  //     })
  // }, [])


   // savedState.handleInfoSaved = id => {
  //   API.getUser(id)
  //   .then(() => {
  //     let saved = savedState.saved.filter( user => user._id === id)
  //     setSavedState({ ...savedState, saved })
  //   })
  // }