import { Link } from '@inertiajs/react';

export default function MobileNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'block rounded-md px-3 py-2 text-base font-bold ' +
                (active
                    ? 'bg-gray-200 dark:bg-gray-900 text-indigo-600 '
                    : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 focus:text-gray-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
