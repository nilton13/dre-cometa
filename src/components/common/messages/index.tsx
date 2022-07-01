interface MessageProps{
    tipo: string;
    texto: string;
}

export const Message: React.FC<MessageProps> = ({
    texto,
    tipo
}) =>{
    return (
        <article className={`message is-${tipo}`}>
            <div className="message-body">
                {texto}
            </div>
        </article>
    )
}