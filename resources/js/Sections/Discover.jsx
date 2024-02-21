
import { useState, useContext, useEffect } from 'react';
import cn from 'classnames';
import { usePage, Link } from '@inertiajs/react';
import { searchItems } from '../Services';
import { SearchContext } from '@/Context/StateContext';
import Section from '@/Components/Section';
import Tabs from '@/Components/Tabs';
import ColorSearch from '@/Components/ColorSearch';
import Icon from '@/Components/Icon';
import PriceRange from '@/Components/PriceRange';
import Card from '@/Components/Card';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

const Discover = ({ items: initialItems }) => {
    const {props: {collections}} = usePage();
    const [items, setItems] = useState(initialItems);
    const { filters, updatedFilter, setFilter } = useContext(SearchContext);
    const [moreFilters, setMoreFilters] = useState(false);

    useEffect(() => {
        if (updatedFilter) {
            searchItems(filters).then(({data}) => setItems(data.response.items));
        }
    }, [filters]);

    return (
        <Section 
            title="Discover" 
            subTitle="Create, explore, &amp; collect digital art"
            button="Start Search"
            buttonHref={route("items.search", filters)}
            className="py-10"
        >
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    <div className="hidden lg:block">
                        <ColorSearch  withLabel={false} />
                    </div>
                    <div className="lg:col-span-2">
                        <Tabs 
                            list={collections.map(collection => collection.value)} 
                            selected={filters.collection}
                            onChange={value => setFilter('collection', value)}
                        />
                    </div>
                    <div className="block lg:hidden">
                        <ColorSearch withLabel={false} />
                    </div>
                    <div className="lg:justify-self-center">
                        <button
                            onClick={() => setMoreFilters(!moreFilters)}
                            className="flex justify-center w-full rounded-full bg-indigo-600 text-white py-2 px-3 hover:bg-indigo-600 hover:text-white font-bold"
                        >
                            <div className="flex">
                                <div className="mx-2 text-base">Filter</div>
                                <div className="mx-2 mt-1 h-full md:w-8">
                                    {
                                        moreFilters ?
                                        <Icon name="close" size="12" className="fill-white mt-1"/> :
                                        <Icon name="filter" size="18" className="fill-white" /> 
                                    }
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={cn({"hidden": !moreFilters, "block": moreFilters}, "border-t border-gray-300 dark:border-gray-500 mt-10 pt-8")}>
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <PriceRange />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                    { items.data.map((item, index) => <Card card={item} key={index}/>) }
                </div>
                <div className="flex justify-center">
                    { items.links.next ? <div className="group">
                        <Link href={route("items.search", {...filters, page: 2})}>
                            <PrimaryButton className="group-hover:hidden">
                                More
                            </PrimaryButton>
                            <SecondaryButton className="hidden group-hover:block">
                                More
                            </SecondaryButton>
                        </Link> 
                    </div> : null }
                </div>
            </div>
        </Section>
    );
};

export default Discover;