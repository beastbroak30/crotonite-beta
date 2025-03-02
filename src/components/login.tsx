import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, ArrowLeft, Github } from 'lucide-react';
import { NavBar } from './NavBar';
import { CursorGradient } from './CursorGradient';
import { LoadingScreen } from './LoadingScreen';

interface LoginProps {
  onNavigate?: (to: string) => void;
}

export function Login({ onNavigate }: LoginProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const testimonials = [
    {
      quote: "The future of particle physics is now accessible to everyone. Revolutionary technology at an unbeatable price.",
      author: "Dr. Sarah Chen",
      role: "Research Director at MIT"
    },
    {
      quote: "Crotonite has transformed how we approach particle physics education. Our students now have hands-on experience.",
      author: "Prof. James Miller",
      role: "Physics Department, Stanford"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // TODO: Implement Google OAuth
  };

  const handleGithubLogin = () => {
    console.log('GitHub login clicked');
    // TODO: Implement GitHub OAuth
  };

  return (
    <div className="min-h-screen flex flex-col hero-gradient">
      <CursorGradient 
        colors={['#3b82f6', '#6366f1', '#8b5cf6']} 
        size={800}
        opacity={0.15}
        blur={120}
      />
      <NavBar />

      <div className="flex-1 flex min-h-screen pt-24">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
              <p className="mt-2 text-gray-300">Please enter your credentials</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-5">
                <div>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Email address"
                    />
                    <Mail className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Password"
                    />
                    <Lock className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-black/80 text-green-500 focus:ring-green-500 focus:ring-offset-0 transition-colors duration-200 checked:bg-green-500 checked:border-green-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors duration-200 font-medium"
                >
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#0a0a0f] text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center px-4 py-3 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  onClick={handleGithubLogin}
                  className="flex items-center justify-center px-4 py-3 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <a href="/signup" className="text-blue-400 hover:text-blue-300">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-black/30 backdrop-blur-sm">
          <div className="max-w-md">
            <div className="relative">
              <div className="text-xl text-white italic mb-4">"{testimonials[currentTestimonial].quote}"</div>
              <div className="text-blue-400 font-medium">{testimonials[currentTestimonial].author}</div>
              <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</div>
              
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={() => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}