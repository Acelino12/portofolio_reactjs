
import Icon_HTML from "../../assets/icon_html.svg";
import Icon_CSS from "../../assets/icon_css.svg";
import Icon_android from "../../assets/icon_android_studio.svg";
import Icon_JS from "../../assets/icon_js.svg";
import Icon_React from "../../assets/icon_react.svg";
import Icon_Java from "../../assets/icon_java.svg";
import Icon_python from "../../assets/icon_python.svg";
import Icon_Cplus from "../../assets/icon_c++.svg";
import Icon_SQL from "../../assets/icon_sql.svg";
import Icon_Figma from "../../assets/icon_figma.svg";
import Icon_Unity from "../../assets/icon_unity.svg";
import Icon_Biner from "../../assets/icon_biner.svg"
import Card from "../Elements/Card/Card";

import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS


const FormKeahlian = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            offset: 100,   // Offset (jarak) dari elemen saat elemen masih di luar layar
          }); // Inisialisasi AOS
      }, []);

    return (
        <>
        <div className=" w-full h-fit bg-gradient-to-b from-indigo-50 to-orange-100 pt-3 "> 
            
            {/* keahlian */}

            <h1 className=" font-extrabold font-sans text-center text-2xl">Keahlian</h1>
            <div className=" w-96 md:w-96 lg:w-full h-fit mt-3">
                <div className=" h-14 md:h-20 lg:h-32 m-auto w-fit">
                    <Card gambar={Icon_HTML} nama="HTML" margin="lg:ms-0" marginsm="ms-0" />
                    <Card gambar={Icon_CSS} nama="CSS" />
                    <Card gambar={Icon_JS} nama="JavaScript" />
                    <Card gambar={Icon_React} nama="React" />
                    <Card gambar={Icon_Java} nama="Java" />
                    <Card gambar={Icon_android} nama="Android" />
                </div>
                <div className=" h-14 md:h-20 lg:h-32 m-auto w-fit">
                    <Card gambar={Icon_python} nama="Python" margin="lg:ms-0" marginsm="ms-0" />
                    <Card gambar={Icon_Cplus} nama="C++" />
                    <Card gambar={Icon_SQL} nama="SQL" />
                    <Card gambar={Icon_Figma} nama="Figma" />
                    <Card gambar={Icon_Unity} nama="Unity" />
                </div>
            </div>

            {/* pengalaman */}

            <div className=" w-full h-fit mt-52" id="pengalaman"> 
                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 ms-28 mt-28 float-left rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-left">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">PENGALAMAN</p>
                        <p className=" font-bold">Freelancer Video Editor</p> 

                            <ul className=" list-disc ms-8">
                                <li>Editing video musik (organisasi/individu)</li>
                                <li>Editing film pendek</li>
                            </ul>
                    </div>
                    {/* lingkaran */}
                    <div className=" w-6 h-6 ms-28 mt-40 rounded-3xl float-left bg-black" data-aos="zoom-in"></div> 

                    {/* tanggal */}
                    <div className=" ms-28 mt-40 float-left font-bold" data-aos="fade-right">
                        <p>2018-Now</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>


                {/* project kuliah */}

                <div className="w-full h-fit" id="project">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 me-28 mt-28 float-right rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-right">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">PROJECT KULIAH</p>
                        <p className=" font-bold">E-Commerce Game (Web)</p> 

                            <ul className=" list-disc ms-8">
                                <li>Memimpin tim, melakukan pembagian tugas dan menjadwalkan</li>
                                <li>Membuat UI/UX, mengimplementasikan tampilan</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 me-28 mt-40 rounded-3xl float-right bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" me-28 mt-40 float-right font-bold" data-aos="fade-left">
                        <p>2019</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>



                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 ms-28 mt-28 float-left rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-left">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">PROJECT KULIAH</p>
                        <p className=" font-bold">Katalog Pizza (APK)</p> 

                            <ul className=" list-disc ms-8">
                                <li>Membuat UI/UX </li>
                                <li>Implementasi android studio</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 ms-28 mt-40 rounded-3xl float-left bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" ms-28 mt-40 float-left font-bold" data-aos="fade-right">
                        <p>2020</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>



                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 me-28 mt-28 float-right rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-right">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">PROJECT KULIAH</p>
                        <p className=" font-bold">Game 2D(Android)</p> 

                            <ul className=" list-disc ms-8">
                                <li>Membuat UI/UX </li>
                                <li>Implementasi dengan Unity 2D, C#</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 me-28 mt-40 rounded-3xl float-right bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" me-28 mt-40 float-right font-bold" data-aos="fade-left">
                        <p>2021</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>

                

                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 ms-28 mt-28 float-left rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-left">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">PROJECT KULIAH</p>
                        <p className=" font-bold">Game 3D(Android)</p> 

                            <ul className=" list-disc ms-8">
                                <li>Membuat UI/UX </li>
                                <li>Implementasi dengan Unity 3D, C#</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 ms-28 mt-40 rounded-3xl float-left bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" ms-28 mt-40 float-left font-bold" data-aos="fade-right">
                        <p>2022</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>


                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 me-28 mt-28 float-right rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-right">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">PROJECT KULIAH</p>
                        <p className=" font-bold">Pencarian Kost terdekat (APK Skripsi)</p> 

                            <ul className=" list-disc ms-8">
                                <li>Pengembangan dengan metode Waterfall model</li>
                                <li>Implementasi Algoritma Floyd-Warshall </li>
                                <li>Java dan SQLite </li>
                                <li>Menghubungkan API Google Maps</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 me-28 mt-40 rounded-3xl float-right bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" me-28 mt-40 float-right font-bold" data-aos="fade-left">
                        <p>2023</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>

            </div>

        {/* organisasi & CV PDF */}

            <div className=" w-full h-hit mt-4">
                <div className=" w-full h-hit grid-cols-2 grid">
                        <Link to="https://drive.google.com/file/d/19u4pmzOQHCLQE6oNbmgz2AhN1EQtVnOz/view?usp=sharing" className=" duration-200 hover:shadow-2xl hover:shadow-red-700 hover:border-red-700 border-2 
                                                    rounded-lg mx-auto w-64 h-10 hover:bg-red-800 bg-red-600 text-white text-center 
                                                    font-bold text-xs md:text-sm lg:text-lg" target="_blank" >
                            <div className="float-right">
                                <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-800 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                            </span>
                            </div>
                            <h1 className="px-6 pt-1 rounded-md w-full ">Download CV</h1>
                        </Link>

                        <Link to="/organisasi" className=" duration-200 hover:shadow-2xl hover:shadow-sky-800 hover:border-sky-800 border-2 hover:bg-sky-800 
                                                    mx-auto w-64 h-10 rounded-lg bg-sky-500 text-white text-center 
                                                    font-bold text-xs md:text-sm lg:text-lg">
                            <h1 className="px-6 pt-1 rounded-md w-full ">Organisasi</h1>
                        </Link>
                    
                </div>

                <div className=" relative h-48 w-auto">
                    <img src={Icon_Biner} alt="" className="float-left w-4/12 pt-3"/>
                    <img src={Icon_Biner} alt="" className="float-left w-4/12 pt-3"/>
                    <img src={Icon_Biner} alt="" className="float-left w-4/12 pt-3"/>
                </div> 
                
            </div>

        </div>
        </>
    )
}

export default FormKeahlian;