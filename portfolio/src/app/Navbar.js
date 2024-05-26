"use client";
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import './navbar.css';

const NavbarComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 15 * window.innerHeight / 16) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar-border z-10`} style={{ backgroundColor: '#ffffff' }}>
            <Navbar className={`px-36 ${isScrolled ? 'py-2' : 'py-5'} w-full transition-all duration-500`}>
                <NavbarContent className="hidden sm:flex gap-5 justify-between">
                    <p className="font-bold text-black text-3xl hover:transform hover:scale-125 duration-500 px-5">SohamSangole</p>
                    <NavbarItem>
                        <Link
                            color="foreground"
                            href="/"
                            className="text-lg text-black link-hover-effect"
                        >
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="/articles"
                            aria-current="page"
                            className="text-lg text-black link-hover-effect"
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
                            className="text-lg text-black link-hover-effect"
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
                            className="text-lg text-black link-hover-effect"
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
                            className="text-lg text-black link-hover-effect"
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