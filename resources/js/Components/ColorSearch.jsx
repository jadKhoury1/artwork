import { useContext } from 'react';
import { usePage } from '@inertiajs/react';
import { SearchContext } from '@/Context/StateContext';
import DropdownSearch from './DropdownSearch';
import InputLabel from './InputLabel';

const ColorSearch = ({ withLabel = true, handleChange }) => {
    const {props:{colors}} = usePage();
    const {filters, setFilter} = useContext(SearchContext);

    const updateColor = value => {
        setFilter('color', value);

        // Handle change is not mandatory - it should be trigerred only when it is assigned a function
        if (typeof handleChange === 'function') {
            handleChange(value);
        }
    }

    return (
        <div>
            {withLabel  && <div className="my-4">
                <InputLabel>SELECT COLOR</InputLabel>
            </div>}
            <div>
                <DropdownSearch 
                    selected={filters.color || 'Any'}
                    list={colors}
                    handleChange={updateColor}
                />
            </div>
        </div>
    );
};

export default ColorSearch;