import { httpCliente } from "app/http"
import { LojaDTO } from "app/models/Loja"


const resourceURL:string = "/api/lojas"

export const useLojaService = () =>{
    const listarTodos = async(): Promise<LojaDTO[]> =>{
        const response = await httpCliente.get(resourceURL);
        return response.data
    }

    return {
        listarTodos
    }
}