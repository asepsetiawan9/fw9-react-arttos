import axios from 'axios'

const UrlBackEnd = 'https://fw9-backend-tau.vercel.app/'
const http = (token) => {
    const headers = {};
    if (token){
        headers.authorization = `Bearer ${token}`; 
    }
    return axios.create({
        headers,
        baseURL: UrlBackEnd
    });
}

export default http;