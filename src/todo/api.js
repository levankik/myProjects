import axios from 'axios';
import {showError, resetError, startLoading, stopLoading} from "../MyEventBus";

const api = axios.create({
    baseURL: 'http://localhost:3030/',
    timeout: 5000,
});

api.interceptors.request.use(function (config) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = localStorage.getItem('token');
    startLoading();
    resetError();
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    stopLoading();
    return response;
}, function (error) {
    stopLoading();
    showError(error);
    if (axios.isAxiosError(error)) {
        switch  (error.response.status) {
            case  401:
                break;
            case 404:
                break;
            case  500:
                break;
        }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export default api;

