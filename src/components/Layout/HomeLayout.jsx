
import FormKeahlian from "../Fragments/FormKeahlian";
import FormPerkenalan from "../Fragments/FormPerkenalan";

const HomeLayout = () =>{
    return (
        <>
        <div className=" w-full h-auto items-center pt-5 bg-slate-50">
            <div className="px-4">
                <FormPerkenalan/>
            </div>
            <FormKeahlian/>
        </div>
        </>
    )
}

export default HomeLayout;