import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (value: any) => void;
    label?: string;
    columnClasses?: string;
    id:string;
    color?: string,
    tam?: string
}

export const Input: React.FC<InputProps> = ({
    onChange,
    label, 
    columnClasses,
    id,
    color,
    tam,
    ...inputProps
}: InputProps) =>{
    return(
        <div className={`field column ${columnClasses} `} >
                <label className="label" htmlFor={id}>{label}</label>
                <div className="control" >
                    <input className={`input ${color} ${tam}`} 
                            id={id} {...inputProps}
                            onChange={event => onChange(event.target.value)}
                             />
                </div>
        </div>
    )
}