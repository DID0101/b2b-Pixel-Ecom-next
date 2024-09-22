import { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/didarp/consulting-meeting',
        text: 'Contact us',
        color: '#6a7687',
        textColor: '#ffffff',
        branding: undefined,
      });
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script and link when the component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/didarp/consulting-meeting',
    });
  };

  return null; // This component doesn't render anything
};

export const useCalendly = () => {
  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/didarp/consulting-meeting',
    });
  };

  return openCalendly;
};

export default CalendlyBadge;
