import React from 'react';
import logoWhite from "../../public/assets/logo-white.svg";


const Footer = () => {
    return (
        <div>
<footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex justify-center text-center">
    <div className="space-y-2">
      <div className='flex justify-center'>
      <img src={logoWhite} alt="" className='w-36'/>
      </div>
      {/* <h3 className="text-xl font-semibold">Merris Foundation</h3> */}
      <p className="text-sm">Empowering communities, supporting growth, and making a difference together.</p>
      <p className="text-xs">© {new Date().getFullYear()} Merris Group. All Rights Reserved.</p>
    </div>
  </div>
</footer>


        </div>
    );
};

export default Footer;