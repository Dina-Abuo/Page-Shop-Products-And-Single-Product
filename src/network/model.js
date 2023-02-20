
import axios from "axios";
const Api = axios.create({
    // baseURL: 'https://api.storerestapi.com/'
    baseURL: 'https://fakestoreapi.com/'
})


Api.interceptors.request.use((confgi) => { return confgi; }, (error) => { return Promise.reject(error); });

Api.interceptors.response.use(respons => { return respons }, error => { return Promise.reject(error); });

export default Api


