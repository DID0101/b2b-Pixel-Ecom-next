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
          <p></p>
          <h2>What is Google Guarantee?</h2>
          <p>To qualify for a Google Guarantee, you first have to pass Google’s screening procedure and meet their qualification guidelines through their Local Services Ads program. For customers who find your business through Google’s Local Services Ads, they are eligible for reimbursement if they’re unhappy with your work.

For example, suppose you are a service provider like a handyman or locksmith and have the Google Guarantee on your advertisement. In that case, customers can potentially complain to Google and ask for a refund after you’ve completed your service for them.</p>
<p> </p>
              <h2>What Does Google Guarantee Cover?</h2>
              <p> </p>
              <p>While this may sound like a bad thing, it’s not. Google will only reimburse up to $2,000 in a “lifetime cap” per customer in the United States and Canada. Before it gets this far, though, Google will give you the opportunity to confer with your customer and try to make things right.

If your customer is not satisfied, Google will reimburse them.

Having a Google Guaranteed checkmark next to your business name on Local Services Ads gives potential customers a sense of security in case something goes awry. Plus, as we mentioned, Google will always reach out to you first to help you rectify the customer’s dissatisfaction.</p>
<p> </p>
<h2>How to Become Google Guaranteed</h2>
<p> </p>
<p>How to become Google Guaranteed can be fairly straightforward but requires utilizing a few different parts of Google’s business side. You’ll first need a GMB profile (more on that later), and once you’ve got that, you’ll be able to implement Local Service Ads as long as you meet the criteria.

To become eligible for the Google Guarantee, you’ll have to: pass a screening process to make sure you’re qualified for the title. You’ll have to upload your business license and pass a background check with Pinkerton. 

Pass Google Screening Process: All qualifying and eligible businesses must pass a business level screening process which includes business license and insurance check. The business owner also undergoes a background check in order to qualify for Google screened badge.
License, Insurance check and verification: For certain categories, not only will your business undergo a background check but each professional in the business must pass license check as well.
All business owners must pass the background check, plus all employees who will be entering customers’ homes. Once you’ve successfully proven to Google that your business can be trusted, you’ll pay a $50 fee each month to keep that green checkmark next to your business name.

If you’re a small business owner looking for the moment to break out amongst your competitors, the Google Guarantee program is a fantastic place to start. Using popular aspects like SEO and PPC will make sure you’re at the forefront of your niche and get you new, potentially recurring, customers.</p>
<p> </p>
<h2>How to Use Local Service Ads</h2>
<p> </p>
<p>Before we jump into the specifics of this service, it’s important to note that, at this time, it’s only available for certain small businesses. Specifically, it’s only available for service providers, as they’re going to be the businesses that customers need both locally and quickly.</p>
<p className='text-center font-bold pb-2'>Merchants eligible for this ad program include:</p>
<p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Locksmiths
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Plumbers
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HVAC (heating or air conditioning) repair
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Real estate services

              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Lawn care experts

              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Electricians
              </p>  
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Appliance repair
              </p> 
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pest control
              </p> 
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Window cleaners
              </p> 
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Water damage services
              </p> 
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Junk removal
              </p> 
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Financial planners
              </p> 
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Carpet cleaners
              </p> 
              <p> </p>
              <p>Now that you know whether or not your business can utilize Google Ads, let’s take a closer look at what it really means to not only use Local Services Ads, but to stand out amongst other small businesses as well. We’ll go over the intricacies of what a Google Guarantee really means.</p>
              <p> </p>
              <h2>Start Small with a Google Business Profile Profile</h2>
              <p> </p>
              <p>For local businesses to be noticed and recommended in a Google search, it all starts with their Google Business Profile, or GMB, profile. Creating a GBP profile for your business is free and, unlike the Local Service Ads, is open to all merchants—not just service providers.

GMB lets you connect with potential customers directly via their ability to call or message you directly from your GBP profile. It also allows customers to leave online reviews directly on your Google profile, rather than relying on an external site like Yelp. Having timely responsiveness to potential customers and keeping your cancellations minimal will help keep your ratings positive.

Google Business Profile will also provide you with a clean, easy-to-use website builder that will allow you to showcase your business in all its glory with photos, specials, and other unique aspects of your business, but also create an easy-to-navigate mobile-friendly webpage.

Orbit Local will help you optimize all aspects of the GBP page, including making sure your ads are targeted to a localized audience (to help drive more revenue/leads) and getting reviews from former customers who were over the moon with the service you provided.</p>
<p> </p>
<Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
          {/* <a
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
          </a> */}

        </div>
        {/* <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
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
        </div> */}
        
      </div>
    </div>
  );
};

export default crypto;
