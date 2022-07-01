import { NaturezaValorDTO } from "./naturezaValorDTO";

export interface DespesaLojaNatureza{
    loja: string;
    despesas: NaturezaValorDTO[];
    valor_total: number;
}