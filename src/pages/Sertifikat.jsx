
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS

function Sertifkat () {

    AOS.init({
        duration: 1000, // Durasi animasi dalam milidetik
        offset: 100,   // Offset (jarak) dari elemen saat elemen masih di luar layar
      }); // Inisialisasi AOS

    return (
        <>
         <div className=" w-full h-fit mt-10"> 
            <h1 className=" font-extrabold font-sans text-center text-2xl">Sertifikat</h1>
                <div className="w-full h-fit mt-10">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 ms-28 mt-28 float-left rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-left">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">FrontEnd React Js | MySkill</p>

                            <ul className=" list-disc ms-8">
                                <li>Membuat proposal,laporan pertanggung jawaban, dan membuat surat</li>
                                <li>Mencatat surat masuk dan keluar</li>
                            </ul>
                    </div>
                    {/* lingkaran */}
                    <div className=" w-6 h-6 ms-28 mt-40 rounded-3xl float-left bg-black" data-aos="zoom-in"></div> 

                    {/* tanggal */}
                    <div className=" ms-28 mt-40 float-left font-bold" data-aos="fade-right">
                        <p>2017-2018</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>


                {/* project kuliah */}

                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 me-28 mt-28 float-right rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-right">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">Sekretaris PH | Patroli Keamanan Sekolah</p>

                            <ul className=" list-disc ms-8">
                                <li>Membuat proposal,laporan pertanggung jawaban, dan membuat surat</li>
                                <li>Mencatat surat masuk dan keluar</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 me-28 mt-40 rounded-3xl float-right bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" me-28 mt-40 float-right font-bold" data-aos="fade-left">
                        <p>2017-2018</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>



                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 ms-28 mt-28 float-left rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-left">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">Ketua Panitia | Palang Merah Remaja </p>

                            <ul className=" list-disc ms-8">
                                <li>Memimpin tim</li>
                                <li>Melakukan koordinasi dengan setiap panitia</li>
                                <li>Memastikan acara berjalan sesuai rencana</li>
                                <li>Membuat laporan pertanggung jawaban</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 ms-28 mt-40 rounded-3xl float-left bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" ms-28 mt-40 float-left font-bold" data-aos="fade-right">
                        <p>2017-2018</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>



                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 me-28 mt-28 float-right rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-right">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">Anggota | Prodcine</p>

                            <ul className=" list-disc ms-8">
                                <li>Membuat film pendek</li>
                                <li>Editor video</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 me-28 mt-40 rounded-3xl float-right bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" me-28 mt-40 float-right font-bold" data-aos="fade-left">
                        <p>2019-2020</p>
                    </div>

                    {/* line */}
                    <div className=" h-96 w-3 bg-black mx-auto"></div> 
                </div>

                

                <div className="w-full h-fit">
                    <div className=" bg-white w-4/12 h-fit pb-2 ps-2 ms-28 mt-28 float-left rounded-xl shadow-lg border-solid border-2 border-slate-300" data-aos="fade-left">
                        
                        <p className="pt-2 text-xl font-bold text-slate-900 text-center">Koordinator Dokumentasi | Expo Kampus  </p>

                            <ul className=" list-disc ms-8">
                                <li>Memimpin tim</li>
                                <li>Melakukan koordinasi dengan ketua panitia</li>
                                <li>Membuat laporan pertanggung jawaban</li>
                            </ul>
                    </div>

                    {/* lingkaran */}
                    <div className=" w-6 h-6 ms-28 mt-40 rounded-3xl float-left bg-black" data-aos="zoom-in"></div> 

                    {/* lingkaran */}
                    <div className=" ms-28 mt-40 float-left font-bold" data-aos="fade-right">
                        <p>2020-2021</p>
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

export default Sertifkat;