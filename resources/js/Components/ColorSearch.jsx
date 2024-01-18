import DropdownSearch from './DropdownSearch';
import InputLabel from './InputLabel';

const ColorSearch = ({ withLabel = true, handleChange }) => {
    const colors = [
        'Any Color', 'Red', 'Yellow', 'Green', 'Blue'
    ];

    return (
        <div>
            {withLabel  && <div className="my-4">
                <InputLabel>SELECT COLOR</InputLabel>
            </div>}
            <div>
                <DropdownSearch 
                    selected="Any Color"
                    list={colors}
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
};

export default ColorSearch;