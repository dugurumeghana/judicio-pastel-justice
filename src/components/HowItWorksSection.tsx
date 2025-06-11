
import React from 'react';
import { MessageSquare, Search, BookOpen } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-judicio-beige/20 py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">How JudicioBot Works</h2>
          <p className="section-subtitle">Getting legal guidance has never been this simple and accessible</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="card text-center group hover:translate-y-[-5px] transition-all">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-judicio-deepRed/20 text-judicio-deepRed mb-6 mx-auto group-hover:bg-judicio-deepRed group-hover:text-white transition-colors">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-3">Describe Your Situation</h3>
            <p className="text-gray-600">
              Tell JudicioBot about your legal concerns in simple language or even your local language. No legal jargon needed.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="card text-center group hover:translate-y-[-5px] transition-all">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-judicio-mutedGold/20 text-judicio-mutedGold mb-6 mx-auto group-hover:bg-judicio-mutedGold group-hover:text-white transition-colors">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-3">AI Analysis</h3>
            <p className="text-gray-600">
              Our AI understands your query and analyzes relevant laws, precedents, and legal frameworks to provide accurate guidance.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="card text-center group hover:translate-y-[-5px] transition-all">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-judicio-rustyOrange/20 text-judicio-rustyOrange mb-6 mx-auto group-hover:bg-judicio-rustyOrange group-hover:text-white transition-colors">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-3">Get Clear Guidance</h3>
            <p className="text-gray-600">
              Receive easy-to-understand information about your rights, applicable laws, and potential next steps to address your situation.
            </p>
          </div>
        </div>
        
        {/* Example flow */}
        <div className="mt-20 bg-white rounded-2xl shadow-soft p-6 md:p-8">
          <h3 className="text-2xl font-playfair font-bold mb-6 text-center">See JudicioBot in Action</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-judicio-beige/50 to-white rounded-xl p-5 border border-judicio-beige/40">
              <div className="flex items-center mb-3">
                <div className="bg-judicio-beige h-8 w-8 rounded-full flex items-center justify-center text-judicio-text font-bold">1</div>
                <h4 className="ml-3 font-medium">User Query</h4>
              </div>
              <p className="text-gray-600 text-sm">
                "My landlord is asking me to vacate without proper notice. What are my rights as a tenant?"
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-judicio-mutedGold/30 to-white rounded-xl p-5 border border-judicio-mutedGold/40">
              <div className="flex items-center mb-3">
                <div className="bg-judicio-mutedGold h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h4 className="ml-3 font-medium">AI Processing</h4>
              </div>
              <p className="text-gray-600 text-sm">
                JudicioBot identifies this as a tenancy dispute, analyzes relevant rent control laws and tenant protection provisions in your jurisdiction.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-judicio-rustyOrange/30 to-white rounded-xl p-5 border border-judicio-rustyOrange/40">
              <div className="flex items-center mb-3">
                <div className="bg-judicio-rustyOrange h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h4 className="ml-3 font-medium">Legal Guidance</h4>
              </div>
              <p className="text-gray-600 text-sm">
                "Under Section 106 of the Transfer of Property Act, your landlord must provide at least 15 days' notice. Here are the steps you can take to address this issue..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
