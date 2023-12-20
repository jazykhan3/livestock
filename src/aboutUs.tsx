import React from 'react';
import img1 from './assets/images/Frame 7255.png';
import img2 from './assets/images/Frame 7256.png';
import img3 from './assets/images/Frame 7256 (1).png';
import starImage from './assets/images/Frame (1).png';
import icon from './assets/images/Frame 65.png';
import playStoreImage from './assets/images/toppng 1.png'
import appleStoreImage from './assets/images/PngItem_1144050 2.png'
import QRImg from './assets/images/image 84.png'



const AboutUs = () => {
    const data = [
        {
            title: 'Gbogunmi Paul',
            description: `“I love the social community forum. It's great to be able to connect with other farmers and share tips and advice.”`,
            image: img1,
            icons: icon
        },
        {
            title: 'Financial tracking',
            description: `“I've been using this app for a few months now and I've already seen a significant improvement in my farm's efficiency.”`,
            image: img2,
            icons: icon

        },
        {
            title: 'Create schedules',
            description: `“This app is a lifesaver! It helps me keep track of all my farm activities and make better decisions."`,
            image: img3,
            icons: icon
        },
    ];

    const starImageArray = new Array(5).fill(starImage);

    return (
        <><div className="container mx-auto">
            <div className="text-center mt-20 mb-20 text-5xl font-bold">
                What <span className="text-gray-500">Farmers</span> Thinks <span className="text-gray-500">About </span>  Us
            </div>
            <div className="flex items-center justify-center container mx-auto mb-20">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10 justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="relative bg-gray-200 py-6 px-16 rounded-3xl my-4 shadow-xl w-[100%]">
                            <div className="text-white flex items-center absolute left-40 -top-10 w-24">
                                <img src={item.image} alt={`image-${index}`} />
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-xl font-semibold my-2 py-6">{item.title}</p>
                                <div className="flex space-x-20 text-gray-600 text-sm">
                                    <p>{item.description}</p>
                                </div>
                                <div className="flex justify-center mt-4 my-6">
                                    {starImageArray.map((star, starIndex) => (
                                        <img key={starIndex} src={star} alt={`star-${starIndex}`} className="w-4 h-4 mx-1" />

                                    ))}
                                </div>
                                <div className="text-white flex items-center absolute left-40 bottom-[-50px] w-24 ">
                                    <img src={item.icons} alt={`image-${index}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <div className='flex flex-col mb-10 justify-center text-center space-y-10' >
                <div className="text-center mt-10 mb-10 text-5xl font-bold">
                    Download <span className="text-gray-500">the</span> App <span className="text-gray-500"> Today! </span>
                </div>
                <p className='text-gray-500'>Start managing your farm more efficiently and saving time and money.</p>
                <div className="flex gap-2 justify-center ">
                    <img src={playStoreImage} alt="play store " />
                    <img src={appleStoreImage} alt="apple store " />
                </div>
                <h1 className='font-bold text-2xl  text-gray-500'>OR</h1>
                <img className='w-64 mx-auto' src={QRImg} alt="QR Code" />
            </div>
        </>

    );
};

export default AboutUs;
