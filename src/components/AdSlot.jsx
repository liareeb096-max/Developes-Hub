import { useEffect, useRef } from 'react';

export default function AdSlot({ size = 'leaderboard', className = '' }) {
  const adContainerRef = useRef(null);

  useEffect(() => {
    // Check lagaya hai taake ad do-do baar load na ho
    if (adContainerRef.current && adContainerRef.current.children.length === 0) {
      
      // 1. Adsterra ki Settings
      const conf = document.createElement('script');
      conf.type = 'text/javascript';
      conf.innerHTML = `
        atOptions = {
          'key' : 'ccee1aa970c24fada2d7114684e1fd70',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;

      // 2. Adsterra ka Main Script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      // Neechay wale link mein bhi apni key dalna mat bhoolna
      script.src = 'https://www.highrevenueformat.com/ccee1aa970c24fada2d7114684e1fd70/invoke.js';

      adContainerRef.current.appendChild(conf);
      adContainerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className={`flex justify-center items-center my-4 overflow-hidden min-h-[90px] ${className}`} ref={adContainerRef}>
      {/* Banner Ad automatically is div ke andar aayega */}
    </div>
  );
}