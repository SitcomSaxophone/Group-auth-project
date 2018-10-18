
import axios from 'axios';

//calls /user on our server to retrieve user data
export function callShelf() {

  return axios.get('/api/shelf')
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function deleteShelfItem(id){
  return axios.delete(`/api/shelf/${id}`).then( ()=> {
    alert('deleted!');
  }).catch(error => alert('error:', error))
}

export function userItems() {

  return axios.get('/api/shelf/count')
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function placeholder() {
  console.log('hi');
}
