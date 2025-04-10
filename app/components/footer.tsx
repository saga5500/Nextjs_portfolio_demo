import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Logo & Description */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold text-blue-400">Sagar Bista</h1>
            <p className="mt-2 text-sm text-gray-400">
              We strive to provide excellent services with innovative solutions.
            </p>
          </div>
          
          {/* Footer Navigation Links */}
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-start space-x-6">
              <li>
                <a href="/about" className="text-gray-400 hover:text-blue-500">About</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-blue-500">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-blue-500">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-blue-500">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links on the Right Side
        <div className="mt-8  md:mt-0 flex justify-end space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div> */}

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-4 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Sagar Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
