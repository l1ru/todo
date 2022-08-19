import axios from 'axios'

let network =  axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const api = {
  network: network,
  getUser: (userId?: Number) => userId ? network.get(`/users/${userId}`) : network.get('/users'),
  getTodosUser: (userId?: Number) => userId ? network.get(`/todos?userId=${userId}`) : network.get('/todos')
}

export default api