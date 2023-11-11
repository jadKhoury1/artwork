export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`capitalize text-lg text-gray-400 font-bold my-5 dark:text-gray-400` + className}>
            {value ? value : children}
        </label>
    );
}
