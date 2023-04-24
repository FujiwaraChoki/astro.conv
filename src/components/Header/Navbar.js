import NavLink from "./NavLink";

import { CgScrollV } from "react-icons/cg";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY);
        });
    }, []);

    useEffect(() => {
        console.log("Scroll: " + scroll);
    }, [scroll]);

    return (
        <div className="bg-indigo-900 h-screen">
            <nav className="bg-indigo-900 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <img src="/logo.png" className="w-fit h-fit rounded-full" />
                        </div>
                        <ul className="flex items-center space-x-4">
                            <NavLink href="/" text="Home" />
                            <NavLink href="/about" text="About" />
                        </ul>
                    </div>
                    <button class="transition p-3 ease-in-out delay-150 bg-indigo-500 font-medium text-white text-xl rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                        Go Pro
                    </button>
                </div>
            </nav>
            <div className="flex items-center justify-center">
                {/* Centered CgScrollV icon */}
                <CgScrollV className="text-6xl text-white" />
            </div>
        </div>
    );
};

export default Navbar;
