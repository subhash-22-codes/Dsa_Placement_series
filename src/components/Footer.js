import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">@gtech_dsa</h3>
            <p className="text-gray-400 mb-4">
              Helping students master DSA and crack their dream placements through structured learning.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/gtech_dsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:gopikrishna0727@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#patterns" className="text-gray-400 hover:text-white transition-colors">
                  Patterns
                </a>
              </li>
              <li>
                <a href="#questions" className="text-gray-400 hover:text-white transition-colors">
                  DSA Series
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/gtech_dsa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Series Overview</h4>
            <div className="space-y-2 text-gray-400">
              <div>📚 30 Handpicked Questions</div>
              <div>📅 15 Structured Days</div>
              <div>🎯 10+ Core Patterns</div>
              <div>🏢 Company-Specific Tags</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 @gtech_dsa. Built with friend for placement preparation.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Master DSA patterns and crack your dream placement!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 