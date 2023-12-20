import React from 'react';
import FooterLogo from './assets/images/image 64.png'
import Instagram from './assets/images/instagram-167-svgrepo-com 1.png'
import LinkedIn from './assets/images/linkedin-fill-svgrepo-com 1.png'
import Twitter from './assets/images/image 86.png'

const SubFooter: React.FC = () => {
    return (
        <div className="flex items-end w-full  bg-gray-200">
            <footer className="w-full text-gray-700  body-font">
                <div className="container flex flex-col  px-5 pt-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className=" w-96  mx-auto text-left  md:items-left flex flex-col  md:mx-0 md:text-left">
                        <div className='flex space-x-2'>
                            <img src={FooterLogo} />
                            <p className='font-bold text-1xl '>Livestock</p>
                        </div>
                        <p className="mt-2 text-sm text-gray-500 ">Made by PIla</p>
                        <div className="mt-4">
                            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start  space-x-4">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                                    <img src={Twitter} />

                                </a>
                                <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                                    <img src={Instagram} />

                                </a>
                                <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                                    <img src={LinkedIn} />

                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3 text-lg font-bold font-medium tracking-widest text-gray-500 title-font">PLATFORM</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-gray-900 cursor-pointer hover:text-gray-500 text-sm ">F&Q’s

                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-5 cursor-pointer hover:text-gray-500 text-sm">Private Policy</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-900 cursor-pointer hover:text-gray-500 text-sm">Terms & Conditiony</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3 font-medium tracking-widest text-gray-500 text-lg title-font">CONTACT</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-gray-900 cursor-pointer hover:text-gray-500 text-sm">About

                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-900 cursor-pointer hover:text-gray-500 text-sm">Contact</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-900 cursor-pointer hover:text-gray-500 text-sm">Support</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3 text-lg font-medium tracking-widest text-gray-500  title-font">RESOURCES</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-gray-900 cursor-pointer hover:text-gray-500 text-sm">Log In

                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-900 cursor-pointer hover:text-gray-500 text-sm">Sign Up</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-900 cursor-pointer hover:text-gray-500 text-sm">Guides</a>
                                </li>

                            </nav>
                        </div>

                    </div>
                </div>
                <div className="container px-5 py-4 mx-auto mt-10">
                    <p className="text-sm text-gray-500 capitalize xl:text-center">Copyright @ 2020 </p>
                    <div className="flex justify-end">
                        <button className="bg-black text-white px-4 py-2 rounded-full">SUPPORT</button>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default SubFooter;
