import React from 'react';
import { useCalendly } from './CalendlyBadge';

const CalendlyButton = () => {
  const openCalendly = useCalendly();

  return (
    <button
      onClick={openCalendly}
      className="relative inline-flex items-center justify-center px-6 py-1.5 text-xs font-medium border border-neutral-200 dark:border-white/[0.2] text-black dark:text-white rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-300"
    >
      <span>Save Your Spot</span>
    </button>
  );
};

export default CalendlyButton;
