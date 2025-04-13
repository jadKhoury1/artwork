import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';


const Description = () => {
    return (
        <div className="container mx-auto">
            <div className="min-h-screen grid grid-cols-1 gap-8 lg:grid-cols-2 mt-5">
                <div className="flex flex-col justify-center">
                    <h1 className="text-6xl mb-8 dark:text-white font-bold">
                        We’re changing the way people connect.
                    </h1>
                    <p className="text-xl text-gray-500 font-bold">
                        Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. 
                        Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt 
                        mollit id pariatur in voluptate cillum.
                    </p>
                    <div className="flex mt-7">
                        <Link href={route('items.search')}>
                            <SecondaryButton className="text-xs">Discover More</SecondaryButton>
                        </Link>
                        <Link href={route('items.create')}>
                            <PrimaryButton className="text-xs ml-7">Create Item</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center">
                        <img 
                            className="rounded-2xl object-cover aspect-[2/3] h-60"
                            src="https://digital-artwork.s3.eu-west-1.amazonaws.com/medium/mood-girl.avif"
                        />
                    </div>
                    <div 
                        className="flex flex-col justify-center"
                    >
                        <img
                            className="rounded-2xl mb-2 object-cover aspect-[2/3] h-48"
                            src="https://digital-artwork.s3.eu-west-1.amazonaws.com/medium/bird.avif"
                        />

                        <img
                            className="rounded-2xl mt-2 object-cover aspect-[2/3] h-48"
                            src="https://digital-artwork.s3.eu-west-1.amazonaws.com/medium/sunny-girl.avif"
                        />
                    </div>
                    <div className="hidden lg:flex lg:flex-col pt-5">
                        <img
                            className="rounded-2xl mb-2 object-cover aspect-[2/3] h-48"
                            src="https://digital-artwork.s3.eu-west-1.amazonaws.com/medium/portal-purple.avif"
                        />
                        <img
                            className="rounded-2xl mb-2 object-cover aspect-[2/3] h-48"
                            src="https://digital-artwork.s3.eu-west-1.amazonaws.com/medium/astronaut.avif"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;