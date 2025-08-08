import React from "react";
import { useTheme } from "../contexts/Theme";

const Nav = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
            <h1 className="text-lg font-bold dark:text-white">My Website</h1>
            <button
                onClick={toggleTheme}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
                Switch to {theme === "light" ? "Dark" : "Light"}
            </button>
        </nav>
    );
};

export default Nav;
