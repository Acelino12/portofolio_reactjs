
const AuthLayout = (prompt) => {
    const {judul,children} = prompt;
    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className=" max-w-xs w-full">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{judul}</h1>
            <p className=" font-medium text-slate-500 mb-8">Welcome,pleace enter your detail</p>
        {children}
        </div>
        </div>
    );
};

export default AuthLayout;