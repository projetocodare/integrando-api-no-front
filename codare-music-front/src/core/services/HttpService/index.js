import config from "../../config"
import Axios from 'axios'

const BASE_URL = config.api.baseUrl

const HttpService = {

    get: async (url) => {
        return Axios.get(`${BASE_URL}${url}`)
    }


}

export default HttpService