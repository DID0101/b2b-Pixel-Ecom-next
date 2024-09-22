import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import Link from 'next/link';

const CryptoProject = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='crypto project image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-2xl md:text-3xl font-semibold'>
            Berrysmfg Company needed a site that communicated their lifestyle brand and stood out.
            We took them from an idea to a live store within 8 weeks. It’s time to get loud.
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>Berrysmfg</h2>
          <p className='mb-4'>
            For business owners who are just starting out or small businesses that haven’t quite hit their stride yet,
            a “Google Guarantee” may sound confusing or unnecessary. However, knowing how to get Google Guaranteed
            is a surefire way to help your business grow and flourish.
          </p>
          <p className='mb-4'>
            There’s more to a Google Guarantee than meets the eye, though. It signals to potential customers that
            your business is verified and reliable, but if you don’t rank high enough in the search engine results,
            your Google Guarantee won’t mean much in the long run.
          </p>
          <p className='mb-4'>
            At Orbit Local, we want to help you enter the Google Guaranteed program so you can boost your business
            sales through more customers, calls, and leads. We can help by assisting in the construction of your
            GMB page and other aspects that make business advertising successful.
          </p>
          <Link href='/#projects'>
            <p className='text-blue-500 underline cursor-pointer hover:text-blue-700 transition-colors'>
              Back to Projects
            </p>
          </Link>
        </div>

        {/* Uncomment if needed for later */}
        {/* 
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-4'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
            </div>
          </div>
        </div> 
        */}
      </div>
    </div>
  );
};

export default CryptoProject;
