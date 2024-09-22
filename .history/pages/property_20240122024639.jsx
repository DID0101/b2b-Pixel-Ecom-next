import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Local Digital Marketing</h2>
          <h3>Services For Small Businesses</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          {/* <p>Project</p> */}
          <h2>Digital marketing and online advertising to increase brand awareness, and generate new leads for your  business.</h2>
          <p>
          SEO Services that go above and beyond for our clients. We are genuinely committed to supporting local Jacksonville franchises, both large and small. Your business is unique, and we get that. Unlike other Jacksonville SEO companies, At Orbit Local, we don’t offer cookie-cutter solutions; our experts tailor our SEO services specifically to you and your brand. We strive to fully understand what creative strategies will elevate your business to the next level discovering new leads per click and getting noticed by all the other search results.
          </p>
          <h2>Web Design & Development</h2>
          <p>
          First impressions are everything, which is why branding is essential. Think of your website as the storefront to your brand. You need a website that is attractive, easy to understand, and gently but firmly tugs your prospective clients into buying or signing up for your services. At Orbit Local, we design websites that are functional, effective, and operate at hyperspeed. Ok, not hyperspeed but really, really, fast.
          </p>
          <h2>Local Marketing</h2>
          <p>
          We’ve all been through it. You know: the moment you’re about to dig into the best darn freeze-dried packet of mash potatoes you’ve ever seen. Just as you tear off the seal, the phone rings with a telemarketer on the other line alerting you of your expiring car warranty interrupting your delicious meal.
          </p>
          <h2>Lead Generation</h2>
          <p>
          With our proven, repeatable, 5 phase process, we will learn about your brand, improve your tactics, build a website you & your customers will love, engage and promote with our one-of-a-kind marketing tactics and evaluate the data making any necessary changes to get your phone ringing. We EARN your business each month with well-defined projects.
          </p>
          {/* <a
            href='https://github.com/fireclint/property-finder'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://property-finder-development.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
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
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Local SEO For Leads</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SEO Services
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Business Profile
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Local Listings Management
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Content Marketing + Link Building
              </p>
             
            </div>
          </div>
          <div className='p-2'>
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
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Local Advertising
              </p>
              
            </div>
          </div>
        </div>
        
        
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
