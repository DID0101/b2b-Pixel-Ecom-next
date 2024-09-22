import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='blog' className='w-full bg-gray-100'>
      <div className='max-w-[1240px] mx-auto px-4 py-16'>
        {/* Section title */}
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Testimonials
        </p>
        <h2 className='py-4 text-3xl font-semibold'>Case Studies</h2>
        
        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Сквот'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech=''
          />
          <ProjectItem
            title='berrysmfg'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech=''
          />
          <ProjectItem
            title='cantasepetim'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech=''
          />
          <ProjectItem
            title='doorbazar'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech=''
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
