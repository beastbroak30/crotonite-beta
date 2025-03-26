import { useState } from 'react';

export const JoinUs = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) {
      setStatus({ type: 'error', message: 'Please enter your name and email address' });
      return;
    }
    try {
      // Here you would typically make an API call to your backend
      setStatus({ type: 'success', message: 'Thank you for subscribing!' });
      setEmail('');
      setName('');
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen text-white p-8 relative overflow-hidden" style={{ backgroundImage: "url('/image.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e]/80 via-[#2b0b3a]/80 to-[#4b0082]/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] backdrop-blur-[100px]"></div>
      
      <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-8 animate-fade-in">
          Join Our Development Community
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-xl mx-auto mb-8 animate-fade-in-up">
          Be part of our innovative project! Collaborate with fellow developers, share insights, and help shape the future of our technology.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto space-y-4 animate-fade-in-up">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-3 text-base bg-black/30 backdrop-blur-md rounded-xl border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-black/40"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 text-base bg-black/30 backdrop-blur-md rounded-xl border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-black/40"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Join Project
          </button>
        </form>

        {status.message && (
          <div className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-400'} animate-fade-in`}>
            {status.message}
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto animate-fade-in-up">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-black/40 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] group animate-float">
            <div className="text-blue-400 text-3xl mb-4 font-semibold group-hover:text-blue-300 transition-colors duration-300 transform group-hover:translate-y-[-2px]">
              Dev Updates
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">Development Access</h3>
            <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">Get direct access to our development process-live stream-product builds & lot more.</p>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-black/40 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] group animate-float-delayed">
            <div className="text-blue-400 text-3xl mb-4 font-semibold group-hover:text-blue-300 transition-colors duration-300 transform group-hover:translate-y-[-2px]">
              Contribute
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">Project Collaboration</h3>
            <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">Participate in product reviews and feature discussions</p>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-black/40 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] group animate-float-more-delayed sm:col-span-2 lg:col-span-2">
            <div className="text-blue-400 text-3xl mb-4 font-semibold group-hover:text-blue-300 transition-colors duration-300 transform group-hover:translate-y-[-2px]">
              Community
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">Developer Network</h3>
            <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">Connect with us in  development  and share your knowledge</p>
          </div>
        </div>
      </div> 
    </div>
  );
};
