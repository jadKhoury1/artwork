import Layout from '@/Layouts/Layout';
import HotBid from '../../Sections/HotBid';
import Discover from '../../Sections/Discover';
import ItemDetails from '../../Sections/ItemDetails';



const Details = ({ data: {item}, items, hotbid}) => {
    return (
        <Layout>
            <ItemDetails item={item}/>
            <HotBid items={hotbid} />
            <Discover items={items} mode="partial" />
        </Layout>
    );
};

export default Details;