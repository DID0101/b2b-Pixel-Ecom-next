import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const PropertyProject = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='property project image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4'>
          <h2 className='text-2xl md:text-4xl font-bold'>Skvot</h2>
          <p className='mt-2 md:mt-4 text-sm md:text-lg max-w-[600px]'>
            Сквот has been a part of the skateboarding scene for 20 years and supports snowboarders! The store still provides sponsorship, organizes tours, and film premieres. A unique piece, which they &rsquo;re not making anymore!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
            How we scaled an apparel brand to achieve exceptional ROAS over 3.5 and expand beyond local markets
          </h2>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed mb-6'>
            Сквот is a Berlin-based clothing brand that was struggling to increase their sales and revenue. Our advertising efforts helped Сквот to achieve a desirable return on ad spend (ROAS) over 3.5, expand their customer base beyond their local market, and increase their sales and revenue by 167%. 
          </p>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed mb-6'>
            What we did? We optimized the ad account to expand reach across the European Union, successfully attracting new customers from multiple countries. We scaled our campaigns using the following structure:
          </p>
          <ul className='list-disc list-inside pl-4 text-lg md:text-xl text-gray-700 mb-6'>
            <li>Creative Test Campaign (Russia)</li>
            <li>Creative Test Campaign (EU Countries)</li>
            <li>Advantage+ Shopping Campaign (Russia)</li>
            <li>Advantage+ Shopping Campaign (EU Countries)</li>
            <li>Remarketing Campaign (Russia/EU)</li>
          </ul>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
            With a wealth of product photos and videos from the client, we had ample content to test, identify top performers, and scale accordingly.
          </p>
        </div>

        {/* Sidebar */}
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          {/* Web Design Section */}
          <div className='p-4'>
            <p className='text-center font-bold pb-2'>Web Design For Leads</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Custom Designs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coding Best Practices
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Technical Support
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Site Speed Optimization
              </p>
            </div>
          </div>

          {/* PPC Marketing Section */}
          <div className='p-4'>
            <p className='text-center font-bold pb-2'>PPC Marketing For Leads</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Ads PPC / ROI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Facebook Ads / Instagram Ads
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Display Ads / Remarketing
              </p>
            </div>
          </div>
        </div>

        <Link href='/#projects'>
          <p className='underline cursor-pointer text-blue-500 hover:text-blue-700 transition-colors'>
            Back to Projects
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PropertyProject;
