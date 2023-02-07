import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip";

function Cards() {

    const [ courseOne, setCourseOne ] = useState(false)
    const [ courseTwo, setCourseTwo ] = useState(false)
    const [ courseTree, setCourseTree ] = useState(false)

    return (
        <>
            <ReactCardFlip isFlipped={courseOne} flipDirection="horizontal">
                <div onPointerEnter={() => setCourseOne(true)}>
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20">
                            <div className="p-6 h-96 w-80">
                                <div className="flex h-48">
                                    <h1
                                        className="text-gray-900 text-xl font-medium mb-2 text-center m-auto"
                                    >
                                        Course One
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div onPointerLeave={() => setCourseOne(false)}>
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20">
                            <div className="p-6 h-96 w-80">
                                <div className="flex flex-col justify-center items-center px-4">
                                    <h5 className="text-gray-900 text-xl font-medium mb-8 text-center my-auto">Card title</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eius non perferendis quisquam similique temporibus. Ad aut dolore fuga fugiat harum hic id, maiores nam neque nobis quam quod ullam?
                                    </p>
                                </div>
                                <div className="flex justify-center items-center mt-8">
                                    <button
                                        type="button"
                                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Reservation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={courseTwo} flipDirection="horizontal">
                <div onPointerEnter={() => setCourseTwo(true)}>
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20 mx-14">
                            <div className="p-6 h-96 w-80">
                                <div className="flex h-48">
                                    <h1
                                        className="text-gray-900 text-xl font-medium mb-2 text-center m-auto"
                                    >
                                        Course Two
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div onPointerLeave={() => setCourseTwo(false)}>
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20 mx-14">
                            <div className="p-6 h-96 w-80">
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
            </ReactCardFlip>
            <ReactCardFlip isFlipped={courseTree} flipDirection="horizontal">
                <div onPointerEnter={() => setCourseTree(true)}>
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20 mb-10 lg:mb-0">
                            <div className="p-6 h-96 w-80">
                                <div className="flex h-48">
                                    <h1
                                        className="text-gray-900 text-xl font-medium mb-2 text-center m-auto"
                                    >
                                        Course Tree
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div onPointerLeave={() => setCourseTree(false)}>
                    <div className="flex justify-center items-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20 mb-10 lg:mb-0">
                            <div className="p-6 h-96 w-80">
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
            </ReactCardFlip>
        </>
    );
}

export default Cards;