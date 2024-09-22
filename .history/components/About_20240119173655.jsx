import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About B2B Pixel
          </p>
          
          <p className='py-2 text-gray-600'>
          Welcome to B2B Pixel, your dedicated partner in digital marketing and online growth. Our story began in the beautiful suburbs of London with a mission to empower small businesses, the heart and soul of our local economy.
          </p>
          <h2 className='py-4'>The Mission</h2>
          <p className='py-2 text-gray-600'>
          We believe in the transformative power of data-driven decision-making. Our expertise lies in unlocking the potential of every click, every view and every digital interaction your business engages in. Leveraging this wealth of data, we strive to boost your online presence and drive sustainable growth for the long term.

For us, it’s not about quick fixes, but about building strong, sustainable online foundations that will allow your business to flourish for decades to come. We believe in creating genuine partnerships with our clients, fostering trust and working hand in hand to achieve remarkable results. We value transparency, integrity and the ambition to push boundaries in the pursuit of excellence.
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check ou.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
