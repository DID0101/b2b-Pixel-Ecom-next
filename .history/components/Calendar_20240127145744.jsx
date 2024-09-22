/* eslint-disable @next/next/inline-script-id */
import Head from 'next/head';
import Script from 'next/script';

const Calendar = () => {
  return (
    <><div className="calendly-inline-widget" data-url="https://calendly.com/didarp/consulting-meeting" style={{ minWidth: '320px', height: '700px' }}></div><Script
          src="https://assets.calendly.com/assets/external/widget.js"
          async /></>
      
  );
};

export default Calendar;