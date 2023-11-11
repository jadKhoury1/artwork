import Input from "./Input";
import InputLabel from "./InputLabel";
import Icon from "./Icon";

const TextSearch = ({ withLabel = true }) => {
    return (
        <div>
            { withLabel && <InputLabel>Search Keyword</InputLabel>}
            <Input type="text" placeholder="Search..." icon="search" className="my-4">
                <Icon className="absolute top-7 right-4 dark:fill-gray-300" name="search" size="20"/>
            </Input>
        </div>
    );
};

export default TextSearch;