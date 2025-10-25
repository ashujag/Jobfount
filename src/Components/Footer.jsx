import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const JobfountFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          
          {/* Logo and Copyright */}
          <div className="flex flex-col space-y-2 sm:space-y-3">
            <div className="flex items-center space-x-2">
              <img src="/src/assets/Jobfount.jpeg" alt="JobFount Logo" className="h-9 sm:h-20 w-auto" />
            </div>
            <p className="text-xs text-gray-500">© 2025 JobFount</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 w-full md:w-auto">
            
            {/* About */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">About</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">FAQCenter</a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Support</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">FAQs</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Browse Jobs</a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Post a Job</a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Social</h4>
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
      </div>
    </footer>
  );
};

export default JobfountFooter;
