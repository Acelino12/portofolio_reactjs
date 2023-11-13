
import { Link } from "react-router-dom";
import Logo from '../../assets/logo_marsel.svg';

const Header = () => {
    return(
    <>
    <header className=" w-full bg-slate-50 h-20 grid-cols-3 grid top-0 "> {/* header sticky atau fixed*/}
                <div className="h-full float-left">
                    <Link to="/home">
                        <img src={Logo} className=" ps-4 pt-7 w-48 " alt="React logo" />
                    </Link>
                </div>
                <div></div>
                <div className=" float-right h-full grid grid-cols-3 items-center text-center font-sans text-xs md:text-sm lg:text-lg ">
                    <Link to="/home" className=" hover:text-blue-600 transition-colors">
                        <p>Home</p>
                    </Link>
                    <Link to="/home" className=" hover:text-blue-600 transition-colors">
                        <p>About</p>
                    </Link>
                    <Link to="/contactus" className=" hover:text-blue-600 transition-colors">
                        <p>Contact</p>
                    </Link>
                </div>
    </header>
    </>
    )
}

export default Header;