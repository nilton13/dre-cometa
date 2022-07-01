import Image from 'next/image';
import img from '../../../public/image-5.png'
import Link from 'next/link';


export const Layout: React.FC = () =>{
    return (
        <>
        
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">{/*
            <a className="navbar-item" href="/">
                <Image src={img} width="112" height="30" alt='Página inicial.'/>
    </a>*/}
        
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
        
            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Cadastro
                    </a>
        
                    <div className="navbar-dropdown">
                        <Link href={"/cadastros/produto"} >
                            <a className="navbar-item">
                            Natureza
                            </a>
                        </Link>
                        <Link href={"/cadastros/categoria"} >
                            <a className="navbar-item">
                            Fornecedor
                            </a>
                        </Link>
                        <Link href={"/cadastros/fornecedor"} >
                            <a className="navbar-item">
                            Loja
                            </a>
                        </Link>
                    </div>
                </div>
            <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Consulta
                    </a>
        
                    <div className="navbar-dropdown">
                    <Link href={"/consultas/produto"} >
                            <a className="navbar-item">
                           Loja
                            </a>
                        </Link>
                        <Link href={"/consultas/produto"} >
                            <a className="navbar-item">
                            Natureza
                            </a>
                        </Link>
                        <Link href={"/consultas/despesa"} >
                            <a className="navbar-item">
                            Despesa
                            </a>
                        </Link>
                        
                    </div>
                </div>
        
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Gestão
                    </a>
        
                    <div className="navbar-dropdown">
                        <Link href={"/gestao/despesa"} >
                            <a className="navbar-item">
                            Relatório Mês
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        {/*
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-light">
                        Sair
                        </a>
                    </div>
                </div>
    </div> */}
            </div>
        </nav>
      </>
    )
} 