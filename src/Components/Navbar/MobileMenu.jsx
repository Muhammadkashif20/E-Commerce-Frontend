import React from "react";
import { Link } from "react-router-dom";
import {
  X,
  Home,
  ShoppingBag,
  LayoutGrid,
  Star,
  Phone,
  Heart,
  User,
} from "lucide-react";

const MobileMenu = ({ isOpen = true, onClose = () => {} }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-white z-50 shadow-2xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b">
          <div>
            <h2 className="text-xl font-bold">MK Store</h2>
            <p className="text-xs text-gray-500">
              Premium Shopping
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
          >
            <X className="mx-auto" size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col px-5 py-6 gap-2">

          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            to="/shop"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <ShoppingBag size={18} />
            Shop
          </Link>

          <Link
            to="/categories"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <LayoutGrid size={18} />
            Categories
          </Link>

          <Link
            to="/new-arrivals"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Star size={18} />
            New Arrivals
          </Link>

          <Link
            to="/wishlist"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Heart size={18} />
            Wishlist
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <User size={18} />
            Profile
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Phone size={18} />
            Contact
          </Link>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-6 left-0 w-full px-5">
          <div className="rounded-2xl bg-black text-white p-5">
            <h3 className="font-semibold">
              Summer Sale 🔥
            </h3>

            <p className="text-sm text-gray-300 mt-1">
              Up to 50% OFF on selected products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;