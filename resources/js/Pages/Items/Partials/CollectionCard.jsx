import cn from "classnames";
import Icon from "@/Components/Icon";

const CollectionCard = ({title, active, onClick}) => {
    return (
        <div 
            onClick={onClick}
            className={cn(
                "group border-2 w-40 bg-slate-50 dark:bg-slate-800 relative rounded-xl",
                "hover:cursor-pointer hover:border-gray-500 shrink-0",
                {"border-indigo-600": active}, {"border-transparent": !active}
            )}
        >
            <div className="absolute bottom-4 left-4">
                <div className="mb-2">
                    <Icon 
                        size={26} 
                        name="plus" 
                        className="invisible group-hover:visible hover:block rounded-full p-1 fill-white bg-gray-500"
                    />
                </div>
                <div className="font-bold dark:text-white">{title}</div>
            </div>
        </div>
    );
};

export default CollectionCard;