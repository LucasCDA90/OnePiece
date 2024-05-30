import axios from 'axios';

export const Characters = axios.create({
    baseURL: 'https://api.api-onepiece.com/v2'
})