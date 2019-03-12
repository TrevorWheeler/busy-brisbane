import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://fast-brook-39107.herokuapp.com/'
    })
}