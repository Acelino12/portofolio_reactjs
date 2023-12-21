
import {Link} from "react-router-dom" ;
import Logo from "../../assets/logo_marsel.svg";
import Li from "../Elements/list/Li";
import email from "../../assets/icon_mail.png";
import phone from "../../assets/icon_phone.png";
import alamat from "../../assets/icon_location.png";
import ContactFooter from "../Fragments/Contact";
const Footer = () => {
    return (
        <>
        <div className=" w-full md:w-full lg:w-full bg-slate-900 h-96 md:h-96 lg:h-96 ">
            <div className=" float-left h-auto w-6/12 md:w-6/12 lg:w-4/12">
                <Link to="/home" className=" items-center ">
                    <img src={Logo} className=" ps-1 pt-14 lg:ps-4 lg:pt-7 w-20 md:w-20 lg:w-48 mx-auto " alt="logo"/>
                </Link>
            </div>

            <div className="float-left h-auto w-6/12 md:w-6/12 lg:w-4/12 text-white ">
                <div className="float-left w-full">
                    <p className="ps-4 pt-10 text-xl font-bold text-center">About</p>
                    <ul className="ps-4 text-center" type="none">
                        <a href="/home#pengalaman" className="hover:text-blue-600 transition-colors text-white">Pengalaman</a>
                        <Li nama="Sertifikat" arah="/Sertifikat"/>
                        <a href="/home#project" className="hover:text-blue-600 transition-colors text-white">Project</a>
                        <Li nama="Organisasi" arah="/organisasi"/>
                    </ul>
                </div>
            </div>
            
            <div className=" w-full md:w-6/12 lg:w-4/12 float-left h-auto text-white">
                <div className=" w-52 md:w-72 lg:w-full mx-auto ">
                    <p className="ps-4 pt-10 text-xs md:text-sm lg:text-xl font-bold ">Contact Us</p>
                    <ContactFooter logo={email} nama_logo="email" isi_text="mateusmarselino.k@gmail.com"/>
                    <ContactFooter logo={phone} nama_logo="phone" isi_text="085967162437"/>
                    <ContactFooter logo={alamat} nama_logo="alamat" isi_text="Kalideres, Jakarta Barat"/>
                </div>
            </div>

            <div className="float-left w-full pt-4 md:pt-10 lg:pt-44">
                    <p className=" font-mono text-center text-white ">Copyright 2023</p>
            </div>               

        </div>
        </>
    )
}

export default Footer ;