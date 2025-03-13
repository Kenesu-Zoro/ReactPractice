import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
                    
                    {/* Text Content */}
                    <div className="max-w-xl space-y-8 text-center sm:text-left">
                        <h2 className="text-4xl font-bold sm:text-4xl">
                            One Piece
                            <span className="hidden sm:block text-2xl">The G.O.A.T Anime</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="https://en.wikipedia.org/wiki/One_Piece"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; More info
                        </Link>
                    </div>

                    {/* Image on Right with Increased Size */}
                    <div className="relative sm:ml-10 sm:mt-0 mt-10">
                        <img className="sm:w-[400px] w-[250px]" src="https://imgs.search.brave.com/arWwdgJdE95uidF-Ph0FBGk4xSKXUyVkitcAF6rI9fY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/bWFrLmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA3L1N0cmF3X2hh/dF9sb2dvLW1pbi5w/bmc" alt="image1" />
                    </div>
                </div>
            </aside>

            {/* Second Image Below with Increased Size */}
            <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-[400px] w-[250px]" src="https://imgs.search.brave.com/hOjHn0AWSdYS-bpaqCZRVUTC-_pD7TOgFTUb8kuAU9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNmL2I5/LzgzLzNmYjk4MzY3/NmQ4ZDA4YjVmMzEy/NzYwN2JhMzg0YzI0/LmpwZw" alt="image2" />
            </div>

            {/* Heading Below */}
            <h1 className="text-center font-bold text-2xl sm:text-5xl py-10 text-emerald-600">Roronoa Zoro</h1>
        </div>
    );
}
