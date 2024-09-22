import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>How to Get Google Guaranteed & Unleash Your Local Business</h2>
          {/* <h3>React JS / Tailwind / Firebase</h3> */}
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          {/* <p>Project</p> */}
          {/* <h2>Overview</h2> */}
          <p>
          For business owners who are just starting out or small businesses that haven’t quite hit their stride yet, a “Google Guarantee” may sound confusing or unnecessary. However, knowing how to get Google Guaranteed is a surefire way to help your business grow and flourish.

There’s more to a Google Guarantee than meets the eye, though. It signals to potential customers that your business is verified and reliable, but if you don’t rank high enough in the search engine results, your Google Guarantee won’t mean much in the long run.

At Orbit Local, we want to help you enter the Google Guaranteed program so you can boost your business sales through more customers, calls, and leads. We can help by assisting in the construction of your GMB page and other aspects that make business advertising successful.
          </p>
          <h2>What is Google Guarantee?</h2>
          <p>o qualify for a Google Guarantee, you first have to pass Google’s screening procedure and meet their qualification guidelines through their Local Services Ads program. For customers who find your business through Google’s Local Services Ads, they are eligible for reimbursement if they’re unhappy with your work.

For example, suppose you are a service provider like a handyman or locksmith and have the Google Guarantee on your advertisement. In that case, customers can potentially complain to Google and ask for a refund after you’ve completed your service for them.</p>
          <a
            href='https://github.com/fireclint/crypto-react-firebase'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://cryptobase-yt.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
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
                <RiRadioButtonFill className='pr-1' /> Coin Gecko API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routes
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

export default crypto;
