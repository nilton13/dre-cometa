import { Input } from "components/common/input"
import { LayoutCadastro } from "components/layoutCadastro"
import { useState } from "react";



export const GestaoDespesa: React.FC = () =>{

    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');

    return(
        <>
            <LayoutCadastro titulo="Gestão DRE">

                <form action="">
                    <div className="columns">
                        <Input label="Data Inicial" 
                                            id="inputDataInicial"  
                                            onChange={setDataInicial}
                                            type="date"
                                            required
                                />
                        <Input label="DataFinal" 
                                    id="inputDataInicial" 
                                    onChange={setDataFinal}
                                    type="date"
                                    required
                        />
                    </div>
                    <div className="field is-grouped" >
                        <div className="control">
                            <button type="submit" className="button is-link" >Pesquisar</button>
                        </div>    
                    </div>
                </form>

            </LayoutCadastro>
        </>
    )
}