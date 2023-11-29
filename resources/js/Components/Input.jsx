import cn from "classnames";

const Input = ({ children, name, type, placeholder, className, value, handleChange, readOnly = false }) => {
    return (
        <div className="relative w-full">
            <input
                readOnly={readOnly}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                className={cn(
                    "border-gray-500 rounded-lg w-full dark:bg-black dark:text-gray-300",
                    "focus:outline-none focus:ring-0", className
                )}
                onChange={handleChange}
            />
                {children}
        </div>
    );
};

export default Input;