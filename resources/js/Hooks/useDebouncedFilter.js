import { useEffect } from 'react';

const useDebouncedFilter = (attribute, filter,  setFilter, delay, withDebounce = true) => {
    filter = typeof filter === 'undefined' ? '' : filter;
    useEffect(() => {
        let debounceTimeout
        if (!withDebounce && (attribute !== filter)) {
            setFilter();
        } else if (attribute !== filter) {
            debounceTimeout = setTimeout(() => {
                setFilter()
            }, delay);
        }
        return () => clearTimeout(debounceTimeout);
    }, [attribute])
};

export default useDebouncedFilter;