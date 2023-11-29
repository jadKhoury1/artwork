import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-600 text-indigo-600 focus:border-indigo-700 '
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-300 dark:hover:border-gray-100 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
