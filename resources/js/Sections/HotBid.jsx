import Slider from "@/Components/Slider";
import Section from "@/Components/Section";
import Card from "@/Components/Card";

const cards = [
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F461dc5a0-fa1b-11ec-b2b1-473235369c53-fuu-j-Lo7venJywM-unsplash.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4e23c1f0-fa1b-11ec-b2b1-473235369c53-philipp-potocnik-5rsNohd8bY8-unsplash.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F41ebb4b0-fa1b-11ec-b2b1-473235369c53-selection-pic-12x.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4ebf3ea0-fa1b-11ec-b2b1-473235369c53-cash-uJAIZP-J5Tg-unsplash.jpg&w=3840&q=60',
    'https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4baa8490-fa1b-11ec-b2b1-473235369c53-nick-brunner-LXspKUjsgH0-unsplash.jpg&w=3840&q=60'

];

const HotBid = () => {
    return (
        <Section title="Hot Bid" grayBg={true}>
            <div className="bid-slider">
                <Slider>
                    { cards.map((card, index) => <Card card={card} key={index}/>) }
                </Slider>
            </div>
        </Section>
    );
};

export default HotBid;