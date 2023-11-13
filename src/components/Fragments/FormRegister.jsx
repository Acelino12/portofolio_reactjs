import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () =>{
    return (
        <form action="">
            <InputForm 
                label="Name" 
                type="text" 
                placeholder="masukan nama anda" 
                name="nama"/>
            <br/>
            <InputForm 
                label="Email" 
                type="email" 
                placeholder="contoh@mail.com" 
                name="email"/>
            <br/>
            <InputForm 
                label="Password" 
                type="password" 
                placeholder="******" 
                name="password"/>
                <br/>
            <InputForm 
                label="Confir Password" 
                type="password" 
                placeholder="******" 
                name="confir password"/>
                <br/>
            <Button variant="bg-blue-600">Register</Button>
      </form>
    );
};

export default FormRegister;

