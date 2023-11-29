import { Link, router } from '@inertiajs/react';
import cn from 'classnames';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from "./SecondaryButton";

const Section = ({title, subTitle, button, buttonHref = 'welcome', grayBg, className, children}) => {
    return (
        <section className={cn({'bg-gray-100': grayBg}, 'dark:bg-black', className)}>
            <div className="container mx-auto">
                <div className="flex flex-col">
                    {subTitle && <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{subTitle}</h4>}
                    <div className="flex flex-col lg:flex-row mb-2">
                        {title && 
                            <h2 
                                className="w-full lg:w-1/5 text-4xl font-bold dark:text-white my-1"
                            >
                                {title}
                            </h2>
                        }
                        { button && 
                            <div className="w-full lg:w-3/5 my-3 flex justify-center">
                                <div className="group w-full lg:w-auto">
                                    <Link href={route(buttonHref)}>
                                        <SecondaryButton className="hidden w-full lg:w-auto group-hover:block font-bold text-md">{button}</SecondaryButton>
                                    </Link>
                                    <Link href={route(buttonHref)}>
                                        <PrimaryButton className="w-full lg:w-auto  group-hover:hidden font-bold text-md">{button}</PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;