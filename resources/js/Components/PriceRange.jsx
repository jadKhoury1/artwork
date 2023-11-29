import Input from "./Input";
import InputLabel from "./InputLabel";

const PriceRange = ({ withLabel = true }) => {
    return (
        <div>
            {withLabel && <InputLabel>Price range</InputLabel>}
            <div className="flex justify-center items-center my-4">
                <Input type="number" placeholder="MIN" />
                <span className="mx-2 font-bold dark:text-white">to</span>
                <Input type="number" placeholder="MAX" />
            </div>
        </div>
    );
};

export default PriceRange;