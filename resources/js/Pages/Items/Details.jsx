import Layout from '@/Layouts/Layout';
import HotBid from '../../Sections/HotBid';
import Discover from '../../Sections/Discover';
import ItemDetails from '../../Sections/ItemDetails';



const Details = ({ data: {item}}) => {
    return (
        <Layout>
            <ItemDetails item={item}/>
            <HotBid />
            <Discover />
        </Layout>
    );
};

export default Details;