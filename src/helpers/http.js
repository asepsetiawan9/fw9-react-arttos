import axios from 'axios'

const http = () => {
    return axios.create({
        baseURL: 'https://rickandmortyapi.com/api'
    })
}

export default http