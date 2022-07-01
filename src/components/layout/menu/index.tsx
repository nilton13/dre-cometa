import Link from "next/link"

export const Menu: React.FC = () =>{
    return (
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile" >
            <figure className="image is-square">
                <img   src="image-5.png" alt="" />
            </figure>
            <ul className="menu-list" >
                <MenuItem href="/" label="Home"/>
                <MenuItem href="/" label="Cadastro"/>
                <MenuItem href="/login" label="Login"/>
                <MenuItem href="/" label="Sair"/>
               
            </ul>
        </aside>
    )
}

interface MenuItemProps{
    label: string;
    href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href }:MenuItemProps) =>{
    return (
        <li>
            <Link href={href}>
                <a >
                    <span className="icon"></span> {label}    
                </a> 
            </Link>
        </li>
    )
}