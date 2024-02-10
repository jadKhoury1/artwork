import { useState, memo } from "react";
import Icon from "../Components/Icon";
import Price from "./Price";
import PrimaryButton from "./PrimaryButton";

const Card = ({ card }) => {
    console.log('THIS WAS RENDERED');
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div>
            <div className="group relative my-5">
                <div className="border-b border-gray-300 pb-5">
                    <div className={"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none bg-black h-80 relative"}>
                        <div className="invisible absolute top-4 left-4 text-white font-bold z-10 group-hover:visible">
                            {card.title}
                        </div>
                        <div 
                            onClick={() => setIsLiked(!isLiked)}
                            className="invisible absolute top-4 right-4 z-10 border border-white p-1 bg-white rounded-full group-hover:visible"
                        >
                            { isLiked ?
                                <Icon name="heart-fill" size="20" className="fill-red-500" /> :
                                <Icon name="heart" size="20" className="fill-gray-500 hover:fill-black" /> 
                            }
                        </div>
                        <img 
                            src={card.image.original} 
                            alt="Front of men&#039;s Basic Tee in black." 
                            className="group-hover:opacity-70 h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                        <div className="invisible absolute bottom-4 w-full flex group-hover:visible">
                            <PrimaryButton className="m-auto">{card.tags[0].value}</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="mt-4 font-bold flex justify-between">
                    <div>
                        <h3 className="text-base text-gray-700 dark:text-gray-300">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {card.title}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{card.count} items</p>
                    </div>
                    <div>
                        <Price price={card.price} currency="$" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Card);