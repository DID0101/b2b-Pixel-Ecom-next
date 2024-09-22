/* eslint-disable @next/next/inline-script-id */
import Head from 'next/head';
import Script from 'next/script';

const Calendar = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </Head>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
              Calendly.initBadgeWidget({
                url: 'https://calendly.com/didarp/consulting-meeting?hide_event_type_details=1&hide_gdpr_banner=1',
                text: 'SAVE YOUR SPOT',
                color: '#a4a4a6',
                textColor: '#1f1e1e',
                branding: true
              });
            }
          `,
        }}
      />
    </>
  );
};

export default Calendar;