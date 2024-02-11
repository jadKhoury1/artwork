import useSearchContext from '@/Hooks/useSearchContext';
import Layout from '@/Layouts/Layout';
import Description from '@/Sections/Description';
import HotBid from '@/Sections/HotBid';
import Discover from '@/Sections/Discover';
import Testimonials from '@/Sections/Testimonials';

const Welcome = ({ items, hotbid }) => {

    const {Provider} = useSearchContext();
    
    return (
        <Layout>
            <Description />
            <HotBid items={hotbid} />
            <Provider>
                <Discover items={items} mode="partial" />
            </Provider>
            <Testimonials />
        </Layout>
    );
};

export default Welcome;
