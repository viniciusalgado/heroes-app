import axios from 'axios'

const TEN_MINUTES = 10 * 60 * 1000
axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.timeout = TEN_MINUTES
