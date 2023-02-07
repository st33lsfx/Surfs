import Home from "./components/Page/Home/Home";
import Blog from "./components/Page/Blog/Blog";
import Course from "./components/Page/Course/Course";
import AboutUs from "./components/Page/AboutUs/AboutUs";
import Contact from "./components/Page/Contact/Contact";

import {Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/course" element={<Course />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App