import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function AboutUs(props) {
    return (
        <div>
            <div className="absolute top-0 left-0 z-0 w-full visible-inherit opacity-100">
                <div className="isolate bg-about bg-cover bg-repeat bg-center w-full opacity-100">
                    <Navigation/>
                    <div className="flex flex-col justify-center items-center h-screen w-auto m-auto md:w-auto lg:w-9/12">
                        <div className="flex flex-col p-10 mb-4 border rounded-xl bg-white mx-4 h-auto">
                            <h1 className="text-center mb-10 text-5xl">
                                <strong>About</strong>
                            </h1>
                            <p className="font-permanent">
                                Surfing is amazing sport with awesome vibes! Let me show you and teach you how to surf, how to read the waves and surf conditions. When I´m teaching my clients surfing I always want them to enjoy it and have fun and I make them feel welcome. Based on my experiences it also help my client not to panic. I´m offering private lessons with professional and experienced istructor for complete begginers (1 instructor 1 client). This allows me to give you personal attention, safety, feedback for improving your surfind and of course buddy system. For intermediate, advanced surfers I´m as well offering to be their guid in different surf spots around Bali. I will show you different types of waves, diffrent breaks and I will teach you how to get behind the breaking point safely and how to catch the waves. If it is necessary I will correct your style. All of that may affect to becoming a better surfer or improving your skills.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default AboutUs;