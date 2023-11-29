import { Link } from "@inertiajs/react";
import { useContext } from "react";
import cs from "classnames";
import NavLink from "./NavLink";
import Theme from "./Theme";
import SocialMedia from "./SocialMedia";
import { ThemeContext } from "@/Context/StateContext";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="text-white p-10 md:px-40 md:py-10 lg:px-60 lg:py-20 bg-indigo-600 dark:bg-slate-800">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> 
                <div className={cs(
                    "flex flex-col h-48 items-center md:items-start border-b border-white md:border-0 pb-10 md:pb-0"
                )}>
                    <div>
                        <Link href={route('welcome')}>
                            <img 
                                className="block h-14 w-auto fill-current"
                                alt="Logo"
                                src="/images/logo.avif"
                            />
                        </Link>
                    </div>
                    <div className="grow flex flex-col justify-center">
                        <h3 className="font-bold text-2xl">The new creative economy</h3>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-3">{theme === 'dark' ? 'Light' : 'Dark'} Theme</div>
                        <Theme/>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start border-b border-white md:border-0 pb-10 md:pb-0 text-lg">
                    <h3 className="grow">Menu</h3>
                    <div className="my-2">
                        <NavLink 
                            href={route('items.search')} active={route().current('items.search')} 
                            className="text-white font-black hover:text-white"
                        >
                            Discover
                        </NavLink>
                    </div>

                    <div className="my-2">
                        <NavLink 
                            href={route('items.create')} active={route().current('items.create')}
                            className="text-white font-bold hover:text-white"
                        >
                            Create Item
                        </NavLink>
                    </div>

                    <div className="my-2">
                        <NavLink 
                            href={route('about')} active={route().current('about')}
                            className="text-white font-bold hover:text-white "
                        >
                            About Us
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start md:border-0 pb-10 md:pb-0 text-lg">
                    <h3 className="grow">About The Product</h3>
                    <div className="my-2">
                        <NavLink 
                            href={route('welcome')} 
                            className="text-white font-black hover:text-white"
                        >
                            Documentation
                        </NavLink>
                    </div>

                    <div className="my-2">
                        <NavLink 
                            href="/" 
                            className="text-white font-bold hover:text-white"
                        >
                            Contact Us
                        </NavLink>
                    </div>

                    <div className="my-2">
                        <SocialMedia />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;