import { useState, memo } from 'react';
import cn from "classnames";

const Tabs = ({ list, onChange, selected = "All"}) => {  
    const [tab, setTab] = useState(selected);

    return (
        <div className="flex font-bold mt-1 overflow-x-auto no-scrollbar">
            {list.map(item => (
                <div key={item}>
                    <div 
                        onClick={() => {
                            setTab(item);
                            onChange(item);
                        }}
                        className={cn(
                            {"text-white bg-gray-700 hover:bg-black dark:text-gray-700 dark:hover:text-black dark:bg-white": tab === item},
                            {"text-gray-500 dark:text-gray-300 dark:hover:text-gray-500 hover:text-gray-700": tab !== item},
                            "py-1.5 px-3 font-bold mr-4  hover:cursor-pointer rounded-full"
                        )}
                    >
                        {item}
                    </div>
                </div>
            ))}
        </div>
    );
};
 
export default memo(Tabs);