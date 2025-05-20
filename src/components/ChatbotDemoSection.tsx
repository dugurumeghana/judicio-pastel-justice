
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Mic } from 'lucide-react';

interface ChatMessage {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotDemoSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      content: "Hello! I'm JudicioBot, your AI legal assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      content: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      let botResponse = '';
      
      // Simple pattern matching for demo purposes
      const lowerCaseInput = inputText.toLowerCase();
      
      if (lowerCaseInput.includes('harassment') || lowerCaseInput.includes('workplace') || lowerCaseInput.includes('posh')) {
        botResponse = "Under the POSH Act (Sexual Harassment of Women at Workplace Act, 2013), you have the right to file a complaint with the Internal Committee at your workplace. The Act mandates that any organization with 10 or more employees must constitute an Internal Committee. You should submit a written complaint within 3 months of the incident. Would you like me to guide you through the complaint process?";
      } 
      else if (lowerCaseInput.includes('consumer') || lowerCaseInput.includes('refund') || lowerCaseInput.includes('product')) {
        botResponse = "Under the Consumer Protection Act, 2019, you have the right to seek redressal for defective products or inadequate services. You can file a complaint with the Consumer Disputes Redressal Commission depending on the value of goods or services. For claims up to ₹1 crore, approach the District Commission; for ₹1-10 crores, the State Commission; and above ₹10 crores, the National Commission.";
      } 
      else if (lowerCaseInput.includes('cyber') || lowerCaseInput.includes('online') || lowerCaseInput.includes('fraud')) {
        botResponse = "For cybercrimes in India, you can file a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or at your local cyber crime police station. Under the IT Act, 2000 (amended in 2008), various online offenses like hacking, identity theft, and online fraud are punishable. Make sure to preserve all evidence such as screenshots, transaction details, and communication records.";
      } 
      else if (lowerCaseInput.includes('rent') || lowerCaseInput.includes('tenant') || lowerCaseInput.includes('landlord')) {
        botResponse = "Tenancy laws in India vary by state. Generally, landlords must provide proper notice before eviction (typically 1-3 months). Security deposit return timelines also vary by state (usually 15-30 days after vacating). If your landlord is violating the rental agreement, you can send a legal notice and subsequently approach the Rent Control Court in your city.";
      } 
      else {
        botResponse = "I understand your question about legal matters. To provide accurate guidance, could you please provide more specific details about your situation? For example, what type of legal issue are you facing, and in which jurisdiction?";
      }
      
      const botMessage: ChatMessage = {
        id: messages.length + 2,
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <section id="chatbot-demo" className="bg-gradient-to-b from-judicio-mint/20 to-white py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Experience JudicioBot</h2>
          <p className="section-subtitle">Try our AI legal assistant with this interactive demo</p>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-gradient-to-r from-judicio-lavender to-judicio-blue/20 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-judicio-pink/30 flex items-center justify-center">
                    <span className="font-bold text-judicio-pink">JB</span>
                  </div>
                  <div>
                    <h3 className="font-bold font-playfair">JudicioBot Assistant</h3>
                    <p className="text-xs text-gray-600">Online • Quick responses</p>
                  </div>
                </div>
                <Button size="sm" className="bg-white text-judicio-pink hover:bg-judicio-pink hover:text-white transition-colors">
                  Full Version
                </Button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="p-4 h-[400px] overflow-y-auto bg-judicio-lavender/5">
              <div className="space-y-4">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-xs sm:max-w-md rounded-2xl p-3 ${
                        message.sender === 'user' 
                          ? 'bg-judicio-blue text-judicio-text rounded-tr-none' 
                          : 'bg-white shadow-sm border border-gray-100 rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-tl-none p-3">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-judicio-pink rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-judicio-lavender rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 bg-judicio-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Input area */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full border-judicio-lavender/30 text-judicio-text hover:bg-judicio-lavender/10 hover:text-judicio-pink"
                >
                  <Mic className="h-5 w-5" />
                </Button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a legal question..."
                    className="w-full rounded-full border border-judicio-lavender/30 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-judicio-pink/20 focus:border-judicio-pink"
                  />
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={inputText.trim() === ''}
                  className="rounded-full bg-gradient-pink-blue text-white hover:opacity-90"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-3 text-xs text-gray-500 text-center">
                <p>Try asking about workplace harassment, consumer complaints, or tenancy issues</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              This is just a demo of JudicioBot's capabilities. 
              The full version includes more features and comprehensive legal information.
            </p>
            <Button className="gradient-btn">
              Try Full Version
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDemoSection;
