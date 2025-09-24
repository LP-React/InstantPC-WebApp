"use client";
import { ChevronDown, Globe, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const links = [
    {
      text: "Home",
      link: "/",
      sublinks: [
        { text: "About Us", link: "/about-us" },
        { text: "Installation guide", link: "/installation" },
        { text: "Help - FAQ", link: "/gaming/support" },
      ],
    },
    {
      text: "Gaming",
      link: "/gaming",
      sublinks: [
        { text: "Games", link: "/gaming/games" },
        { text: "Systems", link: "/gaming-systems" },
        { text: "Help - FAQ", link: "/gaming/support" },
      ],
    },
    {
      text: "Profesionals",
      link: "/profesionals",
      sublinks: [
        { text: "Solutions", link: "/profesionals/solutions" },
        { text: "Programs", link: "/profesionals/programs" },
        { text: "Systems", link: "/profesional-systems" },
        { text: "Help - FAQ", link: "/profesional/support" },
      ],
    },
  ];

  const path = usePathname();
  const [navLinks, setNavLinks] = useState(links);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mode, setMode] = useState("light");
  const [language, setLanguage] = useState("English");

  const toggleMode = () => {
    if (mode === "light") {
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setMode("light");
    }
  };

  
  return (
    <nav className="bg-background text-foreground fixed top-0 z-50 flex w-full shadow-md">
      <div className="m-auto flex w-[70%] items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src={
              mode == "light"
                ? "/instantpc_logo_black_color.png"
                : "/instantpc_logo_white_color.png"
            }
            width={120}
            height={30}
            alt="InstantPC Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Links */}
        <div className="relative flex items-center space-x-6">
          {navLinks.map((option, index) => (
            <div
              key={option.text}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={option.link}
                className={`px-1 font-medium transition duration-150 hover:text-fuchsia-400 ${path === option.link ? "font-semibold text-fuchsia-500" : ""}`}
              >
                {option.text}
              </Link>

              <ChevronDown
                className="inline-block"
                size={18}
                strokeWidth={2.5}
              />

              {option.sublinks && activeDropdown === index && (
                <div className="absolute top-full left-0 z-50 w-48 rounded-lg bg-white py-2 shadow-lg">
                  {option.sublinks.map((sub) => (
                    <Link
                      key={sub.text}
                      href={sub.link}
                      className="block px-4 py-2 text-gray-700 transition hover:bg-fuchsia-100 hover:text-fuchsia-500"
                    >
                      {sub.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Config - language - dark mode */}
        <div className="flex items-center">
          <button className="flex items-center px-2">
            <span className="px-2">{language}</span>
            <Globe size={18} />
          </button>
          <button className="px-2 cursor-pointer hover:text-instant-pink" onClick={toggleMode}>
            {mode == "light" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        {/* Auth Options */}
        {/* <div className="flex space-x-4">
                    <Link href="/login" className="hover:text-pink-500 text-gray-800 font-medium">
                        Login
                    </Link>
                    <Link href="/sign_in" className="hover:text-pink-500 text-gray-800 font-medium">
                        Sign In
                    </Link>
                </div> */}
      </div>
    </nav>
  );
};
