import { ReactNode } from "react";
import { Layout } from "../layout";

interface ILayoutCadastroProps{
    titulo: string;
    children: ReactNode;
}

export const LayoutCadastro:React.FC<ILayoutCadastroProps> = ({titulo, children}: ILayoutCadastroProps) =>{
    return(
        <>
            <Layout/>
            <div className="app ">
                <section className="main-content columns is-height" >
                
                    <div className="container column is-8">
                        <div className="section" >
                            <div className="card" >
                                <div className="card-header">
                                    <h1 className="card-header-title  subtitle is-5">
                                        <p className="subtitle is-5" > {titulo}</p>
                                    </h1>
                                </div>
                                <div className="card-content" >
                                    <div className="content" >
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
