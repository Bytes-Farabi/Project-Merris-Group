import React from 'react';

const Footer = () => {
    return (
        <div>
<footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex justify-center text-center">
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">Merris Foundation</h3>
      <p className="text-sm">Empowering communities, supporting growth, and making a difference together.</p>
      <p className="text-xs">© {new Date().getFullYear()} Merris Foundation. All Rights Reserved.</p>
    </div>
  </div>
</footer>


        </div>
    );
};

export default Footer;