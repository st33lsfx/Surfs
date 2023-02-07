import {Card} from "flowbite-react";
import Navigation from "../Navigation/Navigation";

const Course = () => {
    return (
        <div className="absolute top-0 left-0 z-0 w-full h-full visible-inherit opacity-100">
            <div className="isolate bg-course bg-cover bg-center w-full h-full opacity-100">
                <Navigation/>
                <div className="flex flex-row flex-wrap justify-between items-center mx-14">
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20">
                            <a href="#!">
                                <img className="rounded-t-lg"
                                     src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's
                                    content.
                                </p>
                                <button type="button"
                                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20">
                            <a href="#!">
                                <img className="rounded-t-lg"
                                     src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's
                                    content.
                                </p>
                                <button type="button"
                                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20">
                            <a href="#!">
                                <img className="rounded-t-lg"
                                     src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's
                                    content.
                                </p>
                                <button type="button"
                                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course