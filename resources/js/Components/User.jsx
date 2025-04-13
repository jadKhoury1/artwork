import Vapor from 'laravel-vapor';
import { usePage } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';

const User = () => {
    const {props: {auth}} = usePage();
    
    if (!auth.user) {
        return;
    }

    return (
        <Dropdown>
            <Dropdown.Trigger>
                <div className=
                    "flex flex-row items-center border-2 border-gray-200 dark:border-gray-500 rounded-3xl pr-2 pl-0.5 py-0.5 hover:cursor-pointer"
                >
                    <div className="w-7 md:w-8 mr-5 rounded-full">
                        <img
                            alt="user_avatar"
                            src={Vapor.asset('images/avatar.png')}
                        />
                    </div>
                    <div className="capitalize text-gray-700 dark:text-white font-bold">
                        {auth.user.name}
                    </div>
                </div>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                <Dropdown.Link href={route('logout')} method="post" as="button">
                    Log Out
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );
};

export default User;