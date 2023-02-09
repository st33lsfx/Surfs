import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import photo from "../../../carouselPhoto"
import { Carousel } from "flowbite-react";

const Home = () => {
    return (
        <div className="absolute top-0 left-0 z-0 w-full visible-inherit opacity-100">
            <div className="isolate bg-background bg-cover bg-repeat bg-center w-screen opacity-100">
                <Navigation />
                <main>
                    <div className="flex justify-center items-center h-screen m auto px-6 lg:px-8">
                        <div className="mx-auto max-w-2">
                            <div className="flex text-center justify-center items-center">
                                <h1 className="header-text text-5xl font-bold tracking-tight text-gray-900 text-white font-permanent m-auto sm:text-8xl">
                                    Enjoy whit us
                                </h1>
                            </div>
                            <div className="h-56 mt-20 sm:h-96 sm:shadow-2xl">
                                <Carousel>
                                    {
                                        photo.map( ( oneImage) => {
                                            const { id, image } = oneImage

                                            return (
                                                <img key={id} src={image} alt="" />
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>

    )
}

export default Home