

const FormList = (prons) => {
    const {judul,project = "PROJECT KULIAH", float ="float-left" , IsiList} = prons;
    return(
        <>
        <div className="w-full h-fit">
            <div className={`w-4/12 h-fit pb-2 ps-2 me-28 mt-28 ${float} rounded-xl shadow-lg border-solid border-2 border-slate-300`} data-aos="fade-left">
                        
                <p className="pt-2 text-xl font-bold text-slate-900 text-center">{project}</p>
                <p className=" font-bold">{judul}</p> 

                    <ul className=" list-disc ms-8">
                        {IsiList}
                    </ul>
            </div>

            {/* lingkaran */}
            <div className={`w-6 h-6 me-28 mt-40 rounded-3xl ${float} bg-black`} data-aos="zoom-in"></div> 

            {/* lingkaran */}
            <div className={`me-28 mt-40 ${float} font-bold`} data-aos="fade-left">
                <p>2018-Now</p>
            </div>

            {/* line */}
                <div className=" h-96 w-3 bg-black mx-auto"></div> 
            </div>
        </>
    )
}

export default FormList;