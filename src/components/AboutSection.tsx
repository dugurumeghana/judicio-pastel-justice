
import React from 'react';
import { Scale } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">About JudicioBot</h2>
          <p className="section-subtitle">Democratizing legal awareness through artificial intelligence</p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-6">
              <div className="bg-judicio-pink/20 p-3 rounded-full">
                <Scale className="h-6 w-6 text-judicio-pink" />
              </div>
              <h3 className="ml-4 text-2xl font-playfair font-bold">Our Mission</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              JudicioBot was founded with a simple yet powerful mission: to make legal knowledge accessible to everyone, regardless of background or resources. 
            </p>
            
            <p className="text-gray-600 mb-6">
              In a world where legal systems can be complicated and intimidating, we believe that everyone deserves to understand their rights and the laws that protect them.
            </p>
            
            <div className="bg-judicio-lavender/30 border border-judicio-lavender p-6 rounded-xl">
              <p className="text-xl font-playfair italic text-judicio-text">
                "Empowering Justice Through Awareness"
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-judicio-mint/30 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Built by legal experts and AI specialists</p>
              </div>
              <div className="flex items-start">
                <div className="bg-judicio-mint/30 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Regularly updated with latest legal changes</p>
              </div>
              <div className="flex items-start">
                <div className="bg-judicio-mint/30 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Committed to ethical AI and privacy</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-judicio-blue to-judicio-lavender rounded-xl blur-md opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80" 
                alt="Legal scales" 
                className="relative rounded-xl shadow-soft w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-judicio-blue/5"></div>
    </section>
  );
};

export default AboutSection;
