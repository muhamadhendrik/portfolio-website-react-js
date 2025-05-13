import React from "react";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
                    Portfolio
                </h1>
            </div>
            <ul
                className={`menu flex items-center gap-4 sm:gap-10 fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:static bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent md:p-0 transition-none md:transition-none z-40 ${
                    active ? "md:opacity-100 md:top-0" : "-top-10 opacity-0 md:opacity-100 md:top-0"
                }`}>
                <li>
                    <a href="#beranda" className="sm:text-lg text-base font-medium">
                        Beranda
                    </a>
                </li>
                <li>
                    <a href="#tentang" className="sm:text-lg text-base font-medium">
                        Tentang
                    </a>
                </li>
                <li>
                    <a href="#proyek" className="sm:text-lg text-base font-medium">
                        Proyek
                    </a>
                </li>
                <li>
                    <a href="#kontak" className="sm:text-lg text-base font-medium">
                        Kontak
                    </a>
                </li>
            </ul>
        </div>
    );
};
