import Link from "next/link";

const NavLink = ({ href, text }) => {
    return (
        <Link
            href={href}
            className="hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg transition p-3 ease-in-out delay-150 inline-block relative group text-white font-medium text-2xl transition duration-300 ease-in-out transform hover:translate-x-2"
        >
            {text}
            <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"
            ></span>
        </Link>
    );
};

export default NavLink;
