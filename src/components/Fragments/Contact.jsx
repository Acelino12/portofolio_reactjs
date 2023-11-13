
const ContactFooter = (prompt) =>{
    const {logo,nama_logo,isi_text} = prompt;
    return(
        <>
            <div className=" ps-4 w-full h-9 float-left">
                <img src={logo} className=" pt-2 w-3 md:w-3 lg:w-6 float-left" alt={nama_logo}/>
                <p className=" float-left pt-2 ps-3 text-xs md:text-sm lg:text-xl">{isi_text}</p>
            </div>
        </>
    );
}

export default ContactFooter;