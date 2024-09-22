import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const NetflixProject = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='Netflix Project Image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4'>
          <h2 className='py-2 text-2xl md:text-4xl font-bold'>
            Log Books Website: A Case Study
          </h2>
          <p className='text-sm md:text-lg mt-2'>
            Solving website usability issues and receiving rave reviews from customers for ease of ordering.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
            Law Firm SEO: How to Prime Your Site for Massive Growth
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            Law firm SEO is the practice of optimizing your website to rank higher in search engines for relevant keywords. These keywords target your local area and the type of law you practice. Law firm SEO helps bring new clients to your business, increases brand awareness, and enhances word-of-mouth marketing.
          </p>
          
          <h2 className='text-2xl font-semibold mt-6 mb-2'>
            What is Law Firm SEO?
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            Law firm SEO is a specialized form of search engine optimization designed for lawyers and law firms. It aims to attract your ideal clients by optimizing for specific keywords relevant to your practice.
          </p>

          <h2 className='text-2xl font-semibold mt-6 mb-2'>
            Chapter 1: Fundamentals of Law Firm SEO Marketing
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            To improve your website’s ranking, it’s essential to understand SEO fundamentals. Although Google’s algorithm is not public, through research, we know certain key factors that affect rankings.
          </p>

          {/* Chapter Highlights */}
          <div className='mt-4'>
            <div className='grid grid-cols-1 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Website speed – Load time under three seconds is ideal. Visitors expect quick load times.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mobile-friendliness – With mobile searches on the rise, your website needs to be responsive across all devices.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Security – An SSL certificate ensures secure browsing, important for SEO and trust.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Content quality – Google prioritizes relevant and valuable content for its users.
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Backlinks – Links from other authoritative sites improve your SEO ranking.
              </p>
            </div>
          </div>

          <p className='mt-4 text-lg text-gray-700 leading-relaxed'>
            The actions visitors take on your site inform Google of its quality. The more visitors engage, the better your chances of ranking higher for similar searches.
          </p>

          <h2 className='text-2xl font-semibold mt-6 mb-2'>
            Chapter 2: Your SEO-Friendly Law Firm Website
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            A technically optimized website is key for SEO success. This chapter goes into detail about important technical aspects like speed, mobile optimization, and security.
          </p>
        </div>

        {/* Back to Projects Link */}
        <div className='col-span-4 md:col-span-1'>
          <Link href='/#projects' className='underline text-blue-500 hover:text-blue-700 transition-colors'>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NetflixProject;
