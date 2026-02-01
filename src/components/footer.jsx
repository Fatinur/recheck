import React from 'react';
import Logo from '../assets/logo.png';
import Insta from '../assets/insta.png';
import Fb from '../assets/fb.png';

const Footer = () => {
  return (
    <footer className="w-full border-t border-prim ]">
      <div className="w-[90vw]  flex flex-row  items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo */}
        <div className="flex justify-start">
          <img src={Logo} alt="Logo" className="md:h-[10vh] h-[6vh] w-auto object-contain" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-end  space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Instagram" className="h-[6vh] w-6 object-contain hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Fb} alt="Facebook" className="h-[6vh] w-6 object-contain hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>

      
    </footer>
  );
}

export default Footer;
