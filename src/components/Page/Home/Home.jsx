import Navigation from "../Navigation/Navigation";

const Home = () => {
    return (
        <div className="absolute top-0 left-0 z-0 w-full h-full visible-inherit opacity-100">
            <div className="isolate bg-background bg-cover bg-center w-full h-full opacity-100">
                <Navigation />
                <main>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-56 sm:py-48 lg:py-56">
                            <div className="text-center">
                                <h1 className="header-text text-5xl font-bold tracking-tight text-gray-900 sm:text-8xl text-white font-permanent">
                                    Enjoy whit us
                                </h1>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default Home