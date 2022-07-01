import  Axios,{ AxiosInstance } from "axios";


export const httpCliente: AxiosInstance = Axios.create({
    baseURL: "http://192.168.7.135:8080/"
})