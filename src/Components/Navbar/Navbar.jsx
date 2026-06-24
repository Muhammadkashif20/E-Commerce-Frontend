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

 <div className="w-full bg-black text-white text-center py-2 text-sm tracking-wide">
  🚚 Free Delivery on Orders Above{" "}
  <span className="font-semibold text-white">Rs 1000</span>
</div>
            <nav className="max-w-7xl mx-auto h-20 px-2 lg:px-2 flex items-center justify-between">

            {/* Logo */}
<Link
  to="/"
  className="flex items-center gap-3 mr-8 group"
>
  {/* Logo */}
  <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md group-hover:shadow-blue-300 transition-all duration-300 group-hover:scale-105">
    <span className="text-white text-lg font-extrabold tracking-wide">
      MK
    </span>
  </div>

  {/* Brand Name */}
  <div className="flex flex-col leading-none">
    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
      MK
      <span className="text-blue-600">Store</span>
    </h1>
    <span className="text-[11px] text-gray-500 tracking-[0.25em] ">
      Premium Shopping
    </span>
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