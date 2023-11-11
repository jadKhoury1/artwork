import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

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
                        <SecondaryButton className="text-xs">Discover More</SecondaryButton>
                        <PrimaryButton className="text-xs ml-7">Create Item</PrimaryButton>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center">
                        <img 
                            className="rounded-2xl object-cover aspect-[2/3] h-60"
                            src="https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F461dc5a0-fa1b-11ec-b2b1-473235369c53-fuu-j-Lo7venJywM-unsplash.jpg&w=3840&q=60"
                        />
                    </div>
                    <div 
                        className="flex flex-col justify-center"
                    >
                        <img
                            className="rounded-2xl mb-2 object-cover aspect-[2/3] h-48"
                            src="https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F41ebb4b0-fa1b-11ec-b2b1-473235369c53-selection-pic-12x.jpg&w=3840&q=60"
                        />

                        <img
                            className="rounded-2xl mt-2 object-cover aspect-[2/3] h-48"
                            src="https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4e23c1f0-fa1b-11ec-b2b1-473235369c53-philipp-potocnik-5rsNohd8bY8-unsplash.jpg&w=3840&q=60"
                        />
                    </div>
                    <div className="hidden lg:flex lg:flex-col pt-5">
                        <img
                            className="rounded-2xl mb-2 object-cover aspect-[2/3] h-48"
                            src="https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4ebf3ea0-fa1b-11ec-b2b1-473235369c53-cash-uJAIZP-J5Tg-unsplash.jpg&w=3840&q=60"
                        />
                        <img
                            className="rounded-2xl mb-2 object-cover aspect-[2/3] h-48"
                            src="https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4baa8490-fa1b-11ec-b2b1-473235369c53-nick-brunner-LXspKUjsgH0-unsplash.jpg&w=3840&q=60"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;