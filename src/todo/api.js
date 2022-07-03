import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/todos',
    timeout: 5000,
});

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
export default api;

