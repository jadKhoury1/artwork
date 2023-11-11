import cn from "classnames";
import Icon from "./Icon";

const Input = ({ children, type, placeholder, className, value, readOnly = false }) => {
    return (
        <div className="relative w-full">
            <input
                readOnly={readOnly}
                type={type}
                value={value}
                placeholder={placeholder}
                className={cn(
                    "border-gray-500 rounded-lg w-full dark:bg-black dark:text-gray-300",
                    "focus:outline-none focus:ring-0", className
                )} 
            />
                {children}
        </div>
    );
};

export default Input;