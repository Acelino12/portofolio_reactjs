

const CardContact = (prompt) => {
    const {gambar,nama,output,link,hover_bg,hover_shadow,border,btn_hover} = prompt;
    return (
        <>
        <div className={`float-left m-2 w-80 h-96 bg-white ${hover_bg} rounded-lg pt-3 transition hover:shadow-3xl ${hover_shadow}
                        border-2 ${border}`}>
                    <img src={gambar} className=" mx-auto w-16 mt-8" alt={nama} />
                    <p className="text-center font-sans font-bold text-lg mt-8">{nama}</p>
                    <input className="w-11/12 h-9 ms-3 p-2 bg-white rounded-lg mt-4 mb-20 border-zinc-300 border-4" 
                            type="text" name={nama} value={output} readOnly/>
                    <a href={link} className=" w-fit h-fit ms-10" target="_blink">
                        <button className= {`w-9/12 h-8 bg-white rounded-lg text-sky-500 font-bold border-2 ${border}
                                 ${btn_hover} ${border} hover:text-white transition`}>Open</button></a>
        </div>
        </>
    )
}

export default CardContact;