import Home from "./components/Page/Home/Home";
import Reviews from "./components/Page/Reviews/Reviews";
import Course from "./components/Page/Course/Course";
import AboutUs from "./components/Page/AboutUs/AboutUs";
import LogIn from "./components/Page/LogIn/LogIn"

import {Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/course" element={<Course />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/log-in" element={<LogIn />} />
            </Routes>
        </div>
    )
}

export default App