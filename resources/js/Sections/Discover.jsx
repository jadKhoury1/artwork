
import { useState } from "react";
import cn from "classnames";
import Section from "@/Components/Section";
import Tabs from "@/Components/Tabs";
import ColorSearch from "@/Components/ColorSearch";
import Icon from "@/Components/Icon";
import PriceRange from "@/Components/PriceRange";
import Card from "@/Components/Card";

const cards = [
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4909e910-fa1b-11ec-b2b1-473235369c53-fuu-j-emWddF4NrLo-unsplash-1.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F461dc5a0-fa1b-11ec-b2b1-473235369c53-fuu-j-Lo7venJywM-unsplash.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4e23c1f0-fa1b-11ec-b2b1-473235369c53-philipp-potocnik-5rsNohd8bY8-unsplash.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F41ebb4b0-fa1b-11ec-b2b1-473235369c53-selection-pic-12x.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4ebf3ea0-fa1b-11ec-b2b1-473235369c53-cash-uJAIZP-J5Tg-unsplash.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4baa8490-fa1b-11ec-b2b1-473235369c53-nick-brunner-LXspKUjsgH0-unsplash.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fca1a62a0-fa2a-11ec-b458-99bc1b8dd3ef-alex-sh-pGss3gTt5Mk-unsplash.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fc773fac0-fa2a-11ec-b458-99bc1b8dd3ef-endroit-secret-vGipWHwGm4o-unsplash.jpg&w=3840&q=60'

];

const Discover = () => {

    const [moreFilters, setMoreFilters] = useState(false);

    return (
        <Section 
            title="Discover" 
            subTitle="Create, explore, &amp; collect digital art" 
            button="Start Search"
            buttonHref="items.search"
            className="py-10"
        >
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    <div className="hidden lg:block">
                        <ColorSearch withLabel={false}/>
                    </div>
                    <div className="lg:col-span-2">
                        <Tabs list={['Sale', 'Special Offer', 'Cosmos', 'Artwork']} selected="Sale"/>
                    </div>
                    <div className="block lg:hidden">
                        <ColorSearch withLabel={false}/>
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
                    { cards.map((card, index) => <Card card={card} key={index}/>) }
                </div>
            </div>
        </Section>
    );
};

export default Discover;