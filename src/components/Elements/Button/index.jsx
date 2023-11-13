
const Button = (prompt) => {
  const {children, variant = "bg-black"} = prompt;
  return (
    <button
    className={`h-10 px-6 font-semibold rounded-md w-full ${variant} text-white`}
    type="submit">{children}</button>
  );
};


export default Button;


//export default Button;

/*
  class ButtonLog extends React.Component{
    render(){
      return (
        <button className="h-10 rounded-md px-6 font-semibold bg-red-600 text-white" 
        type="submit">Login</button>
      );
    }
  }
*/