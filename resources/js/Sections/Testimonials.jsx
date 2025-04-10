import Section from "@/Components/Section";
import TestimonialCard from "@/Components/TestimonialCard";


const testimonialsList = [
    {
        name: 'Maria Smantha',
        description: 'Lorem ipsum dolor sit amet eos adipisci,consectetur adipisicing elit.',
        backgroundColor: '#9d789b',
        imageName: 'person_1.webp'
    },
    {
        name: 'Lisa Cudrow',
        description: 'Neque cupiditate assumenda in maiores repudi mollitia architecto.',
        backgroundColor: '#7a81a8',
        imageName: 'person_2.webp'
    },
    {
        name: 'John Smith',
        description: 'Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.',
        backgroundColor: '#6d5b98',
        imageName: 'person_3.webp'
    }
]

const Testimonials = ({ }) => {
    return (
        <Section title="Testimonials" grayBg={true} className="py-10">
            <div className="text-center my-10">
                <div className="grid md:grid-cols-3 md:gap-5 lg:gap-10 gap-y-10 mb-5">
                    {testimonialsList.map(({name, description, backgroundColor, imageName}) => (
                        <TestimonialCard 
                            key={name}
                            name={name}
                            description={description}
                            backgroundColor={backgroundColor}
                            imageName={imageName}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;