import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
            <nav className="max-w-7xl mx-auto h-20 px-2 lg:px-2 flex items-center justify-between">

            {/* Logo */}

  {/* Logo */}
 <Link
  to="/"
  className="flex items-center gap-3 mr-8 group"
>
  {/* Logo */}
  <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
    <span className="text-white text-lg font-extrabold">
      MK
    </span>
  </div>

  {/* Brand */}
  <div className="leading-tight">
    <h1 className="text-2xl font-extrabold tracking-tight text-black">
      MK<span className="text-blue-600">Store</span>
    </h1>

    <p className="text-xs font-medium tracking-widest uppercase text-gray-500">
      Smart Shopping
    </p>
  </div>
</Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex">
                    <NavLinks />
                </div>

                {/* Search */}
                <div className="hidden lg:block flex-1 max-w-lg mx-10">
                    <SearchBar />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    <ProfileMenu />

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setIsMobileOpen(true)}
                        className="lg:hidden w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        <Menu size={22} />
                    </button>

                </div>
            </nav>

            {/* Mobile Drawer */}

            <MobileMenu
                isOpen={isMobileOpen}
                onClose={() => setIsMobileOpen(false)}
            />

        </header>
    );
};

export default Navbar;