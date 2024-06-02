import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-6 mt-8 shadow ">
      <div className="container mx-auto grid grid-cols-5 gap-6 text-center">
        <div>
          <div className="font-bold">Abstract</div>
          <ul>
            <li><a href="#" className="text-white">Branches</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Resources</div>
          <ul>
            <li><a href="#" className="text-white">Blog</a></li>
            <li><a href="#" className="text-white">Help Center</a></li>
            <li><a href="#" className="text-white">Release Notes</a></li>
            <li><a href="#" className="text-white">Status</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Community</div>
          <ul>
            <li><a href="#" className="text-white">Twitter</a></li>
            <li><a href="#" className="text-white">LinkedIn</a></li>
            <li><a href="#" className="text-white">Facebook</a></li>
            <li><a href="#" className="text-white">Dribbble</a></li>
            <li><a href="#" className="text-white">Podcast</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Company</div>
          <ul>
            <li><a href="#" className="text-white">About Us</a></li>
            <li><a href="#" className="text-white">Careers</a></li>
            <li><a href="#" className="text-white">Legal</a></li>
            <li><a href="#" className="text-white">Contact Us</a></li>
          </ul>
        </div>
        <div className="flex items-end text-center mt-4 text-gray-600">© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</div>

      </div>
    </footer>
  );
};

export default Footer;

