import { usePage } from '@inertiajs/react';
import useSearchContext from '@/Hooks/useSearchContext';
import Layout from '@/Layouts/Layout';
import Description from '@/Sections/Description';
import HotBid from '@/Sections/HotBid';
import Discover from '@/Sections/Discover';
import Testimonials from '@/Sections/Testimonials';

const Welcome = ({ items, hotbid }) => {
    const {props: {collections}} = usePage();
    const {Provider} = useSearchContext();
    
    return (
        <Layout>
            <Description />
            <HotBid items={hotbid} />
            <Provider initialFilters={{collection: collections?.[0].value}} withDebounce={true}>
                <Discover items={items} />
            </Provider>
            <Testimonials />
        </Layout>
    );
};

export default Welcome;
