import { useContext, useState } from 'react';
import cn from "classnames";
import Dropdown from "./Dropdown"
import Icon from "./Icon";
import Input from "./Input";
import InputLabel from "./InputLabel";


const ColorInput = ({ color }) => {
    const { open } = useContext(Dropdown.Context);
    return (
        <Input 
            type="text" 
            readOnly={true} 
            value={color} 
            icon="arrow-bottom"
            iconClassName="top-2 rotate-180"
        >
            <div className="absolute top-2 right-4 border border-gray-400 p-1.5 rounded-full">
                <Icon 
                    className={cn({'rotate-180': open}, "dark:fill-gray-300")}
                    name="arrow-bottom" 
                    size="11"
                />
            </div>
        </Input>
    );
}

const ColorSearch = ({ withLabel = true }) => {

    const [color, setColor] = useState('Any Color');

    const colors = [
        'Any Color', 'Red', 'Yellow', 'Green', 'Blue'
    ];

    return (
        <div>
            {withLabel && <InputLabel>Select Color</InputLabel>}
            <div>
                <Dropdown>
                    <Dropdown.Trigger>
                        <ColorInput color={color} />
                    </Dropdown.Trigger>
                    <Dropdown.Content width="full" contentClasses="p-4 bg-white">
                        {
                            colors.map(
                                color => (
                                    <div
                                        key={color}
                                        onClick={() => {
                                            console.log('Updating Color');
                                            setColor(color);
                                        }}
                                        className="my-2 hover:text-indigo-600 hover:cursor-pointer"
                                    >
                                        {color}
                                    </div>
                                )
                            )
                        }
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
};

export default ColorSearch;