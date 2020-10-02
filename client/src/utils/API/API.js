import axios from 'axios'

const API = {

getSavedUser: () => axios.get('/api/users'),
getUser: name => axios.get(`/api/users/${name}`),
saveUser: user => axios.post('/api/users', user),
getLang: () => axios.get('/api/lang'),


}

export default API

