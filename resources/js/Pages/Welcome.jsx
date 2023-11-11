import Layout from "@/Layouts/Layout";
import Description from "@/Sections/Description";
import HotBid from "@/Sections/HotBid";
import Discover from "@/Sections/Discover";
import Testimonials from "@/Sections/Testimonials";

const Welcome = () => {
    return (
        <Layout>
            <Description />
            <HotBid />
            <Discover />
            <Testimonials />
        </Layout>
    );
};

export default Welcome;
