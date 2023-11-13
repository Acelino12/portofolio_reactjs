import Label from "./Label"
import Input from "./Input"

const InputForm = (prompt) => {
    const {name, type, placeholder , label} = prompt;
    return (
        <div>
            <Label htmlFor={name} label={label}/> 
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputForm;