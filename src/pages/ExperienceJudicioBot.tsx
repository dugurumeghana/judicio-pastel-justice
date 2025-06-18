
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Send, MessageSquare } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ExperienceJudicioBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm JudicioBot, your AI legal assistant. I can help you understand Indian laws, your rights, and guide you through legal procedures. What legal question can I help you with today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newUserMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        isUser: true,
        timestamp: new Date()
      };

      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your question. This is a demo version of JudicioBot. In the full version, I would analyze your query and provide relevant legal information, applicable laws, and guidance on next steps. Please consult with a qualified lawyer for specific legal advice.",
        isUser: false,
        timestamp: new Date()
      };

      setMessages([...messages, newUserMessage, botResponse]);
      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-judicio-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-playfair text-judicio-text mb-4">
              Experience JudicioBot
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Ask any legal question and get AI-powered guidance
            </p>
            <div className="bg-judicio-beige/50 border border-judicio-beige/60 p-4 rounded-xl max-w-2xl mx-auto">
              <p className="text-sm text-judicio-text">
                <strong>Note:</strong> This is a demo version. AI does not replace legal advice from a qualified lawyer.
              </p>
            </div>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            {/* Chat Header */}
            <div className="bg-judicio-beige/70 p-4 border-b border-judicio-beige/60">
              <div className="flex items-center space-x-3">
                <div className="bg-judicio-mutedGold/30 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-judicio-mutedGold" />
                </div>
                <div>
                  <h3 className="font-medium text-judicio-text">JudicioBot Assistant</h3>
                  <p className="text-sm text-gray-600">Legal AI Assistant</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.isUser
                        ? 'bg-judicio-mutedGold/20 text-judicio-text rounded-tr-none'
                        : 'bg-judicio-beige/40 text-judicio-text rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-judicio-beige/60">
              <div className="flex space-x-3">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your legal question here..."
                  className="flex-1 resize-none border border-judicio-beige/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-judicio-mutedGold/50 focus:border-judicio-mutedGold"
                  rows={2}
                />
                <Button
                  onClick={handleSendMessage}
                  className="gradient-btn px-6"
                  disabled={!inputText.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sample Questions */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-judicio-text mb-4">
              Sample Questions You Can Ask:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "What are my rights as a tenant in India?",
                "How do I file a consumer complaint?",
                "What is the POSH Act and how does it protect me?",
                "What should I do if I'm a victim of cybercrime?",
                "How can I register a police complaint?",
                "What are the procedures for filing a divorce?"
              ].map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(question)}
                  className="text-left p-3 bg-judicio-beige/30 hover:bg-judicio-beige/50 rounded-lg transition-colors text-sm text-judicio-text"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExperienceJudicioBot;
