import React from "react";
import { Heart } from "lucide-react";
import headerIcon from "../assets/headerIcon.png";

const navLinks = [
  { label: "The School", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Life @DBTR", href: "#" },
  { label: "Contact us", href: "#" },
];

const Header = () => (
  <header className="py-4 px-14 border-b">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Left section with icon */}
      <div className="flex items-center gap-8">
        <img src={headerIcon} alt="School Logo" className="h-16 w-16" />
      </div>

      {/* Center section with navigation links */}
      <nav className="flex-1 hidden md:flex items-center justify-center gap-8">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-[24px] hover:text-gray-900 transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Right section with buttons */}
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2 px-6 py-2 border-2 border-red-500 text-red-500 bg-white rounded transition"
          aria-label="CSR"
        >
          <Heart className="w-5 h-5" />
          CSR
        </button>

        <button
          className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          aria-label="Donate"
        >
          <Heart className="w-5 h-5" />
          Donate
        </button>
      </div>
    </div>
  </header>
);

export default Header;
