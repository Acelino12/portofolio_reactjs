import { Link } from "react-router-dom";

const Li = (prompt) =>{
    const {nama,arah} = prompt;
    return(
        <>
            <li className=" text-white">
                <Link className="hover:text-blue-600 transition-colors" to={arah}>
                    {nama}
                </Link>
            </li>
        </>
    )
}

export default Li;