import Link from "next/link";

import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="relative">
      <nav className="bg-indigo-900 p-4 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <ul className="flex items-center space-x-4">
              <video
                src="/background.mp4"
                autoPlay
                loop
                muted
                className="w-24"
              ></video>
              <NavLink href="/" text="Home" />
              <NavLink href="/about" text="About" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
