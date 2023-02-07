import {Link} from "react-router-dom";
import Facebook from '../../../images/icons/facebook.png'
import Instagram from '../../../images/icons/instagram.png'
import Twitter from '../../../images/icons/twitter.png'

function Footer(props) {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-auto h-auto bg-black border-black">
                <div className="flex flex-row justify-center items-center my-6">
                    <Link to="https://facebook.com" className="w-12">
                        <img src={Facebook} className="w-8 h-8" alt="facebook"/>
                    </Link>
                    <Link to="https://instagram.com" className="w-12">
                        <img src={Instagram} className="w-8 h-8" alt="instagram"/>
                    </Link>
                    <Link to="https://twitter.com" className="">
                        <img src={Twitter} className="w-8 h-8" alt="twitter"/>
                    </Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <small className="text-white mb-4">
                        Copyright © 2023 Ondřej Němec.</small>
                </div>
            </div>

        </>
    );
}

export default Footer;