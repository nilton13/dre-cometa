import { httpCliente } from "app/http"
import { FornecedorDTO } from "app/models/Fornecedor"


const resourceURL: string = "/api/fornecedores"

export const useFornecedorService = () =>{

    const listarTodos = async(): Promise<FornecedorDTO[]> =>{
        const response = await httpCliente.get(resourceURL);
        return response.data
    }

    return {
        listarTodos
    }
}