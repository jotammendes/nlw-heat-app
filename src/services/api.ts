import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://d841-187-109-255-106.ngrok.io'
});