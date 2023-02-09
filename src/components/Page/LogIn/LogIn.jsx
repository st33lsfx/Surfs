import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import logo from "../../../images/logo-black.svg";
import { Checkbox, Label, TextInput } from "flowbite-react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (email && password) {
            const oneUser = {email, password}
            setUsers((users) => {
                return [...users, oneUser]
            })
        } else {
            console.log("nebylo nic vyplněno")
        }

        if (email === "admin@admin.cz" && password === "test") {
            toast.success("Uživatel úspěšně přihlášen", {
                position: toast.POSITION.TOP_CENTER
            });
            const form = document.getElementById('form')
            form.innerHTML = "<div class='text-lg text-center '>Přihlášen</div>"
        } else {
            toast.error("Zadali jste špatný email nebo heslo, zkuste to prosím znovu !", {
                position: toast.POSITION.TOP_CENTER
            });
        }

        setEmail("")
        setPassword("")

    }

    return (
        <div className="absolute top-0 left-0 z-0 w-full visible-inherit opacity-100">
            <div className="isolate bg-surfing bg-cover bg-repeat bg-center w-full opacity-100">
                <Navigation/>
                <ToastContainer />
                <div className="flex flex-col justify-center items-center h-screen m-auto">
                    <form
                        onSubmit={handleFormSubmit}
                        className="flex flex-col w-96 justify-between gap-4 shadow-xl border p-10 border rounded-lg backdrop-opacity-60 backdrop-invert bg-white/30 "
                        id="form"
                    >
                        <div className="flex flex-col justify-center items-center">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <img className="h-24 ml-4 backdrop-opacity-60 backdrop-invert bg-white/30" src={logo}
                                     alt="logo"/>
                            </Link>
                        </div>
                        <div className="m-4">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="Your email"
                                required={true}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="m-4">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required={true}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2 m-4 mt-1">
                            <Checkbox id="remember"/>
                            <Label htmlFor="remember">
                                Remember me
                            </Label>
                        </div>
                        <button
                            type="submit"
                            className="block m-auto border rounded-lg p-2 bg-white w-1/2 hover:bg-zinc-500"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LogIn