import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayout";

const RegisterPage = () => {
    return (
        <AuthLayout judul="Register">
            <FormRegister></FormRegister>
            <p className="text-center mt-5" >Sudah punya akun? silakan
            <Link to="/login" className="text-blue-600"> Masuk</Link></p>
        </AuthLayout>
    );
};

export default RegisterPage;