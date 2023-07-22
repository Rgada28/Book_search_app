import axios from 'axios'

const api = axios.create({
    baseURL: "http://68.178.162.203:8080/application-test-v1.1"

})

api.interceptors.request.use(
    (config) => {
        console.log('Request URL:', config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;