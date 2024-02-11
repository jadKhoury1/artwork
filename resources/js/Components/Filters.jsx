import ColorSearch from './ColorSearch';
import PriceRange from './PriceRange';
import TextSearch from './TextSearch';

const Filter = () => {
    return (
        <div>
            <div className="mt-8">
                <TextSearch />
            </div>
            <ColorSearch />
            <div className="mt-8">
                <PriceRange />
            </div>
        </div>
    );
};

export default Filter;