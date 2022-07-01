import { LojaDTO } from "app/models/Loja";
import { useDespesaService } from "app/services/despesa.service";
import { useLojaService } from "app/services/loja.service";
import { Input } from "components/common/input";
import { Message } from "components/common/messages";
import { Layout } from "components/layout"
import { LayoutCadastro } from "components/layoutCadastro";
import { useEffect, useState } from "react";
import moment from 'moment'
import { DespesaLojaNatureza } from "app/models/DespesaLojaNatureza";


export const ConsultaDespesa: React.FC = () =>{

    const lojaService = useLojaService()
    const despesaService = useDespesaService()
    const [messageOk, setMessageOk] = useState(false);
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [lojaSelecionada, setLojaSelecionada] = useState(0);
    const [lojas, setLojas] = useState<LojaDTO[]>([]);
    const [despesas, setDespesas] = useState<DespesaLojaNatureza>();
    const [exibirDespesa,setExibirDespesa] = useState(false);

    useEffect(() =>{

        lojaService
            .listarTodos()
            .then(response =>{
                setLojas(response);
            })
    }, [])

    const pesquisarDespesaNaturezaPorLoja = (ev: any) =>{

        ev.preventDefault()

        despesaService
            .despesaLojaPorNaturezas(moment(dataInicial).format('DD-MM-yyyy'), 
                moment(dataFinal).format('DD-MM-yyyy'),lojaSelecionada)
                .then(response =>{
                    setDespesas(response);
                    setExibirDespesa(true)
                })

    }

    return(
        <>
            <LayoutCadastro titulo="Consultar Despesas">
                <form onSubmit={pesquisarDespesaNaturezaPorLoja}>
                    {messageOk &&
                        <Message tipo="success" texto="Produto criado com Sucesso!" />
                    }
                        <div className="columns">
                            <Input label="Data Inicial" 
                                        columnClasses="is-one-third"
                                        id="inputDataInicial"  
                                        onChange={setDataInicial}
                                        type="date"
                                        required
                            />
                            <Input label="DataFinal" 
                                        columnClasses="is-one-third"
                                        id="inputDataInicial" 
                                        onChange={setDataFinal}
                                        type="date"
                                        required
                            />

                            <div className="select field column is-one-third">
                                <label className="label" htmlFor="">Loja</label>
                                <select name="item" className="field" onChange={ev => setLojaSelecionada(parseInt(ev.target.value))} >
                                    <option>Loja</option>    
                                    {lojas.map(loja =>{
                                        return(
                                            <option key={loja.id} value={loja.numero}>{loja.nome}</option>
                                        )
                                    })}                                    
                                </select>
                            </div>
                        </div>                                              
                        
                        
                    <div className="field is-grouped" >
                        <div className="control">
                            <button type="submit" className="button is-link" >Pesquisar</button>
                        </div>    
                    </div>      
                </form>     
                <br />
                {exibirDespesa ? (
                    <>
                        <div className="">
                        <h4> {despesas?.loja}</h4>
                        </div>
                        <hr />
                        <div>
                        <table>
                            <tbody>
                            {despesas?.despesas.map(despesa =>{
                                return(
                                    <tr>
                                        <td>{despesa.nome_natureza}</td>
                                        <td>{despesa.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                            <tr>
                                <td><strong>Total</strong> </td>
                                <td> <strong>{despesas?.valor_total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong> </td>
                                </tr>
                            </table>
                        </div>
                    </>
                ) : false}
                
            </LayoutCadastro>
        </>
    );
}