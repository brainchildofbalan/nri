import axios from "axios";

export const useApi = () => {
    const api = axios.create({
        baseURL: 'http://localhost:5000/v1',
        timeout: 8000,
        headers: {
            Accept: 'application/json',
            'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
            'x-rapidapi-key': '<your-key-here>',
            // Authorization: localStorage.getItem("token") || ''
        },
    });
    return {
        api
    }
}
