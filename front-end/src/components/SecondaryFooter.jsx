import React from 'react';

const SecondaryFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-950 to-slate-400 text-black py-4">

      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 text-center pt-2 text-white-400 text-sm pb-2 font-montserrat'>
        <span>
          &copy; {currentYear} Your Company. All Rights Reserved.
        </span>
        <span>
          <a href="/privacy-policy" className="text-black mx-2 text-white-400 font-montserrat">Privacy Policy</a>
          <span className="text-black mx-2 text-white-400">|</span>
          <a href="/terms-of-use" className="text-black mx-2 text-white-400 font-montserrat">Terms of Use</a>
        </span>
      </div>
    </footer>
  );
};

export default SecondaryFooter;
