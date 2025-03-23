import React, { useState, useEffect } from 'react';
import { Mail, Building, User, MessageSquare, DollarSign, Send, Banknote, Users, Code, CheckCircle, AlertCircle, Package, Atom } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    contributionType: 'financial'
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null as string | null
  });
  
  useEffect(() => {
    // Get product and type from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const type = urlParams.get('type');
    
    if (product) {
      setFormData(prev => ({
        ...prev,
        message: `I want to enquire about the ${product}.`
      }));
    }
    
    // Set contribution type if specified in URL
    if (type && ['financial', 'research', 'technical', 'product'].includes(type)) {
      setFormData(prev => ({
        ...prev,
        contributionType: type
      }));
    }
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSubmitStatus({ loading: true, success: false, error: null });
      
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, 'contact_submissions'), {
        name: formData.name,
        email: formData.email,
        organization: formData.organization || null,
        message: formData.message,
        contribution_type: formData.contributionType,
        submitted_at: new Date().toISOString()
      });
      
      console.log('Form submitted successfully with ID:', docRef.id);
      setSubmitStatus({ loading: false, success: true, error: null });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
        contributionType: 'financial'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: error.message || 'Failed to submit form. Please try again.'
      });
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleContributionTypeChange = (type: string) => {
    setFormData({
      ...formData,
      contributionType: type,
    });
  };
  
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-hidden py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] opacity-90"></div>

      {/* Rest of the contact form */}
      <div className="relative hero-gradient overflow-hidden pt-10 min-h-screen">
        {/* Mobile Logo Section */}
        <div className="md:hidden flex items-center justify-center pt-2 pb-4 px-6">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
              >
                <path
                  d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">Crotonite</span>
          </div>
        </div>
        {/* Enhanced Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <div className="absolute h-96 w-96 rounded-full bg-blue-500/10 animate-pulse" 
                     style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
            <div className="absolute h-64 w-64 rounded-full bg-blue-600/5 animate-pulse delay-300" 
                     style={{ top: '30%', left: '30%' }} />
            <div className="absolute h-80 w-80 rounded-full bg-indigo-500/5 animate-pulse delay-700" 
                     style={{ top: '20%', left: '70%' }} />
          </div>
        </div>
  
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute h-20 w-20 rounded-lg bg-blue-500/10 floating-element"
                   style={{ top: '15%', left: '15%', transform: 'rotate(15deg)', animationDelay: '0.5s' }} />
          <div className="absolute h-16 w-16 rounded-lg bg-blue-400/10 floating-element"
                   style={{ top: '60%', left: '80%', transform: 'rotate(-10deg)', animationDelay: '1.5s' }} />
          <div className="absolute h-24 w-24 rounded-lg bg-indigo-500/10 floating-element"
                   style={{ top: '70%', left: '25%', transform: 'rotate(30deg)', animationDelay: '1s' }} />
        </div>
  
        <div className="relative max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight drop-shadow-lg mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our project or want to contribute? We'd love to hear from you. You can also mail us below
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-xl">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                
                <div>
                  <div className="relative group">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                      placeholder="Your Name"
                    />
                    <User className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
  
                <div>
                  <div className="relative group">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                      placeholder="Email Address"
                    />
                    <Mail className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
  
                <div>
                  <div className="relative group">
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                      placeholder="Organization (Optional)"
                    />
                    <Building className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
  
                <div>
                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                      placeholder="Your Message"
                    />
                    <MessageSquare className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
  
                <div>
                  <label className="block text-white mb-2">Contribution Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleContributionTypeChange('financial')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                        formData.contributionType === 'financial'
                          ? 'bg-blue-600/50 border-2 border-blue-400/70 shadow-lg shadow-blue-500/20 scale-105'
                          : 'bg-black/20 border border-white/10 hover:bg-black/30 hover:scale-105'
                      }`}
                    >
                      <Banknote className={`h-6 w-6 mb-1 transition-colors ${formData.contributionType === 'financial' ? 'text-white' : 'text-gray-400'}`} />
                      <span className={`text-sm transition-colors ${formData.contributionType === 'financial' ? 'text-white font-medium' : 'text-gray-400'}`}>Financial</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handleContributionTypeChange('research')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                        formData.contributionType === 'research'
                          ? 'bg-blue-600/50 border-2 border-blue-400/70 shadow-lg shadow-blue-500/20 scale-105'
                          : 'bg-black/20 border border-white/10 hover:bg-black/30 hover:scale-105'
                      }`}
                    >
                      <Users className={`h-6 w-6 mb-1 transition-colors ${formData.contributionType === 'research' ? 'text-white' : 'text-gray-400'}`} />
                      <span className={`text-sm transition-colors ${formData.contributionType === 'research' ? 'text-white font-medium' : 'text-gray-400'}`}>Research</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handleContributionTypeChange('technical')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                        formData.contributionType === 'technical'
                          ? 'bg-blue-600/50 border-2 border-blue-400/70 shadow-lg shadow-blue-500/20 scale-105'
                          : 'bg-black/20 border border-white/10 hover:bg-black/30 hover:scale-105'
                      }`}
                    >
                      <Code className={`h-6 w-6 mb-1 transition-colors ${formData.contributionType === 'technical' ? 'text-white' : 'text-gray-400'}`} />
                      <span className={`text-sm transition-colors ${formData.contributionType === 'technical' ? 'text-white font-medium' : 'text-gray-400'}`}>Technical</span>
                    </button>
  
                    <button
                      type="button"
                      onClick={() => handleContributionTypeChange('product')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                        formData.contributionType === 'product'
                          ? 'bg-blue-600/50 border-2 border-blue-400/70 shadow-lg shadow-blue-500/20 scale-105'
                          : 'bg-black/20 border border-white/10 hover:bg-black/30 hover:scale-105'
                      }`}
                    >
                      <Package className={`h-6 w-6 mb-1 transition-colors ${formData.contributionType === 'product' ? 'text-white' : 'text-gray-400'}`} />
                      <span className={`text-sm transition-colors ${formData.contributionType === 'product' ? 'text-white font-medium' : 'text-gray-400'}`}>For Product</span>
                    </button>
                  </div>
                </div>
  
                <button
                  type="submit"
                  disabled={submitStatus.loading}
                  className={`w-full ${
                    submitStatus.loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                  } text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20`}
                >
                  <span>{submitStatus.loading ? 'Sending...' : 'Send Message'}</span>
                  <Send className="h-5 w-5" />
                </button>
                
                <div className="space-y-4">
                  {submitStatus.success && (
                    <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center text-green-400 animate-fadeIn">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}
                  
                  {submitStatus.error && (
                    <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center text-red-400 animate-fadeIn">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span>{submitStatus.error}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
  
            {/* Contribution Section */}
            <div className="space-y-8">
              <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 text-blue-400 mr-2" />
                  Ways to Contribute
                </h2>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg">
                    <h3 className="text-lg font-semibold text-blue-400">Financial Support</h3>
                    <p className="text-gray-300 mt-2">
                      Support our research and development through direct financial contributions.
                      Choose from various tiers of support with different benefits.
                    </p>
                  </div>
  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg">
                    <h3 className="text-lg font-semibold text-blue-400">Research Collaboration</h3>
                    <p className="text-gray-300 mt-2">
                      Are you a researcher or institution interested in collaborating?
                      We're always open to partnerships that advance particle physics.
                    </p>
                  </div>
  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg">
                    <h3 className="text-lg font-semibold text-blue-400">Technical Expertise</h3>
                    <p className="text-gray-300 mt-2">
                      Share your technical expertise in accelerator physics, engineering,
                      or related fields to help advance our mission.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 text-blue-400 mr-2" />
                  Fund Us Here
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.indiegogo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-4 bg-[#EB1478]/10 hover:bg-[#EB1478]/20 border border-[#EB1478]/30 hover:border-[#EB1478]/50 rounded-xl transition-all duration-300 group hover:scale-105"
                  >
                    <span className="text-[#EB1478] font-bold text-lg group-hover:scale-105 transition-transform">
                      Indiegogo
                    </span>
                  </a>
                  <a
                    href="https://www.kickstarter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-4 bg-[#05CE78]/10 hover:bg-[#05CE78]/20 border border-[#05CE78]/30 hover:border-[#05CE78]/50 rounded-xl transition-all duration-300 group hover:scale-105"
                  >
                    <span className="text-[#05CE78] font-bold text-lg group-hover:scale-105 transition-transform">
                      Kickstarter
                    </span>
                  </a>
                </div>
              </div>
  
              <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-blue-400">Email:</strong>
                    <br />
                    akantarip30@gmail.com
                  </p>
                  <p>
                    <strong className="text-blue-400">Location:</strong>
                    <br />
                    RRCAT
                    <br />
                    Indore, Madhya Pradesh
                    <br />
                    India, Central India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#0a0a0f" fillOpacity="0.8"></path>
        </svg>
      </div>
    </div>
  );
}