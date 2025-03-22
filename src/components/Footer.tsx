import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const baseUrl = '/crotonite-beta';

  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-medium text-white">Crotonite</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Making electron accelerator technology accessible to research institutions, universities, and laboratories worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href="mailto:crotonitebeta@gmail.com" className="text-gray-400 hover:text-white">Mail Us</a>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-400">+91 94799 76753</span>
              </li>
              <li className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-400">Indore,India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href={`${baseUrl}/about`} className="text-sm text-gray-400 hover:text-white">About Us</a></li>
              <li><a href={`${baseUrl}/technology`} className="text-sm text-gray-400 hover:text-white">Technology</a></li>
              <li><a href={`${baseUrl}/productpage`} className="text-sm text-gray-400 hover:text-white">Products</a></li>
              <li><a href={`${baseUrl}/contact`} className="text-sm text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Crotonite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}