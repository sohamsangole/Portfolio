import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const NavbarComponent = () => {
    return (
        <div style={{ backgroundColor: '#383896' }}>
            <Navbar className="px-36 py-5 w-full">
                <NavbarContent className="hidden sm:flex gap-5 justify-between">
                    <p className="font-bold hover:text-black text-white text-3xl hover:transform duration-500">Soham Sangole</p>
                    <NavbarItem>
                        <Link
                            color="foreground"
                            href="/"
                            className="text-lg hover:text-black text-white  hover:transform duration-300"
                        >
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="/articles"
                            aria-current="page"
                            className="text-lg hover:text-black text-white  hover:transform duration-300"
                        >
                            Articles
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-5">
                    <NavbarItem>
                        <Link
                            href="https://github.com/sohamsangole"
                            aria-current="page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg hover:text-black text-white  hover:transform duration-300"
                        >
                            Github
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="https://www.linkedin.com/in/sohamsangole/"
                            aria-current="page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg hover:text-black text-white  hover:transform duration-300"
                        >
                            LinkedIn
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="https://leetcode.com/u/sohamsangole/"
                            aria-current="page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg hover:text-black text-white  hover:transform duration-300"
                        >
                            LeetCode
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
