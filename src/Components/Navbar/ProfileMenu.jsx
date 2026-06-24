import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
} from "lucide-react";

const ProfileMenu = () => {
  return (
    <div className="flex items-center gap-3">

      {/* Wishlist */}
      <button
        className="
          relative
          w-11
          h-11
          rounded-full
          bg-white
          border
          border-gray-200
          flex
          items-center
          justify-center
          hover:bg-black
          hover:text-white
          hover:shadow-xl
          transition-all
          duration-300
        "
      >
        <Heart size={20} />

        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
          2
        </span>
      </button>

      {/* Cart */}
      <Link
        to="/cart"
        className="
          relative
          w-11
          h-11
          rounded-full
          bg-white
          border
          border-gray-200
          flex
          items-center
          justify-center
          hover:bg-black
          hover:text-white
          hover:shadow-xl
          transition-all
          duration-300
        "
      >
        <ShoppingBag size={20} />

        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
          3
        </span>
      </Link>

      {/* Profile */}
      <div className="relative group">

        <button
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-gray-200
            bg-white
            px-2
            py-1.5
            hover:shadow-lg
            transition-all
            duration-300
          "
        >
          <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            MK
          </div>

          <ChevronDown
            size={16}
            className="transition-transform duration-300 group-hover:rotate-180"
          />
        </button>

        {/* Dropdown */}

        <div
          className="
            absolute
            right-0
            top-14
            w-60
            rounded-2xl
            border
            border-gray-100
            bg-white
            shadow-2xl
            opacity-0
            invisible
            translate-y-3
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all
            duration-300
            overflow-hidden
          "
        >

          <div className="border-b px-5 py-4">

            <p className="font-semibold">
              Muhammad Kashif
            </p>

            <p className="text-sm text-gray-500">
              kashif@gmail.com
            </p>

          </div>

          <Link
            to="/profile"
            className="block px-5 py-3 hover:bg-gray-100 transition"
          >
            My Profile
          </Link>

          <Link
            to="/orders"
            className="block px-5 py-3 hover:bg-gray-100 transition"
          >
            My Orders
          </Link>

          <Link
            to="/wishlist"
            className="block px-5 py-3 hover:bg-gray-100 transition"
          >
            Wishlist
          </Link>

          <button
            className="
              w-full
              text-left
              px-5
              py-3
              text-red-500
              hover:bg-red-50
              transition
            "
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProfileMenu;