import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full group">

      {/* Search Icon */}
      <Search
        size={18}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-black"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search for products..."
        className="
          w-full
          h-12
          rounded-full
          border
          border-gray-200
          bg-gray-50
          pl-14
          pr-20
          text-[15px]
          outline-none
          transition-all
          duration-300
          placeholder:text-gray-400
          focus:bg-white
          focus:border-black
          focus:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      />

      {/* Keyboard Shortcut */}
      <div
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          hidden
          xl:flex
          items-center
          gap-1
          rounded-lg
          border
          border-gray-200
          bg-white
          px-2
          py-1
          text-xs
          text-gray-500
          shadow-sm
        "
      >
        <kbd className="font-semibold">⌘</kbd>
        <span>K</span>
      </div>
    </div>
  );
};

export default SearchBar;