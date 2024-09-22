import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    const style = document.createElement('style');
    style.innerHTML = '.calendly-inline-widget { min-width: 320px; height: 700px; }';

    document.body.appendChild(script);
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/didarp/consulting-meeting?hide_gdpr_banner=1&primary_color=67696d"></div>
  );
};

export default Contact;
