import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import JobfountLogo from '../assets/Jobfount.png'; // Import the image

const JobfountFooter = () => {
  return (
     <footer className="bg-black border-t border-gray-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-row justify-between items-center flex-wrap py-4">
          
          {/* Logo and Copyright */}
          <div className="flex flex-col space-y-2 sm:space-y-3">
            <div className="flex items-center space-x-2">
              <img src={JobfountLogo} alt="JobFount Logo" className="h-16 sm:h-24 w-24 sm:w-28" />
            </div>
            <p className="text-xs text-white">© 2025 JobFount</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">Social</h4>
            <div className="flex items-center space-x-3 sm:space-x-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-1 hover:bg-gray-100 rounded">
                <Facebook size={16} className="w-4 h-4 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-1 hover:bg-gray-100 rounded">
                <Linkedin size={16} className="w-4 h-4 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors p-1 hover:bg-gray-100 rounded">
                <Instagram size={16} className="w-4 h-4 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default JobfountFooter;
