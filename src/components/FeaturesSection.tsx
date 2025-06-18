
import React from 'react';
import { MessageSquare, Globe, Mic, BookOpen, Lock, FileText } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Designed to make legal information accessible to everyone</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="bg-judicio-deepRed/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-judicio-deepRed" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-2">AI Legal Assistant</h3>
            <p className="text-gray-600">
              Advanced chatbot trained on thousands of Indian laws, regulations, and court judgments to provide accurate legal information.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="bg-judicio-mutedGold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-judicio-mutedGold" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-2">Multilingual Support</h3>
            <p className="text-gray-600">
              Get legal guidance in 10+ Indian languages including Hindi, Tamil, Bengali, Telugu, and more to overcome language barriers.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="bg-green-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Mic className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-2">Voice-to-Text</h3>
            <p className="text-gray-600">
              Simply speak your questions and concerns. Our voice recognition technology converts your speech to text for easier interaction.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="bg-judicio-rustyOrange/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-judicio-rustyOrange" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-2">Case References</h3>
            <p className="text-gray-600">
              Access relevant case laws and precedents to better understand how courts have interpreted similar situations in the past.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="bg-judicio-mutedGold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-judicio-mutedGold" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-2">Privacy Focused</h3>
            <p className="text-gray-600">
              Your conversations are private and secure. We employ end-to-end encryption and strict data protection measures.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="bg-judicio-deepRed/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-judicio-deepRed" />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-2">Document Templates</h3>
            <p className="text-gray-600">
              Access templates for common legal documents like complaint letters, legal notices, and applications to relevant authorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
