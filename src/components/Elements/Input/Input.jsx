const Input = (prompt) => {
    const {type, placeholder, name} = prompt;
    return(
        <input type={type} placeholder={placeholder} name={name} id={name}
        className=" textsm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50">
        </input>
    );
};

export default Input;