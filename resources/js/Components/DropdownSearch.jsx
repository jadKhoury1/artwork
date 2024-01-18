import { useContext, useState } from 'react';
import cn from 'classnames';
import Dropdown from './Dropdown';
import Input from './Input';
import Icon from './Icon';

const DropdownInput = ({ value }) => {
    const { open } = useContext(Dropdown.Context);
    
    return (
        <Input 
            type="text" 
            readOnly={true} 
            value={value} 
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
    )
};


const DropdownSearch = ({ selected, handleChange, list }) => {
    const [value, setValue] = useState(selected);

    return (
        <Dropdown>
            <Dropdown.Trigger>
                <DropdownInput value={value} />
            </Dropdown.Trigger>
            <Dropdown.Content width="full" contentClasses="p-4 bg-white">
                {
                    list.map(
                        item => (
                            <div
                                key={item}
                                onClick={() => {
                                    setValue(item);
                                    handleChange(item)
                                }}
                                className="my-2 hover:text-indigo-600 hover:cursor-pointer"
                            >
                                {item}
                            </div>
                        )
                    )
                }
            </Dropdown.Content>
        </Dropdown>
    )
}

export default DropdownSearch;