import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="absolute top-0 left-0 z-0 w-full visible-inherit opacity-100 h-full">
            <div className="isolate bg-background bg-cover bg-repeat bg-center w-full opacity-100 h-full">
                <Navigation />
                <main>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-56 sm:py-48 lg:py-56">
                            <div className="flex text-center">
                                <h1 className="header-text text-5xl font-bold tracking-tight text-gray-900 sm:text-8xl text-white font-permanent m-auto">
                                    Enjoy whit us
                                </h1>
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