import { Link } from "react-router-dom";

import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayout";

const LoginPage = () =>{
    return(
        <AuthLayout judul="Login">
            <FormLogin></FormLogin>
            <p className="text-center mt-5" >Belum punya akun? silakan
            <Link to="/register" className="text-blue-600"> daftar</Link></p>
        </AuthLayout>
    );
};

export default LoginPage;

