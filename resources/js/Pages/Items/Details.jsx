import { usePage } from '@inertiajs/react';
import useSearchContext from '@/Hooks/useSearchContext';
import Layout from '@/Layouts/Layout';
import HotBid from '@/Sections/HotBid';
import Discover from '@/Sections/Discover';
import ItemDetails from '@/Sections/ItemDetails';

const Details = ({ data: {item}, items, hotbid}) => {
    const {props: {collections}} = usePage();
    const {Provider} = useSearchContext();

    return (
        <Layout>
            <ItemDetails item={item}/>
            <HotBid items={hotbid} />
            <Provider initialFilters={{collection: collections?.[0].value}} withDebounce={true}>
                <Discover items={items} mode="partial" />
            </Provider>
        </Layout>
    );
};

export default Details;