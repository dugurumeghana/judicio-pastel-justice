
import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';

const ForStudentsSection = () => {
  return (
    <section id="for-students" className="bg-white py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">For Students & Professionals</h2>
          <p className="section-subtitle">Enhance your legal education and practice with specialized tools</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Law Students */}
          <div className="bg-judicio-lavender/10 rounded-2xl p-8 border border-judicio-lavender/30">
            <div className="flex items-center mb-6">
              <div className="bg-judicio-lavender p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-2xl font-playfair font-bold">For Law Students</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-medium mb-2 text-lg">Practice Zone</h4>
                <p className="text-gray-600 text-sm">
                  Train your legal reasoning with hundreds of scenario-based questions covering various areas of law. Get instant feedback and explanations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-medium mb-2 text-lg">Mock Arguments</h4>
                <p className="text-gray-600 text-sm">
                  Simulate courtroom arguments with JudicioBot acting as opposing counsel. Perfect your advocacy skills and learn to think on your feet.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-medium mb-2 text-lg">Exam Preparation</h4>
                <p className="text-gray-600 text-sm">
                  Study smart with AI-generated practice questions, case summaries, and concept explanations tailored to your law school curriculum.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="gradient-btn w-full">
                Student Access
              </Button>
              <p className="text-center text-gray-500 text-sm mt-3">Special pricing available for educational institutions</p>
            </div>
          </div>
          
          {/* For Legal Professionals */}
          <div className="bg-judicio-blue/10 rounded-2xl p-8 border border-judicio-blue/30">
            <div className="flex items-center mb-6">
              <div className="bg-judicio-blue p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-judicio-blue" />
              </div>
              <h3 className="ml-4 text-2xl font-playfair font-bold">For Legal Professionals</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-medium mb-2 text-lg">Legal Research Assistant</h4>
                <p className="text-gray-600 text-sm">
                  Save hours of research time with AI-powered case law analysis, statute interpretation, and precedent finding across thousands of judgments.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-medium mb-2 text-lg">Document Analysis</h4>
                <p className="text-gray-600 text-sm">
                  Upload legal documents to get AI insights, summaries, and potential issues or opportunities that might be missed during manual review.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-medium mb-2 text-lg">Client Consultation Tool</h4>
                <p className="text-gray-600 text-sm">
                  Use JudicioBot as a preliminary client intake tool to gather basic information and provide initial guidance before in-depth consultations.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="w-full bg-gradient-to-r from-judicio-blue to-blue-500 text-white hover:from-blue-500 hover:to-judicio-blue shadow-soft hover:shadow-md transition-all">
                Professional Access
              </Button>
              <p className="text-center text-gray-500 text-sm mt-3">Enterprise solutions available for law firms</p>
            </div>
          </div>
        </div>
        
        {/* Legal Database */}
        <div className="mt-16 bg-gradient-to-b from-judicio-beige/30 to-white rounded-2xl p-8 border border-judicio-beige/30">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-judicio-beige p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-judicio-text" />
            </div>
            <h3 className="ml-4 text-2xl font-playfair font-bold">Comprehensive Legal Database</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <h4 className="text-4xl font-bold text-judicio-pink mb-2">25K+</h4>
              <p className="text-gray-600">Legal Provisions</p>
            </div>
            
            <div className="card text-center">
              <h4 className="text-4xl font-bold text-judicio-blue mb-2">100K+</h4>
              <p className="text-gray-600">Case Judgments</p>
            </div>
            
            <div className="card text-center">
              <h4 className="text-4xl font-bold text-green-600 mb-2">5K+</h4>
              <p className="text-gray-600">Legal Forms</p>
            </div>
            
            <div className="card text-center">
              <h4 className="text-4xl font-bold text-purple-600 mb-2">200+</h4>
              <p className="text-gray-600">Acts & Regulations</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-judicio-text text-judicio-text hover:bg-judicio-beige/20">
              Explore Database
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStudentsSection;
