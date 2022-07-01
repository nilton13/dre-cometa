import { httpCliente } from "app/http"
import { DespesaLojaNatureza } from "app/models/DespesaLojaNatureza"


const resourceURL: string = "api/despesas"

export const useDespesaService = () =>{
    const despesaLojaPorNaturezas = async(dataInicial: string, dataFinal: string,loja: number): Promise<DespesaLojaNatureza> =>{
        const response = await httpCliente.get(`${resourceURL}/loja/todasnaturezas/${dataInicial}/${dataFinal}/${loja}`)
        return response.data;
    }

    return {
        despesaLojaPorNaturezas
    }
}