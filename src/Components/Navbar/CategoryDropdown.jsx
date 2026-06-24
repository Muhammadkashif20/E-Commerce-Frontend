import React from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  "Electronics",
  "Fashion",
  "Mobiles",
  "Laptops",
  "Gaming",
  "Accessories",
];

const CategoryDropdown = () => {
  return (
    <div className="relative group cursor-pointer">

      <div className="flex items-center gap-1 text-gray-600 hover:text-black transition-all duration-300 font-medium">

        Categories

        <ChevronDown
          size={16}
          className="group-hover:rotate-180 transition-all duration-300"
        />

      </div>

      <div
        className="
        absolute
        left-0
        top-8
        w-60
        rounded-2xl
        bg-white
        shadow-2xl
        border
        border-gray-100
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
        {categories.map((item) => (
          <div
            key={item}
            className="
              px-5
              py-3
              hover:bg-gray-100
              transition-all
              cursor-pointer
              text-sm
              font-medium
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;