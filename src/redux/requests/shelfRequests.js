
import axios from 'axios';

//calls /user on our server to retrieve user data
export function callShelf() {

  return axios.get('/api/shelf')
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export const taco = 'tacos are delicious!';

export function addItem(action) {
  return axios.post('/api/shelf', action.payload )
  .then(response => console.log('add item success'))
  .catch((error) => console.log('error posting item:', error));
}

export function deleteShelfItem(id){
  return axios.delete(`/api/shelf/${id}`).then( ()=> {
    alert('deleted!');
  }).catch(error => alert('error:', error))
}

export function placeholder() {
  console.log('hi');
}

