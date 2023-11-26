import React from 'react'
import {Link, NavLink} from 'react-router-dom'



export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/png;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}