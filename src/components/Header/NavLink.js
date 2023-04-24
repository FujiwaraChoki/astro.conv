import Link from "next/link";

const NavLink = ({ href, text }) => {
    return (
        <Link
            href={href}
            className="inline-block relative group text-white font-medium text-xl transition duration-300 ease-in-out transform hover:translate-x-2"
        >
            {text}
            <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"
            ></span>
        </Link>
    );
};

export default NavLink;
