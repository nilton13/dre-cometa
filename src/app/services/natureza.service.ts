import { httpCliente } from "app/http"
import { NaturezaDTO } from "app/models/Natureza"


const resourceURL: string = "/api/naturezas"

export const useNaturezaService = () =>{
    const listarTodos = async():Promise<NaturezaDTO[]> =>{
        const response = await httpCliente.get(resourceURL);
        return response.data;
    }

    return{
        listarTodos
    }
}