"use client";

import { LuSearch } from "react-icons/lu";
import { BsCart } from "react-icons/bs";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="container mx-auto px-6 pt-6 relative">
            <div className="hidden md:block">
                <div className="flex justify-between items-center py-3">
                    <button className="text-2xl">
                        <LuSearch />
                    </button>
                    <div className="">
                        <Image
                            className="h-20 w-auto"
                            src={logo}
                            alt=""
                        ></Image>
                    </div>
                    <button className="text-2xl">
                        <BsCart />
                    </button>
                </div>
                <div className="text-center flex justify-center text-xl font-medium">
                    <nav>
                        <ul className="flex gap-4 items-center">
                            <li>
                                <Link href={"/dinnerware"}>Dinnerware</Link>
                            </li>
                            <li>
                                <Link href={"/glassware"}>Glassware</Link>
                            </li>
                            <li>
                                <Link href={"/serveware"}>Serveware</Link>
                            </li>
                            <li>
                                <Link href={"/flatware"}>Flatware</Link>
                            </li>
                            <li>
                                <Link href={"/textiles"}>Textiles</Link>
                            </li>
                            <li>
                                <Link href={"/bundles"}>Bundles</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="md:hidden block">
                <div className="flex justify-between items-center py-3 ">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-2xl me-6"
                    >
                        <TbMenu />
                    </button>
                    <div className="">
                        <Image
                            className="h-20 w-auto"
                            src={logo}
                            alt=""
                        ></Image>
                    </div>
                    <div className="space-x-3">
                        <button className="text-2xl">
                            <LuSearch />
                        </button>
                        <button className="text-2xl">
                            <BsCart />
                        </button>
                    </div>
                </div>
                {showMenu && (
                    <div className="text-center flex justify-start text-xl font-medium absolute h-[84vh] w-full bg-black/20 left-0 p-6">
                        <nav>
                            <ul className="flex flex-col gap-4 items-start justify-start">
                                <li>
                                    <Link href={"/dinnerware"}>Dinnerware</Link>
                                </li>
                                <li>
                                    <Link href={"/glassware"}>Glassware</Link>
                                </li>
                                <li>
                                    <Link href={"/serveware"}>Serveware</Link>
                                </li>
                                <li>
                                    <Link href={"/flatware"}>Flatware</Link>
                                </li>
                                <li>
                                    <Link href={"/textiles"}>Textiles</Link>
                                </li>
                                <li>
                                    <Link href={"/bundles"}>Bundles</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
