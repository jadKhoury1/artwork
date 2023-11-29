import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import cn from "classnames";
import NavLink from "./NavLink";
import Icon from "./Icon";
import Theme from "./Theme";
import User from "./User";
import MobileNavLink from "./MobileNavLink";


const Header = () => {
    const {props: {auth}} = usePage();

    const [isVisibleMenu, setVisibleMenu] = useState(false);

    return (
        <div className="h-40">
            <nav 
                className={cn(
                    "bg-white border-b border-gray-100 shadow-lg dark:shadow-none dark:bg-black dark:border-b dark:border-gray-500",
                    "fixed w-screen top-0 z-50"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex relative h-20">
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            {/* Mobile menu button */}
                            <button 
                                type="button" 
                                className={cn(
                                    "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700",
                                    "hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                )}
                                aria-controls="mobile-menu" 
                                aria-expanded={isVisibleMenu}
                                onClick={() => setVisibleMenu(!isVisibleMenu)}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/*
                                    Icon when menu is closed.

                                    Menu open: "hidden", Menu closed: "block"
                                */}
                                <svg className={cn({"hidden": isVisibleMenu}, "h-6 w-6")} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden={isVisibleMenu}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/*
                                    Icon when menu is open.

                                    Menu open: "block", Menu closed: "hidden"
                                */}
                                <svg className={cn({"hidden": !isVisibleMenu}, "h-6 w-6")} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden={!isVisibleMenu}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center grow md:justify-start">
                            <div className="shrink-0 flex items-center">
                                <Link href={route('welcome')}>
                                    <img 
                                        className="block h-14 pr-5 w-auto fill-current md:border-r md:border-gray-500 md:border-solid"
                                        alt="Logo"
                                        src="/images/logo.avif"
                                    />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 md:-my-px md:ml-10 md:flex">
                                <NavLink href={route('items.search')} active={route().current('items.search')}>
                                    Discover
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 md:-my-px md:ml-10 md:flex">
                                <NavLink href={route('items.create')} active={route().current('items.create')}>
                                    Create Item
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 md:-my-px md:ml-10 md:flex">
                                <NavLink href={route('about')} active={route().current('about')}>
                                    About Us
                                </NavLink>
                            </div>

                        </div>
                        <div className="flex absolute inset-y-0  items-center right-0">
                            <div className="flex items-center md:ml-7">
                                <Theme />
                            </div>
                            <div className="hidden md:flex md:ml-7 h-full">
                                <NavLink href={route('items.search')} className="fill-gray-500 hover:fill-gray-700 dark:fill-gray-300">
                                    <Icon name="search" size="20" className="mr-2"/>
                                    <span className="font-bold">
                                        Search
                                    </span>
                                </NavLink>
                            </div>
                            <div className="flex items-center ml-3 md:ml-7">
                                { auth.user ? <User /> : 
                                    <Link
                                        href={route('login')}
                                        className={cn(
                                            "rounded-full border-0 md:border-2 border-indigo-600 dark:text-white text-indigo-600 md:text-indigo-600 dark:md:text-indigo-600 py-2 px-4",
                                            "md:hover:bg-indigo-600 md:hover:text-white dark:md:hover:text-white font-bold"
                                        )}
                                    >
                                        Login
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile menu, show/hide based on menu state. */}
                <div className={cn({"hidden": !isVisibleMenu},"md:hidden bg-white dark:bg-black")} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <MobileNavLink href={route('items.search')} active={route().current('items.search')}>Discover</MobileNavLink>
                        <MobileNavLink href={route('items.create')} active={route().current('items.create')}>Create Item</MobileNavLink>
                        <MobileNavLink href={route('about')} active={route().current('about')}>About Us</MobileNavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;