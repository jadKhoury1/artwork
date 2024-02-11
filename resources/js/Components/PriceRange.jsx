import { useContext} from 'react';
import { SearchContext } from '@/Context/StateContext';
import Input from './Input';
import InputLabel from './InputLabel';

const PriceRange = ({ withLabel = true }) => {
    const {filters, setFilter} = useContext(SearchContext);

    /* useEffect(() => {
        let debounceTimeout
        if (minPriceChanged === true) {
            debounceTimeout = setTimeout(() => {
                setFilter('min_price', minPrice);
            }, 1000);
        } else {
            setMinpriceChanged(true);
        }

        return () => clearTimeout(debounceTimeout);
        
    }, [minPrice]); */
    
    return (
        <div>
            {withLabel && <div className="my-4"><InputLabel>PRICE RANGE</InputLabel></div>}
            <div className="flex justify-center items-center my-4">
                <Input 
                    type="number" 
                    placeholder="MIN" 
                    value={typeof filters.min_price === 'undefined' ? '' : filters.min_price}
                    handleChange={e => setFilter('min_price', e.target.value )}
                />
                <span className="mx-2 font-bold dark:text-white">to</span>
                <Input 
                    type="number" 
                    placeholder="MAX" 
                    value={typeof filters.max_price === 'undefined' ? '' : filters.max_price}
                    handleChange={e => setFilter('max_price', e.target.value)}
                />
            </div>
        </div>
    );
};

export default PriceRange;