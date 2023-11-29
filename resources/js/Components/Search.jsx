import ColorSearch from "./ColorSearch";
import PriceRange from "./PriceRange";
import TextSearch from "./TextSearch";

const Search = () => {
    return (
        <div>
            <TextSearch />
            <ColorSearch />
            <PriceRange />
        </div>
    );
};

export default Search;