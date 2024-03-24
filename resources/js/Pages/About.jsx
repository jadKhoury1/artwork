import Vapor from 'laravel-vapor';
import { Link } from '@inertiajs/react';
import Section from '@/Components/Section';
import Layout from '@/Layouts/Layout';
import PrimaryButton from '@/Components/PrimaryButton';

const About = () => {
    return (
        <Layout>
            <Section>
                <div className="flex flex-col items-center">
                    <div  className="w-4/6 md:w-3/6 lg:w-1/3 h-96 overflow-hidden">
                        <img 
                            src={Vapor.asset('images/open-gates.avif')}
                        />
                    </div>
                    <h2 className="dark:text-white text-5xl font-bold mt-10">
                        Explore Virtual Worlds
                    </h2>
                    <h3 className="font-bold text-xl text-gray-500 mt-5">
                        Lorem Ipsum
                    </h3>
                    <div className="w-ful lg:w-2/3 mt-5 text-center text-gray-600 dark:text-gray-400">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </div>
                    <Link href={route('items.search')}>
                        <PrimaryButton className="my-10">
                            Start Your Search
                        </PrimaryButton>
                    </Link>
                </div>
            </Section>
        </Layout>
    );
};

export default About;