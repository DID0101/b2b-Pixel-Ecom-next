import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';

const Skills = () => {
  return (
    <div id='services' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        {/* <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p> */}
        <h2 className='py-4'>What We Can Do For You</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='104px' height='84px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>E-commerce Design</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='104px' height='84px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SEO</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='104px' height='84px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Lead Generation</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='104px' height='84px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Email Marketing</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='104px' height='84px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Markeying & Sales Automation</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='104px' height='84px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PPC Ads Management</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='104px' height='84px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Social Media Marketing</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='104px' height='84px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Analytics & Reporting</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
