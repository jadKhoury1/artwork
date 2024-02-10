import { useContext} from 'react';
import { SearchContext } from '@/Context/StateContext';
import Input from './Input';
import InputLabel from './InputLabel';
import Icon from './Icon';

const TextSearch = ({ withLabel = true }) => {
    const {filters, setFilter} = useContext(SearchContext);

    return (
        <div>
            { withLabel && <InputLabel>SEARCH KEYWORD</InputLabel>}
            <Input 
                type="text" 
                placeholder="Search..." 
                icon="search" 
                className="my-4"
                value={typeof filters.keyword === 'undefined' ? '' : filters.keyword}
                handleChange={e => setFilter('keyword', e.target.value)}
            >
                <Icon className="absolute top-7 right-4 dark:fill-gray-300" name="search" size="20"/>
            </Input>
        </div>
    );
};

export default TextSearch;