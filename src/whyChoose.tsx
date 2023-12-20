import React from 'react';
import img1 from './assets/images/Frame 1.png';
import img2 from './assets/images/4.png';
import img3 from './assets/images/Frame3.png';
import img4 from './assets/images/Frame 4.png';
import img5 from './assets/images/Frame 5.png';
import RightImg from './assets/images/image 88.png'
import PlayStore from './assets/images/toppng 1.png'
import AppleStore from './assets/images/PngItem_1144050 2.png'


const WhyChoose = () => {

    return (
        <>
            <div className="flex items-center justify-center container mx-auto">
                <div className="text-center mt-20  mb-20 text-4xl font-bold">
                    <span className="text-gray-500">Why</span>  Choose <span className="text-gray-500"> Us? </span>
                </div>
            </div>
            <div className='flex justify-evenly flex-col md:flex-row'>


                <div className="flex flex-col ml-16 ">
                    <div className="relative bg-gray-200 py-6 px-6 rounded-3xl w-96 h-20 my-4 shadow-xl">
                        <div className="absolute left-[-32px] top-2">
                            <img src={img1} className="w-16 h-16" alt="Image 1" />
                        </div>
                        <div className="mt-2 ml-2">
                            <div className="flex space-x-2 text-gray-600 text-sm">
                                <p> <span className='font-bold'>Efficiency:</span> Streamline your farm operations and increase productivity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-gray-200 py-6 px-6 rounded-3xl w-96 h-20 my-4 shadow-xl ml-16">
                        <div className="absolute left-[-32px] top-2">
                            <img src={img2} className="w-16 h-16" alt="Image 1" />
                        </div>
                        <div className="mt-2 ml-2">
                            <div className="flex space-x-2 text-gray-600 text-sm">
                                <p> <span className='font-bold'> Community:</span> Connect with a global community of farmers for knowledge sharing</p>

                            </div>
                        </div>
                    </div>

                    <div className="relative bg-gray-200 py-6 px-6 rounded-3xl w-96 h-20 my-4 shadow-xl">
                        <div className="absolute left-[-32px] top-2">
                            <img src={img3} className="w-16 h-16" alt="Image 1" />
                        </div>
                        <div className="mt-2 ml-2">
                            <div className="flex space-x-2 text-gray-600 text-sm">
                                <p> <span className='font-bold'>Accuracy: </span> Keep precise records for better decision-making and farm optimization.</p>

                            </div>
                        </div>
                    </div>

                    <div className="relative bg-gray-200 py-6 px-6 rounded-3xl w-96 h-20 my-4 shadow-xl ml-16">
                        <div className="absolute left-[-32px] top-2">
                            <img src={img4} className="w-16 h-16" alt="Image 1" />
                        </div>
                        <div className="mt-2 ml-2">
                            <div className="flex space-x-2 text-gray-600 text-sm">
                                <p> <span className='font-bold'> Customization:</span> Set the app to your unique farm needs with customizable features.</p>

                            </div>
                        </div>
                    </div>
                    <div className="relative bg-gray-200 py-6 px-6 rounded-3xl w-96 h-20 my-4 shadow-xl">
                        <div className="absolute left-[-32px] top-2">
                            <img src={img5} className="w-16 h-16" alt="Image 1" />
                        </div>
                        <div className="mt-2 ml-2">
                            <div className="flex space-x-2 text-gray-600 text-sm">
                                <p> <span className='font-bold'>User-Friendly: </span>Our app prioritizes farmers, offering mobile-friendly ease of use..</p>

                            </div>
                        </div>
                    </div>
                </div>
                <img src={RightImg} />

            </div>
            <div className='flex justify-center space-x-4 mb-10'>
                <img src={PlayStore} />
                <img src={AppleStore} />

            </div>

        </>
    );
};

export default WhyChoose;
