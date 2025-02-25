import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:1337/api',
    timeout: 1000,
})

export const getApi=async(url)=>{
    try {
        const response = await AxiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}