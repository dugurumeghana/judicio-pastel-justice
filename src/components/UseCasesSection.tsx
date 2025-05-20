
import React from 'react';
import { Button } from "@/components/ui/button";

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="bg-judicio-lavender/10 py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Use Cases</h2>
          <p className="section-subtitle">See how JudicioBot helps in different legal scenarios</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Use Case 1 */}
          <div className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-md transition-shadow">
            <div className="bg-judicio-pink/20 text-judicio-pink py-1 px-3 rounded-full text-sm font-medium inline-block mb-4">
              Workplace
            </div>
            <h3 className="text-xl font-bold font-playfair mb-3">Sexual Harassment at Work (POSH Act)</h3>
            <p className="text-gray-600 mb-4">
              JudicioBot guides victims through the complaint process, explaining their rights under the POSH Act, and the responsibilities of employers to form Internal Committees.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
              <h4 className="font-medium mb-2">JudicioBot provides:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Step-by-step guidance on filing complaints
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Information about workplace rights
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Templates for formal complaints
                </li>
              </ul>
            </div>
            <Button variant="outline" className="w-full border-judicio-pink text-judicio-pink hover:bg-judicio-pink/10">
              Learn More
            </Button>
          </div>
          
          {/* Use Case 2 */}
          <div className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-md transition-shadow">
            <div className="bg-judicio-blue/20 text-judicio-blue py-1 px-3 rounded-full text-sm font-medium inline-block mb-4">
              Consumer
            </div>
            <h3 className="text-xl font-bold font-playfair mb-3">Consumer Complaints</h3>
            <p className="text-gray-600 mb-4">
              JudicioBot explains consumer rights under the Consumer Protection Act, guiding users through the process of filing complaints against faulty products or inadequate services.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
              <h4 className="font-medium mb-2">JudicioBot provides:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Analysis of warranty and guarantee terms
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Consumer forum filing procedures
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Compensation calculation guidance
                </li>
              </ul>
            </div>
            <Button variant="outline" className="w-full border-judicio-blue text-judicio-blue hover:bg-judicio-blue/10">
              Learn More
            </Button>
          </div>
          
          {/* Use Case 3 */}
          <div className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-md transition-shadow">
            <div className="bg-judicio-mint/20 text-green-600 py-1 px-3 rounded-full text-sm font-medium inline-block mb-4">
              Digital
            </div>
            <h3 className="text-xl font-bold font-playfair mb-3">Cybercrime and Online Fraud</h3>
            <p className="text-gray-600 mb-4">
              When users face online harassment, fraud, or data breaches, JudicioBot provides guidance on IT Act provisions and steps to take for reporting cybercrimes.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
              <h4 className="font-medium mb-2">JudicioBot provides:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Cybercrime reporting procedures
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Information on IT Act provisions
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Evidence preservation guidance
                </li>
              </ul>
            </div>
            <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-judicio-mint/20">
              Learn More
            </Button>
          </div>
          
          {/* Use Case 4 */}
          <div className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-md transition-shadow">
            <div className="bg-judicio-lavender/30 text-purple-600 py-1 px-3 rounded-full text-sm font-medium inline-block mb-4">
              Housing
            </div>
            <h3 className="text-xl font-bold font-playfair mb-3">Tenancy Issues</h3>
            <p className="text-gray-600 mb-4">
              JudicioBot helps tenants and landlords understand their rights and obligations under rent control laws, including legal notice periods and maintenance responsibilities.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
              <h4 className="font-medium mb-2">JudicioBot provides:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Rental agreement analysis
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  State-specific rent control laws
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Eviction and security deposit guidance
                </li>
              </ul>
            </div>
            <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-judicio-lavender/20">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">JudicioBot covers hundreds of legal topics across multiple categories</p>
          <Button className="gradient-btn">Explore More Use Cases</Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
