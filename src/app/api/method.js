const API_BASE_URL = 'https://goodness-api.onrender.com/';

const fetchApi = {

    get: (url, params) => {
        const config = {
            params: params
        };

        return axios.get(`${API_BASE_URL}${url}`, config);
    },

    post: (url, data) => {
        return axios.post(`${API_BASE_URL}${url}`, data);
    }

}

export default fetchApi;