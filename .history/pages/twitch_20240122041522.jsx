import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/twitch.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Mastering PPC for Lawyers</h2>
          {/* <h3>Next JS / Tailwind / Next Auth</h3> */}
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          {/* <p>Project</p> */}
          {/* <h2>Overview</h2> */}
          <p>
          If you’re a lawyer looking to boost your online presence and attract more clients, PPC advertising can be the solution for you. In this blog, we’ll explore the world of PPC for lawyers and show you how it can revolutionize your marketing strategy. From understanding what PPC is and its advantages for lawyers to exploring different ads and platforms, we’ve got you covered. We’ll guide you through creating successful campaigns, highlight essential terms, and provide effective strategies. Additionally, we’ll touch on law firm branding, SEO for lawyers, and advertising rules. Get ready to master PPC and enhance your online presence.
          </p>
          <p> </p>
          <h2>What is Pay-Per-Click (PPC for Lawyers)?</h2>
          <p> </p>
          <p>PPC for lawyers is an online advertising model where they bid on legal service-related keywords to display ads. Lawyers pay only when someone clicks on their ad, driving targeted traffic to their law firm’s websites and increasing online visibility</p>
          <p></p>
          <h2>Advantages of PPC for Lawyers</h2>
          <p> </p>
          <p>Boost your law firm’s website presence with the advantages of law firm PPC advertising. With Pay-Per-Click, also known as PPC, lawyers can effectively target specific keywords and demographics, easily attracting potential clients. Experience immediate visibility at the top of search engine results pages, driving quality traffic to your firm’s website. Analyze and optimize ad campaigns easily, as PPC allows for comprehensive tracking and measurement of key metrics. Set spending limits that align with your marketing strategies, ensuring your PPC budget stays on track. Maximize your law firm’s online visibility, reach, and results with successful PPC for lawyers.</p>
          <p> </p>
            <h2>PPC vs. SEO for Lawyers: Fast Results with PPC Advertising</h2>
            <p></p>
            <p>PPC advertising is an effective approach to online marketing for lawyers. It provides faster results compared to SEO. With PPC, law firms can quickly secure top search engine positions by bidding on keywords and targeting specific demographics. This allows them to reach their target audience and drive traffic to their websites. Unlike SEO, PPC campaigns provide measurable data, allowing lawyers to assess the effectiveness of their advertising efforts. Lawyers can also control their PPC budget by setting spending limits and allocating resources strategically.</p>
            <p></p>
            <h2>Types of PPC Ads for Lawyers</h2>
            <p></p>
              <p>When driving online visibility and attracting potential clients, PPC advertising for law firms plays a crucial role. The power of PPC lies in its versatility and the various ad formats that can be employed. Here’s a breakdown of the key types of PPC ads for lawyers:</p>


          <a
            href='https://twitch-nextjs-tailwind.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/fireclint/twitch-nextjs-tailwind'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Auth
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

export default twitch;
