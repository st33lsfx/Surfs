import Cards from "../../Cards/Cards"
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Course = () => {

    return (
        <div className="absolute top-0 left-0 z-0 w-full visible-inherit opacity-100 md:h-full">
        <div className="isolate bg-course bg-cover bg-repeat bg-center w-full opacity-100 md:h-full">
                <Navigation/>
                <div className="flex flex-row justify-center items-center h-auto sm:h-3/4 ">
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <Cards/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Course