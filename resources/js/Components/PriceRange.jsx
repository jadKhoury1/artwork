import { useContext, useState } from 'react';
import { SearchContext } from '@/Context/StateContext';
import useDebouncedFilter from '@/Hooks/useDebouncedFilter';
import Input from './Input';
import InputLabel from './InputLabel';

const PriceRange = ({ withLabel = true }) => {
    const {filters, setFilter, withDebounce} = useContext(SearchContext);
    const [minPrice, setMinPrice] = useState(typeof filters.min_price === 'undefined' ? '' : filters.min_price);
    const [maxPrice, setMaxPrice] = useState(typeof filters.max_price === 'undefined' ? '' : filters.max_price);

    useDebouncedFilter(minPrice, filters.min_price, () => setFilter('min_price', minPrice), 1000, withDebounce);
    useDebouncedFilter(maxPrice, filters.max_price, () => setFilter('max_price', maxPrice), 1000, withDebounce);

    return (
        <div>
            {withLabel && <div className="my-4"><InputLabel>PRICE RANGE</InputLabel></div>}
            <div className="flex justify-center items-center my-4">
                <Input 
                    type="number" 
                    placeholder="MIN" 
                    value={minPrice}
                    handleChange={e => setMinPrice(e.target.value)}
                />
                <span className="mx-2 font-bold dark:text-white">to</span>
                <Input 
                    type="number" 
                    placeholder="MAX" 
                    value={maxPrice}
                    handleChange={e => setMaxPrice(e.target.value)}
                />
            </div>
        </div>
    );
};

export default PriceRange;