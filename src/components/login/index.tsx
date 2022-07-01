
export const login:React.FC = () =>{
    return (
        <div className="container column is-3 is-flex-direction-column is-align-items-center is-align-content-center">
            <div className="" >
            <figure className="image is-3by2">
                <img   src="image-5.png" alt="" />
            </figure>
            <hr />
            </div>
            <div className="content">
                <div className="field">
                    <label className="label">Usuário</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="ex. Luva de pedreiro"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Senha</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="********"/>
                    </div>
                </div>
                <div className="field m-auto">
                    <button className="button is-link m-auto" >Entrar</button>
                </div>
            </div> 
        </div>
    )
}