import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import HomeLayout from "../components/Layout/HomeLayout";

const Home = () =>{
    return(
        <>
        <div className=" w-full">
            <Header/>
            <HomeLayout/>
            <Footer/>
        </div>
        </>
    );
};

export default Home;

