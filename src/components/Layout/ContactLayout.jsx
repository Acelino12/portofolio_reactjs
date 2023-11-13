
import Icon_Linkedin from "../../assets/linkedin_logo.svg";
import Icon_Gmail from "../../assets/Icon_gmail.svg";
import Icon_Whatsapp from "../../assets/Icon_whatsapp.svg";
import Icon_IG from "../../assets/ig_logo.svg";
import CardContact from "../Elements/Card/CardContact";

const ContactLayout = () => {
    return (
        <>
        <div className=" w-full h-500px flex">
            <div className="w-full h-fit py-5 px-2 ">

                {/* Linkedid */}

                <CardContact 
                    gambar={Icon_Linkedin} 
                    nama="Linkedin"
                    output="Mateus Marselino Kartawijaya"
                    link="https://www.linkedin.com/in/mateus-marselino-kartawijaya-482791224/"
                    hover_bg="hover:bg-sky-500"
                    hover_shadow="hover:shadow-sky-500"
                    border="border-sky-500"
                    btn_hover="hover:bg-sky-800"/>

                {/* Email */}

                <CardContact 
                    gambar={Icon_Gmail} 
                    nama="Gmail"
                    output="mateusmarselino.k@gmail.com"
                    link="mailto:mateusmarselino.k@gmail.com"
                    hover_bg="hover:bg-red-500"
                    hover_shadow="hover:shadow-red-500"
                    border="border-red-500"
                    btn_hover="hover:bg-red-800"/>

                {/* Whatsapp */}

                <CardContact 
                    gambar={Icon_Whatsapp} 
                    nama="Whatsapp"
                    output="085967162437"
                    link="https://wa.me/085967162437"
                    hover_bg="hover:bg-green-500"
                    hover_shadow="hover:shadow-green-500"
                    border="border-green-500"
                    btn_hover="hover:bg-green-800"/>

                {/* Instagram */}

                <CardContact 
                    gambar={Icon_IG} 
                    nama="Instagram"
                    output="marselkarta"
                    link="https://www.instagram.com/marselkarta/"
                    hover_bg="hover:bg-pink-500"
                    hover_shadow="hover:shadow-pink-500"
                    border="border-pink-500"
                    btn_hover="hover:bg-pink-800"/>

            </div>
        </div>
        </>
    )
}

export default ContactLayout;