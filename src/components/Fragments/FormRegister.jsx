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
            <select>
                <option value="pria">pria</option>
                <option value="wanita">wanita</option>
            </select>
                <br />
            <textarea name="text" id="text" cols="30" rows="10"></textarea>
            <br />

            <input type="date" name="" id="" />

            <input type="radio" name="asd" id="asd" />

            <input type="color" name="" id="" />

            <input type="datetime-local" name="" id="" />

            <br /><br />

            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/J_WuWM454cE?si=5iD6ATJe8KdrLP_6&amp;start=60" 
            title="YouTube video player"
             
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>

            <br /><br /><br />



            <Button variant="bg-blue-600">Register</Button>
      </form>

    );
};

export default FormRegister;

