
const Card = (promt) => {
    const {nama, gambar, margin = "lg:ms-6", marginsm = "ms-2"} = promt;
    return (
        <>
        <div className={`float-left w-12 md:w-14 lg:w-28 h-12 md:h-14 lg:h-28 ${marginsm} md:ms-3 ${margin} bg-slate-700 rounded-lg shadow-black shadow-sm  hover:shadow-xl`}>
            <img src={gambar} className=" w-7/12 md:w-7/12 lg:w-8/12 mx-auto mt-2 md:mt-3 lg:mt-4 hover:scale-90 transition-transform" alt={nama} />
        </div>
        </>
    )
}

export default Card;