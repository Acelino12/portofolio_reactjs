
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS
import Button from "../Elements/Button/index";

function SertifkatLayout () {

    AOS.init({
        duration: 1000, // Durasi animasi dalam milidetik
        offset: 100,   // Offset (jarak) dari elemen saat elemen masih di luar layar
      }); // Inisialisasi AOS

    return (
        <>
         <div className=" w-full h-fit mt-10"> 
            <h1 className=" font-extrabold font-sans text-center text-2xl">Sertifikat</h1>
                <div className="w-full h-fit mt-10">
                    <div className=" bg-white w-4/12 h-fit p-3 ms-28 mt-28 float-left rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-left">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">FrontEnd React Js | MySkill</p>
                        <Button Link="https://storage.googleapis.com/myskill-v2-certificates/topic-sTLaN1dknfdCpAbUm5O2/EcmYNX9D2BhSTVhUg82SQYnCw6c2-sl0rOpwO9PmuJ0oDfGHi.pdf">Kardensial</Button>

                    </div>
                    {/* lingkaran */}
                    <div className=" w-6 h-6 ms-28 mt-40 rounded-3xl float-left bg-black" data-aos="zoom-in"></div> 

                    {/* tanggal */}
                    <div className=" ms-28 mt-40 float-left font-bold" data-aos="fade-right">
                        <p>Desember 2023</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>


                {/* project kuliah */}

                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit p-3 me-28 mt-28 float-right rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-right">
                        
                    <p className="pt-2 text-xl font-bold text-slate-900 text-center">Git & Github| MySkill</p>
                        <Button Link="https://storage.googleapis.com/myskill-v2-certificates/topic-JakGfrpOr4X1VIIcFXUo/EcmYNX9D2BhSTVhUg82SQYnCw6c2-7vSkNtdDBdWNLuzFT43X.pdf">Kardensial</Button>                
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 me-28 mt-40 rounded-3xl float-right bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" me-28 mt-40 float-right font-bold" data-aos="fade-left">
                        <p>Desember 2023</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>

                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit p-3 ms-28 mt-28 float-left rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-left">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">Figma For Ui/Ux | MySkill</p>
                        <Button Link="https://storage.googleapis.com/myskill-v2-certificates/topic-0vNPoaoZt3APAutE0I4V/EcmYNX9D2BhSTVhUg82SQYnCw6c2-rgTuodnvGzHo8Wp7HtuD.pdf">Kardensial</Button>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 ms-28 mt-40 rounded-3xl float-left bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" ms-28 mt-40 float-left font-bold" data-aos="fade-right">
                        <p>November 2023</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>
            </div>

            <div className=" w-full h-hit mt-4 mb-4">
                <div className=" w-full h-hit grid-cols-1 grid">
                        <Link to="https://drive.google.com/file/d/19u4pmzOQHCLQE6oNbmgz2AhN1EQtVnOz/view?usp=sharing" target="_blank" className=" duration-200 hover:shadow-md hover:shadow-red-700 hover:border-red-700 border-2 
                                                    rounded-lg mx-auto w-64 h-10 hover:bg-red-800 bg-red-600 text-white text-center 
                                                    font-bold text-xs md:text-sm lg:text-lg">
                            <div className="float-right">
                                <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-800 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                            </span>
                            </div>
                            <h1 className="px-6 pt-1 rounded-md w-full ">Download CV</h1>
                        </Link>
                </div>
            </div>
        </>
    )
}

export default SertifkatLayout;