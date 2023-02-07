import links from '../../../navigation'
import logo from "../../../images/logo-white.svg"
import logoColor from "../../../images/logo-color.jpg"
import {useState} from 'react'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import {Dialog} from "@headlessui/react";

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <nav className="flex items-center justify-between pt-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-24 ml-4" src={logo} alt="logo"/>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setShowMenu(true)}
                    >
                        <Bars3Icon className="h-8 w-8 mr-4 text-white" aria-hidden="true"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {links.map((item) => (
                        <a key={item.id} href={item.url}
                           className="text-sm font-semibold leading-6 text-gray-900 text-white text-2xl font-permanent">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-6">
                    <a href="/log-in"
                       className="text-sm font-semibold leading-6 text-gray-900 text-white text-2xl font-permanent">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog as="div" open={showMenu} onClose={setShowMenu}>
                <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img className="h-20" src={logoColor} alt="logo"/>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setShowMenu(false)}
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {links.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.url}
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="/log-in"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}

export default Navigation