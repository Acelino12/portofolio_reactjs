import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className=" max-w-xs w-full text-center">
            <h1 className=" text-9xl font-bold mb-2 text-blue-600">404</h1>
            <h1 className=" text-2xl font-bold mb-2">Opsss!!!</h1>
            <p className=" text-xl "> halaman tidak tersedia</p>
            <p className=" text-xl ">{error.statusText || error.message}</p>
        </div>
        </div>
    )
}

export default ErrorPage;