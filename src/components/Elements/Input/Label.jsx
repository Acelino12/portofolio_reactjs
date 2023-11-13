const Label = (prompt) => {
    const {label, htmlFor} = prompt;
    return(
        <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">
            {label}
        </label>
    );
};

export default Label;