import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Law Firm SEO: How to Prime Your Site for Massive Growth</h2>
          {/* <h3>React JS / Tailwind / Firebase</h3> */}
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          {/* <p>Project</p> */}
          {/* <h2>Overview</h2> */}
          <p>
          Law firm SEO is the practice of optimizing your website to rank higher in the search engines for relevant keywords and phrases. These keywords are specific to your local area and the type of law you practice. It serves as a marketing tool to bring additional clients to your business. 

With law firm SEO, you aim to build a fast, informative, and helpful website that supports your online and offline advertising and marketing efforts. Beyond bringing in more clients, it should help increase brand awareness and word-of-mouth. 
          </p>
          <p>  

          </p>
          <h2>What is Law Firm SEO?</h2>
          <p> </p>
          <p>Law firm SEO is a niche of search engine optimization and local marketing that focuses specifically on lawyers and their practices. You may also hear it referred to as law firm SEO marketing or attorney SEO marketing. It focuses on a variety of tactics, all designed to draw your ideal customers to you.</p>
            <p> </p>
            <h2>Chapter 1: The Fundamentals of Law Firm SEO Marketing</h2>
            <p> </p>
            <p>Before you can start improving your website’s search engine rankings, you must understand the basics. Google’s algorithm is under lock and key. But through a combination of research and information directly from Google, we know specific things that matter. Some of these things include:</p>
               <p> 

               </p>
               <div className='p-2'>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Website speed — How quickly your website loads. Ideally, it should load within three seconds or less. Visitors don’t have the patience to wait long for a site to load and quickly find an alternative. We cover this in Chapter 2.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Website speed — How quickly your website loads. Ideally, it should load within three seconds or less. Visitors don’t have the patience to wait long for a site to load and quickly find an alternative. We cover this in Chapter 2.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mobile-Friendliness — Mobile search query volume, especially with local intent, increased dramatically from 2014 to 2019, and the trend shows no signs of slowing down. That means your website needs to display correctly across a variety of devices. Does yours make the cut? Use the Mobile-Friendly Test tool to find out. More detail in Chapter 2. According to the American Bar Association’s (ABA) TechReport 2020, 68% of respondents say their sites are mobile-friendly. Most of the ones that aren’t? Law practices without partners.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Security — Purchasing an SSL certificate for your website adds an extra layer of security for your visitors. It’s what makes a website reachable at HTTPS://domain.com and is crucial for ecommerce websites. Only 40% of respondents say their website is secure.  That’s another topic we address in more detail in Chapter 2.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Content quality — When choosing where to rank a site, Google considers their users (the searchers) first. Google wants to connect users to the most relevant, comprehensive, and valuable content, so content that hits those marks will naturally rank higher. Skip to Chapter 5 if this is what you want more of.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />Backlinks — The number of links to your website from other domains. Skip to Chapter 7 to learn more about link building.
              </p>
            </div>
          </div>


          {/* <a
            href='https://github.com/fireclint/netflix-react-tailwind'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://fireclint.github.io/netflix-react-tailwind/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}
        </div>
        {/* <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IMDB API
              </p>
            </div>
          </div>
        </div> */}
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
