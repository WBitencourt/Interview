import axios from 'axios';

const api = axios.create({
  baseURL: 'https://everest.oito.srv.br/everest/auth/v1'
})

export default api
