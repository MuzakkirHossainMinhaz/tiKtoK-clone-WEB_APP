import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import GoogleLogin from 'react-google-login';
import Discover from './Discover';
import Footer from './Footer';
import SuggestedAccounts from './SuggestedAccounts';

// import SuggestedAccounts from './SuggestedAccounts';
// import Discover from './Discover';
// import Footer from './Footer';
// import useAuthStore from '../store/authStore';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const { pathname } = useRouter();
    // const { fetchAllUsers, allUsers }: any = useAuthStore();

    const userProfile = false;

    const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';


    return (
        <div>
            <div className='block xl:hidden m-2 ml-4 mt-3 text-xl'
                onClick={() => setShowSidebar(!showSidebar)}
            >
                {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
            </div>

            {showSidebar && (
                <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
                    <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
                        <Link href='/'>
                            <div className={pathname === '/' ? activeLink : normalLink}>
                                <p className='text-2xl'>
                                    <AiFillHome />
                                </p>
                                <span className='capitalize text-xl hidden xl:block'>
                                    For You
                                </span>
                            </div>
                        </Link>
                    </div>

                    {
                        !userProfile && (
                            <div className='px-2 py-4 hdden xl:block'>
                                <p className='text-gray-400'>
                                    Login to like, comment on Videos
                                </p>
                                <div className='pr-4'>
                                    <GoogleLogin
                                        clientId=''
                                        render={(renderProps) => (
                                            <button
                                                className="bg-while text-lg text-[#f51997] border-[1px] border-[#f51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#f51997] cursor-pointer"
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                            >
                                                Login
                                            </button>
                                        )}
                                        onSuccess={() => { }}
                                        onFailure={() => { }}
                                        cookiePolicy='single_host_origin'
                                    />
                                </div>
                            </div>
                        )
                    }
                    <Discover />
                    <SuggestedAccounts
                        // fetchAllUsers={fetchAllUsers}
                        // allUsers={allUsers}
                    />
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Sidebar