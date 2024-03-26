import cn from 'classnames';
import { useState } from 'react';
import { useForm } from '@inertiajs/react'
import Vapor from 'laravel-vapor';
import Section from '../Components/Section';
import DropdownSearch from '../Components/DropdownSearch';
import Price from '../Components/Price';
import PrimaryButton from '../Components/PrimaryButton';
import Tabs from '../Components/Tabs';


const ItemDetails = ({ item, preview = false }) => {

    const [quantity, setQuantity] = useState(1);

    return (
        <Section>
            <div className={cn("grid grid-cols-1 gap-x-20 mb-10", {"lg:grid-cols-2": !preview})}>
                <div className="mt-5">
                    <img src={item.image.original || Vapor.asset('images/default-image.avif')} alt={item.image.name} />
                </div>
                <div className={cn("mt-5", {"lg:mt-0": !preview})}>
                    <h2 
                        className={cn({"text-4xl": !preview}, {"text-2xl": preview}, "font-bold dark:text-white my-1")}
                    >
                        {item.title}
                    </h2>
                    <div className="flex mt-4 items-center">
                        <Price currency="$" price={item.price} className="font-bold border-2"/>
                        <div className="ml-5 font-bold text-gray-500">
                            {item.count} in stock
                        </div>
                    </div>
                    <div className={cn({"min-h-[10rem]": !preview}, "mt-10 mb-10 font-bold text-justify text-gray-600 dark:text-gray-300")}>
                        {item.description}
                    </div>
                    { item.tags && item.tags.length > 0 ? <div className="border border-gray-500 rounded-2xl w-full pb-1 pl-1">
                        <Tabs 
                            list={item.tags.map(tag => tag.value)} 
                            selected={item?.tags?.[0]?.value}
                        />
                    </div> : null }
                    <div className="mt-10">
                        <DropdownSearch  
                            selected={quantity}
                            list={stock(item.count)}
                            handleChange={itemQuantity => setQuantity(itemQuantity)}
                        />
                    </div>
                    <div className="mt-8">
                        { !preview ? 
                            <form 
                                action={route('items.checkout', { item: item.id })}
                                method="GET"
                            >
                                <input type="hidden" name="quantity" value={quantity}/>
                                <PrimaryButton>
                                    Buy Now
                                </PrimaryButton>
                            </form> : 
                            <div>
                                <PrimaryButton>
                                    Buy Now
                                </PrimaryButton>
                            </div> 
                        }
                    </div>
                </div>
            </div>
        </Section>
    );
};

const stock = itemsCount => {
    const items = [];
    itemsCount = itemsCount <= 10 ? itemsCount : 10;

    for(let i = 1; i <= itemsCount; i++) {
        items.push(i);
    }

    return items;
};


export default ItemDetails;