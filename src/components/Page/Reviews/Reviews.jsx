import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import dataReviews from '../../../trip.json'
import {useState} from "react";

function Reviews() {
    const reviewsPerPage = 6

    const [ reviews, setReviews ] = useState(reviewsPerPage)

    const dataRev = dataReviews
    const handleMoreReviews = () => {
        setReviews( reviews + reviewsPerPage )
    }

    return (
        <div className="absolute top-0 left-0 z-0 w-full visible-inherit opacity-100">
            <div className="isolate bg-reviews bg-cover bg-repeat bg-center w-full opacity-100">
                <Navigation/>
                <div className="flex flex-row flex-wrap justify-center items-center mt-10">
                    { dataRev.slice(0, reviews).map( ( oneReviews, index ) => {
                        return (
                            <div
                                className="flex flex-col shadow-xl text-black w-72 m-10 border border-b-2 rounded-xl h-96 backdrop-opacity-60 backdrop-invert bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                key={ index }
                            >
                                <div className="flex justify-center items-center">
                                    <img src={oneReviews["Profile picture"]} alt=""
                                         className="h-12 w-12 mt-6 rounded-full"/>
                                </div>
                                <small className="text-center mt-2">{oneReviews["Author"]}</small>
                                <h1 className="m-4 text-center"><strong>{oneReviews["Title"]}</strong></h1>
                                <p className="mx-4 mt-6 text-center line-clamp-6 font-permanent ">{oneReviews["Review text"]}</p>
                            </div>
                        )
                    })}
                    { reviews < dataRev.length && (
                        <div className="block justify-center items-center w-full text-center mx-auto mb-5">
                            <button
                                className="text-black border bg-white rounded-xl my-4 p-3 w-44"
                                onClick={ handleMoreReviews }
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Reviews;