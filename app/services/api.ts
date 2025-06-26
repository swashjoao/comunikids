import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.8.43:3333', // IP da máquina na rede local
});

export default api;
