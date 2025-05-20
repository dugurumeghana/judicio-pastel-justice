
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-judicio-lavender/30">
      <div className="section-container pt-20 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              Your <span className="text-judicio-pink">AI Legal Guide</span> for everyday justice
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              JudicioBot makes legal awareness accessible to everyone with AI-powered assistance. Get insights on laws, rights, and actions tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-btn">
                Try JudicioBot Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-judicio-pink text-judicio-text hover:bg-judicio-pink/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute -inset-1 bg-gradient-to-r from-judicio-pink to-judicio-blue rounded-2xl blur opacity-30"></div>
            <div className="relative bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="bg-judicio-lavender/50 p-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="ml-2 text-sm font-medium">JudicioBot Chat</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="bg-judicio-blue/20 p-3 rounded-lg rounded-tl-none max-w-xs">
                    <p className="text-sm">I faced harassment at my workplace. What are my legal rights?</p>
                  </div>
                  <div className="bg-judicio-lavender/30 p-3 rounded-lg rounded-tr-none max-w-xs ml-auto">
                    <p className="text-sm">Under the POSH Act in India, you have the right to file a complaint with the Internal Committee. I can help you understand the procedure...</p>
                  </div>
                  <div className="bg-judicio-blue/20 p-3 rounded-lg rounded-tl-none max-w-xs">
                    <p className="text-sm">What is the timeline for filing a complaint?</p>
                  </div>
                  <div className="bg-judicio-lavender/30 p-3 rounded-lg rounded-tr-none max-w-xs ml-auto">
                    <p className="text-sm">You should file your complaint within 3 months of the incident. The committee can extend this by another 3 months if they find valid reasons for delay.</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center border rounded-full overflow-hidden bg-white shadow-sm">
                  <input
                    type="text"
                    placeholder="Type your legal question..."
                    className="flex-1 py-2 px-4 focus:outline-none text-sm"
                  />
                  <button className="bg-gradient-pink-blue text-white p-2 rounded-full mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-12 h-40 w-40 rounded-full bg-judicio-mint blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-0 h-60 w-60 rounded-full bg-judicio-pink blur-3xl opacity-20"></div>
    </section>
  );
};

export default HeroSection;
