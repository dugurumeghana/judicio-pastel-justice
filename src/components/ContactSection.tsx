
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className="bg-white py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Have questions or feedback? We'd love to hear from you</p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-judicio-lavender/5 rounded-2xl p-8 border border-judicio-lavender/20 shadow-soft">
            <h3 className="text-xl font-bold font-playfair mb-6">Send Us a Message</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-judicio-lavender/30 focus:border-judicio-pink focus:ring-judicio-pink/20"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-judicio-lavender/30 focus:border-judicio-pink focus:ring-judicio-pink/20"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white border-judicio-lavender/30 focus:border-judicio-pink focus:ring-judicio-pink/20"
                    placeholder="Inquiry about JudicioBot features"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white border-judicio-lavender/30 focus:border-judicio-pink focus:ring-judicio-pink/20 min-h-[150px]"
                    placeholder="I'd like to know more about..."
                  />
                </div>
                
                <Button type="submit" className="gradient-btn w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
          
          {/* CTA Card */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-judicio-pink/20 to-judicio-blue/20 rounded-2xl p-8 border border-judicio-pink/10 shadow-soft mb-8 flex-grow">
              <h3 className="text-xl font-bold font-playfair mb-4">Try JudicioBot Demo</h3>
              <p className="text-gray-600 mb-6">
                Experience firsthand how JudicioBot can assist with legal queries and provide valuable information.
              </p>
              <Button className="gradient-btn w-full">
                Launch Demo
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-judicio-lavender/20 to-judicio-mint/20 rounded-2xl p-8 border border-judicio-lavender/10 shadow-soft">
              <h3 className="text-xl font-bold font-playfair mb-4">Business Inquiries</h3>
              <p className="text-gray-600 mb-4">
                For partnerships, enterprise solutions, or media inquiries:
              </p>
              <div className="bg-white/70 rounded-lg p-4">
                <p className="text-gray-600 font-medium">Email:</p>
                <a href="mailto:business@judiciobot.ai" className="text-judicio-pink hover:underline">business@judiciobot.ai</a>
                
                <p className="text-gray-600 font-medium mt-3">Phone:</p>
                <a href="tel:+919876543210" className="text-judicio-pink hover:underline">+91 9876543210</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
