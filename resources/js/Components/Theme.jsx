import { useContext } from "react";
import { ThemeContext } from "@/Context/StateContext";

const Theme = () => {
    const {theme, changeTheme} = useContext(ThemeContext);

    if (theme === 'light') {
        return (
            <div
                onClick={() => changeTheme('dark')} 
                className="bg-gray-200 pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out ring-slate-900/5"
            >
                <div className="h-4 w-4 rounded-full bg-indigo-600 shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out"></div>
            </div>
        );
    } 

    return (
        <div
            onClick={() => changeTheme('light')}
            className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-indigo-600 ring-black/20"
        >
            <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"></div>
        </div>
    );
};

export default Theme;