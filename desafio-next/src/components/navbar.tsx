"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { clientConfig, urlFor } from "../app/lib/sanity";

export interface NavBarProps { }

const Links = [
    { title: "Jogos", href: "/#jogos" },
    { title: "Sobre Nós", href: "/#sobre" },
    { title: "Blog", href: "/blog" },
    { title: "Carreira", href: "/carreira" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex flex-col lg:flex-row items-center justify-between px-4 py-5">
            <div className="flex justify-between w-full lg:w-auto">
                <Link href="/" passHref>
                    <Image src="/images/logo.png" alt="logo" width={263} height={40} />
                </Link>
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <ul
                className={`${isOpen ? "block" : "hidden"
                    } lg:flex flex-col lg:flex-row lg:items-center lg:space-x-8 mt-4 lg:mt-0`}
            >
                {Links.map((link, index) => (
                    <li key={index} className="inline-block mx-4">
                        <Link
                            href={link.href}
                            passHref
                            className="text-white text-base p-2 lg:p-5 hover:bg-primary lg:hover:bg-transparent lg:hover:text-primary"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
