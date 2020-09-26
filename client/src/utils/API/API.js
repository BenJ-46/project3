import axios from 'axios'

const API = {
//   getMedia: search => axios.get(`/api/omdb/${search}`),
      getSavedUser: () => axios.get('/api/users'),
      // getUserById: () => axios.get('/api/users/un/:username')
//   saveMedia: media => axios.post('/api/media', media),
//   deleteMedia: id => axios.delete(`/api/media/${id}`)
}

export default API