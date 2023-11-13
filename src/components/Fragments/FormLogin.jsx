import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () =>{
  return (
    <form action="">
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
            <Button variant="bg-blue-600">Register</Button>
      </form>
  );
};

export default FormLogin;

