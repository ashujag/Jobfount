import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobfountLogo from '../assets/Jobfount.jpeg';
import { Menu, X } from 'lucide-react';

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 0.6,
  tag = 'h1'
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !ref.current) return;

    const chars = ref.current.querySelectorAll('.split-char');
    chars.forEach((char, index) => {
      setTimeout(() => {
        char.style.opacity = '1';
        char.style.transform = 'translateY(0)';
      }, index * delay);
    });
  }, [isVisible, delay]);

  const renderChars = () => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="split-char inline-block"
        style={{
          opacity: 0,
          transform: 'translateY(40px)',
          transition: `all ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
          willChange: 'transform, opacity'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const Tag = tag;
  return (
    <Tag ref={ref} className={className}>
      {renderChars()}
    </Tag>
  );
};

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All categories');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleFindJobsClick = () => {
    navigate('/findjobs');
    setMobileMenuOpen(false);
  };

  const handleHireTalentClick = () => {
    navigate('/hiretalents');
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
      <header className="bg-white shadow-sm animate-[fadeIn_0.6s_ease-out] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center animate-[slideRight_0.8s_ease-out]">
              <a href="#" className="flex items-center">
                <img src={JobfountLogo} alt="Jobfount Logo" className="h-20 w-auto" />
              </a>
            </div>

            <nav className="hidden md:flex space-x-1 animate-[fadeIn_1s_ease-out_0.3s_both]">
              <a href="#hero-section" className="text-[#1F6367] bg-[#1F6367]/5 hover:bg-[#1F6367]/10 px-4 py-2 rounded-lg font-medium transition-all duration-300">
                Home
              </a>
              <a href="/findjobs" className="text-gray-600 hover:text-[#1F6367] hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300" onClick={handleFindJobsClick}>
                Find Jobs
              </a>
              <a href="/hiretalents" className="text-gray-600 hover:text-[#1F6367] hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300" onClick={handleHireTalentClick}>
                Hire Talents
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1F6367] hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300">
                Contact Us
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden sm:block bg-[#E63946] hover:bg-[#d62835] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105 animate-[slideLeft_0.8s_ease-out] text-sm sm:text-base">
                Post a Job
              </button>
              
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-[#1F6367] hover:bg-gray-50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 animate-[slideDown_0.3s_ease-out]">
              <nav className="flex flex-col space-y-2">
                <a href="#hero-section" className="text-[#1F6367] bg-[#1F6367]/5 hover:bg-[#1F6367]/10 px-4 py-3 rounded-lg font-medium transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1F6367] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all duration-300" onClick={handleFindJobsClick}>
                  Find Jobs
                </a>
                <a href="/hiretalents" className="text-gray-600 hover:text-[#1F6367] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all duration-300" onClick={handleHireTalentClick}>
                  Hire Talents
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1F6367] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </a>
                <button className="bg-[#E63946] hover:bg-[#d62835] text-white px-4 py-3 rounded-lg font-semibold shadow-lg w-full text-left">
                  Post a Job
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section id="hero-section" className="bg-gradient-to-b from-blue-50 via-purple-50/30 to-orange-100 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 animate-[fadeIn_0.8s_ease-out]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="mb-6 sm:mb-8 text-center">
              <SplitText
                text="Unlocking Talent."
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight px-2"
                delay={50}
                duration={0.6}
                tag="h1"
              />
              <SplitText
                text="Illuminating Growth."
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight px-2"
                delay={50}
                duration={0.6}
                tag="h1"
              />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto mb-8 sm:mb-10 leading-relaxed text-center animate-[fadeIn_1s_ease-out_0.8s_both] px-4">
              Jobfount combines recruitment expertise with data analytics — helping people find jobs, helping businesses hire smarter, and now helping professionals achieve international licensing success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 lg:mb-12 px-4">
              <button 
                className="bg-[#E63946] hover:bg-[#d62835] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1s_both] text-sm sm:text-base" 
                onClick={handleFindJobsClick}
              >
                Find Jobs
              </button>
              <button 
                className="bg-[#1F6367] hover:bg-[#164d50] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1.1s_both] text-sm sm:text-base" 
                onClick={handleHireTalentClick}
              >
                Hire Talent
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1.2s_both] text-sm sm:text-base">
                Licensing Support
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-2 sm:p-3 flex flex-col md:flex-row gap-2 sm:gap-3 animate-[fadeIn_1s_ease-out_1.3s_both] border border-gray-100">
            <input
              type="text"
              placeholder="Job title or keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6367] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6367] focus:border-transparent bg-white transition-all duration-300 text-gray-700 cursor-pointer text-sm sm:text-base"
            >
              <option>All categories</option>
              <option>Software</option>
              <option>Healthcare</option>
              <option>Marketing</option>
              <option>Production</option>
            </select>
            <button className="bg-[#E63946] hover:bg-[#d62835] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}} />
    </div>
  );
}
