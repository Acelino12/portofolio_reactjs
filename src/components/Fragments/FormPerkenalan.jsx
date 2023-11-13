
import Foto from "../../assets/marsel_foto.png";
import IgLogo from "../../assets/ig_logo.svg";
import LinkedinLogo from "../../assets/linkedin_logo.svg";
import GitHubLogo from "../../assets/icon_github.svg";

import { Link } from "react-router-dom";
const FormPerkenalan = () => {
    return (
        <>
        <div className=" w-auto md:w-auto lg:w-full bg-gradient-to-bl from-indigo-500 to-blue-600 h-96 md:h-96 lg:h-96 rounded-3xl">
                    <div className="float-left h-auto md:h-fit lg:h-fit w-7/12 md:w-7/12 lg:w-7/12">
                        <h1 className=" float-left ps-4 pt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-black font-sans">welcome to my portofolio</h1>
                        <p className=" float-left ps-4 pt-2 text-xs md:text-sm lg:text-xl pe-3">
                            Nama saya Mateus Marselino Kartawijaya, 
                            Fresh-graduate Teknik Informatika, 
                            Universitas Bunda Mulia memiliki minat 
                            dan keahlian dalam pengembangan aplikasi android dan web.
                             Terlatih menggunakan Android Studio, Java dan Javascript. 
                             Memiliki pengetahuan menggunakan React JS, C++, C# , Python, 
                             dan Tailwind CSS. Dapat bekerja sama dalam tim dan 
                             memiliki kemampuan komunikasi yang baik.</p>
                        <div className=" float-left h-auto md:h-fit lg:h-fit sm:mt-6 md:mt-7 lg:mt-12 w-60">
                            <div className=" w-11/12 h-10 m-auto">
                                <Link to="https://www.instagram.com/marselkarta/" target="_blank" >
                                    <img src={IgLogo} className=" ms-2 w-10 float-left hover:scale-90" alt="foto"/>
                                </Link>
                                <Link to="https://www.linkedin.com/in/mateus-marselino-kartawijaya-482791224/" target="_blank">
                                    <img src={LinkedinLogo} className=" w-10 ms-7 float-left hover:scale-90" alt="foto"/>
                                </Link>
                                <Link to="https://github.com/Acelino12" target="_blank">
                                    <img src={GitHubLogo} className=" w-10 ms-7 float-left hover:scale-90" alt="foto"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-5/12 float-left h-96 ">
                        <img src={Foto} className=" w-10/12 md:w-7/12 lg:w-4/12 mx-auto mt-9" alt="foto"/>
                    </div>
                </div>
        </>
    )
}

export default FormPerkenalan;