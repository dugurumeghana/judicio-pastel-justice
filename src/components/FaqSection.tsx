
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does JudicioBot work?",
      answer: "JudicioBot uses advanced AI trained on legal texts, statutes, and case law to understand your queries about legal matters. It analyzes your situation and provides relevant legal information, explains your rights, and suggests possible next steps. The technology combines natural language processing with a specialized legal knowledge base to make legal information accessible to everyone."
    },
    {
      question: "Is JudicioBot free to use?",
      answer: "JudicioBot offers a free tier that provides basic legal information and guidance for common issues. For more advanced features like document analysis, detailed case references, and professional tools, we offer affordable premium plans. We're committed to making legal information accessible, so essential services will always be available for free."
    },
    {
      question: "Can JudicioBot replace a lawyer?",
      answer: "No, JudicioBot is not a substitute for professional legal advice. While it provides valuable legal information and guidance, it's designed to be an educational tool and initial resource. For specific legal situations that require representation or personalized advice, we always recommend consulting with a qualified lawyer. JudicioBot can help you better understand your situation before seeking professional help."
    },
    {
      question: "Is my conversation with JudicioBot confidential?",
      answer: "Yes, your conversations with JudicioBot are private and secured with end-to-end encryption. We do not share your personal information or the content of your conversations with third parties. We may use anonymized data to improve our services, but this never includes personally identifiable information. You can read more about our privacy practices in our Privacy Policy."
    },
    {
      question: "How accurate is JudicioBot's information?",
      answer: "JudicioBot is trained on official legal texts, statutes, and case law, and is regularly updated to reflect changes in legislation. While we strive for high accuracy, legal interpretations can vary, and laws evolve over time. Always verify critical information, especially for complex situations. We clearly indicate when information was last updated and include references to sources where applicable."
    },
    {
      question: "Which languages does JudicioBot support?",
      answer: "Currently, JudicioBot supports English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and Urdu. We're continuously working to add more Indian languages to make legal information accessible to a wider audience regardless of language preferences."
    },
    {
      question: "How does JudicioBot stay updated with changing laws?",
      answer: "Our legal team works with AI specialists to regularly update JudicioBot's knowledge base with new legislation, amendments, and significant court judgments. We monitor legal developments across various domains and incorporate these changes into our system. This ensures that the information provided is current and reflective of the latest legal positions."
    }
  ];

  return (
    <section id="faq" className="bg-judicio-lavender/10 py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about JudicioBot</p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-judicio-lavender/30 rounded-lg mb-4 overflow-hidden bg-white shadow-soft">
                <AccordionTrigger className="px-6 py-4 hover:bg-judicio-lavender/5 text-left font-medium font-playfair">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your question here? Reach out to us directly.
          </p>
          <a 
            href="#contact" 
            className="text-judicio-pink font-medium hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
