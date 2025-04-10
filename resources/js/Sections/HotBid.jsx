import Slider from "@/Components/Slider";
import Section from "@/Components/Section";
import Card from "@/Components/Card";


const HotBid = ({ items }) => {
    return (
        <Section title="Hot Bid" grayBg={true} className="py-10 mt-10">
            <div className="bid-slider">
                <Slider>
                    { items.map((item, index) => <Card card={item} key={index}/>) }
                </Slider>
            </div>
        </Section>
    );
};

export default HotBid; 