import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/twitch.jpg';
import Link from 'next/link';

const TwitchProject = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='Twitch Project Image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4'>
          <h2 className='text-2xl md:text-4xl font-bold'>Doorbazar</h2>
          <p className='mt-2 text-sm md:text-lg max-w-[600px]'>
            Empowering customer engagement and boosting repeat sales through custom recipe blogs and Shopify designs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Overview</h2>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
            Doorbazar aimed to increase repeat customers and drive engagement across their platforms. Day Shift Digital developed a custom recipe blog and refreshed the designs on their Shopify sites. After one year, Doorbazar saw a 10% increase in their average order value and a 40% rise in repeat customers.
          </p>
        </div>

        {/* Back Link */}
        <div className='col-span-4 md:col-span-1 flex justify-start items-center'>
          <Link href='/#projects'>
            <a className='underline text-blue-500 hover:text-blue-700 transition-colors cursor-pointer'>
              Back to Projects
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TwitchProject;
