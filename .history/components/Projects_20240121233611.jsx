import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Blog
        </p>
        <h2 className='py-4'>Latest Articles</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Local Digital Marketing Services For Small Businesses'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech=''
          />
          <ProjectItem
            title='How to Get Google Guaranteed & Unleash Your Local Business'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech=''

          />
          <ProjectItem
            title='Law Firm SEO: How to Prime Your Site for Massive Growth'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
