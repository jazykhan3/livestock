import React from 'react';
import img1 from './assets/images/1.png';
import img2 from './assets/images/2.png';
import img3 from './assets/images/3.png';
import img4 from './assets/images/4.png';
import img5 from './assets/images/5.png';
import img6 from './assets/images/6.png';
import img7 from './assets/images/7.png';
import img8 from './assets/images/8.png';

const Card = () => {
  const data = [
    {
      title: 'Register livestock ',
      description: 'Keep your finances in check with expense and revenue tracking.',
      image: img1,
    },
    {
      title: 'Financial tracking',
      description: 'Keep your finances in check with expense and revenue tracking.',
      image: img2,
    },
    {
      title: 'Create schedules',
      description: 'Manage your daily, weekly, and monthly farm activities.',
      image: img3,
    },
    {
      title: 'Community forum',
      description: 'Chat with farmers from different countries and share tips and advice',
      image: img4,
    },
    {
      title: 'Notes and Sharing',
      description: 'Take notes, share important information, and collaborate with your team.',
      image: img5,
    },
    {
      title: 'Feed Management',
      description: 'Effortlessly track feed measurements and create custom formulas for healthier livestock.',
      image: img6,
    },
    {
      title: 'Livestock Records',
      description: 'Keep comprehensive records of births, deaths, vaccinations, and breeding information.',
      image: img7,
    },
    {
      title: 'Farm Collaboration',
      description: 'Effortlessly invite and collaborate with team members, partners, and fellow farmers.',
      image: img8,
    },
  ];

  return (
    <><div className="flex items-center justify-center container mx-auto mb-20">
      <div className="text-center mt-20  mb-20 text-4xl font-bold">
        Boosting <span className="text-gray-500">Farm</span> Efficiency <span className="text-gray-500">With </span>  Powerful <span className="text-gray-500">Features</span>
      </div>
    </div><div className="flex items-center justify-center container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-10 justify-center">
          {data.map((item, index) => (
            <div key={index} className="relative bg-gray-200 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className="text-white flex items-center absolute left-20 -top-10 w-24">
                <img src={item.image} alt={`image-${index}`} />
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-semibold my-2">{item.title}</p>
                <div className="flex space-x-2 text-gray-600 text-sm">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div></>

  );
};

export default Card;
