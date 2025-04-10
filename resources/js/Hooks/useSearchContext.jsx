import { useState } from 'react';
import omit from 'lodash.omit';
import { SearchContext } from '@/Context/StateContext';


const useSearchContext = () => {
    const Provider = ({ children,  initialFilters = {}, withDebounce = false }) => {
        const [filters, setAllFilters] = useState(initialFilters);
        const [updatedFilter, setUpdatedFilter] = useState('');

        /**
         * @param {string} key 
         * @param {string|number|null}} value 
         */
        const setFilter = (key, value) => {
            switch(key) {
                case 'collection':
                    setCollectionFilter(value);
                    setUpdatedFilter('collection');
                    break;
                case 'color':
                    setColorFilter(value);
                    setUpdatedFilter('color');
                    break;
                default:
                    setStandardFilter(key, value);
                    setUpdatedFilter(key);
            }
        };


        /**
         * @param {string} key
         * @param {string|number|null} value 
         */
        const setStandardFilter = (key, value) => {
            // When value is empty string - filter should be removed
            if (value === '') {
                setAllFilters(omit(filters, key));
            } else {
                setAllFilters({...filters, [key]: value});
            }
        };

        /**
         * @param {string} value 
         */
        const setCollectionFilter = value => {
            // When value is equal to All - collection filter should be removed
            if (value === 'All') {
                setAllFilters(omit(filters, 'collection'));
            } else {
                setAllFilters({...filters, collection: value});
            }
        };

        /**
         * 
         * @param {string} value 
         */
        const setColorFilter = value => {
            // When value is equal to Any - color filter should be removed
            if (value === 'Any') {
                setAllFilters(omit(filters, 'color'));
            } else {
                setAllFilters({...filters, color: value});
            }
        };

        return (
            <SearchContext.Provider value={{filters, initialFilters, updatedFilter, setAllFilters, setFilter, withDebounce}}>
                {children}
            </SearchContext.Provider>
        )
    }

    return {Provider, Context: SearchContext}
}

export default useSearchContext;