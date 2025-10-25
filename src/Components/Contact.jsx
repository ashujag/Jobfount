import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactUs = () => {
  const [formData1, setFormData1] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors1, setErrors1] = useState({});
  const [successMessage1, setSuccessMessage1] = useState('');

  const [formData2, setFormData2] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors2, setErrors2] = useState({});
  const [successMessage2, setSuccessMessage2] = useState('');

  const [mapView, setMapView] = useState('map');

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData1.name) newErrors.name = 'Name is required';
    if (!formData1.email) newErrors.email = 'Email is required';
    if (!formData1.phone) newErrors.phone = 'Phone is required';
    if (!formData1.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors1(newErrors);
      setSuccessMessage1('');
    } else {
      setErrors1({});
      setSuccessMessage1('Form 1 submitted successfully!');
      console.log('Form 1 submitted:', formData1);
      // Here you would typically send the data to a server
      // For now, we'll just clear the form
      setFormData1({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData2.name) newErrors.name = 'Name is required';
    if (!formData2.email) newErrors.email = 'Email is required';
    if (!formData2.phone) newErrors.phone = 'Phone is required';
    if (!formData2.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors2(newErrors);
      setSuccessMessage2('');
    } else {
      setErrors2({});
      setSuccessMessage2('Form 2 submitted successfully!');
      console.log('Form 2 submitted:', formData2);
      // Here you would typically send the data to a server
      // For now, we'll just clear the form
      setFormData2({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F5] via-[#D4E9EA] to-[#C0DEDE] relative overflow-hidden">
      {/* Decorative Phone Elements with brand colors */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-48 sm:h-72 md:h-96 opacity-70">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <ellipse cx="150" cy="60" rx="50" ry="50" fill="#1F6367" opacity="0.8"/>
          <circle cx="150" cy="60" r="25" fill="#1F6367" opacity="0.6"/>
          <circle cx="150" cy="60" r="15" fill="#E63946" opacity="0.4"/>
          <circle cx="150" cy="60" r="8" fill="#E63946" opacity="0.3"/>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-48 sm:h-72 md:h-96 opacity-70">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <ellipse cx="150" cy="340" rx="50" ry="50" fill="#1F6367" opacity="0.8"/>
          <circle cx="150" cy="340" r="25" fill="#1F6367" opacity="0.6"/>
          <circle cx="150" cy="340" r="15" fill="#E63946" opacity="0.4"/>
          <circle cx="150" cy="340" r="8" fill="#E63946" opacity="0.3"/>
        </svg>
      </div>

      {/* Phone Cord - Hidden on mobile */}
      <div className="hidden md:block absolute right-32 top-32 bottom-32">
        <svg width="100" height="100%" className="w-full h-full">
          <path
            d="M 50 0 Q 30 50, 50 100 T 50 200 T 50 300 T 50 400 T 50 500"
            stroke="#1F6367"
            strokeWidth="8"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F6367] mb-2 sm:mb-3 tracking-wide">CONTACT US</h1>
          <p className="text-gray-700 text-base sm:text-lg italic">Over the phone or online</p>
        </div>

        {/* Main Content Grid */}
        <div id="contact-section" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 items-start">
          {/* Left Section */}
          <div className="flex flex-col h-full">
            {/* Contact Info */}
            <div className="bg-transparent mb-6 sm:mb-8 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-[#1F6367]">
                <div className="bg-[#1F6367] p-1.5 sm:p-2 rounded-lg">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium break-all">info@Jobfount.in</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-[#1F6367]">
                <div className="bg-[#E63946] p-1.5 sm:p-2 rounded-lg">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium">9941181284</span>
              </div>
            </div>

            {/* Address */}
            <div className="mb-6 sm:mb-8 bg-white bg-opacity-60 backdrop-blur-sm p-3 sm:p-4 rounded-lg border-l-4 border-[#1F6367]">
              <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
                No 524, CTH Road<br />
                Pattabiram, Chennai 600072
              </p>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#1F6367] flex-grow h-64 sm:h-80 lg:h-auto lg:min-h-[400px]">
              <div className="flex border-b-2 border-[#1F6367]">
                <button
                  onClick={() => setMapView('map')}
                  className={`flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    mapView === 'map' 
                      ? 'bg-[#1F6367] text-white' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Map
                </button>
                <button
                  onClick={() => setMapView('satellite')}
                  className={`flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    mapView === 'satellite' 
                      ? 'bg-[#1F6367] text-white' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Satellite
                </button>
              </div>
              <div className="h-full bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8837363698786!2d80.16542931482254!3d13.113881990771794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263a2b1e7b5d7%3A0x7e3f3c3c3c3c3c3c!2sPattabiram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Section - Forms */}
          <div className="flex flex-col gap-8 sm:gap-12">
            {/* Form 1 - Job Seekers */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border-t-4 border-[#E63946] w-full">
              <p className="text-[#1F6367] mb-4 sm:mb-6 text-xs sm:text-sm font-semibold">
                If you're talented and looking<br />
                for a job, contact us here:
              </p>
              <form onSubmit={handleSubmit1} className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    value={formData1.name}
                    onChange={(e) => {
                      setFormData1({...formData1, name: e.target.value});
                      setErrors1({...errors1, name: ''});
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${errors1.name ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#1F6367] focus:ring-2 focus:ring-[#1F6367] focus:ring-opacity-20`}
                  />
                  {errors1.name && <p className="text-red-500 text-xs mt-1">{errors1.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={formData1.email}
                    onChange={(e) => {
                      setFormData1({...formData1, email: e.target.value});
                      setErrors1({...errors1, email: ''});
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${errors1.email ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#1F6367] focus:ring-2 focus:ring-[#1F6367] focus:ring-opacity-20`}
                  />
                  {errors1.email && <p className="text-red-500 text-xs mt-1">{errors1.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Enter your Phone"
                    value={formData1.phone}
                    onChange={(e) => {
                      setFormData1({...formData1, phone: e.target.value});
                      setErrors1({...errors1, phone: ''});
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${errors1.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#1F6367] focus:ring-2 focus:ring-[#1F6367] focus:ring-opacity-20`}
                  />
                  {errors1.phone && <p className="text-red-500 text-xs mt-1">{errors1.phone}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Enter your Message"
                    value={formData1.message}
                    onChange={(e) => {
                      setFormData1({...formData1, message: e.target.value});
                      setErrors1({...errors1, message: ''});
                    }}
                    rows="4"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${errors1.message ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#1F6367] focus:ring-2 focus:ring-[#1F6367] focus:ring-opacity-20 resize-none`}
                  ></textarea>
                  {errors1.message && <p className="text-red-500 text-xs mt-1">{errors1.message}</p>}
                </div>
                {successMessage1 && <p className="text-green-600 text-sm mt-2">{successMessage1}</p>}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#E63946] to-[#d62835] hover:from-[#d62835] hover:to-[#c61729] text-white rounded-lg text-xs sm:text-sm font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Form 2 - Employers */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border-t-4 border-[#1F6367] w-full">
              <p className="text-[#1F6367] mb-4 sm:mb-6 text-xs sm:text-sm font-semibold">
                If you're looking for talent, contact<br />
                us here:
              </p>
              <form onSubmit={handleSubmit2} className="space-y-3 sm:space-y-4">
                {/* Mobile: Stack all fields vertically */}
                <div className="block sm:hidden space-y-3">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    value={formData2.name}
                    onChange={(e) => {
                      setFormData2({...formData2, name: e.target.value});
                      setErrors2({...errors2, name: ''});
                    }}
                    className={`w-full px-3 py-2 bg-white border-2 ${errors2.name ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-xs focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-20`}
                  />
                  {errors2.name && <p className="text-red-500 text-xs mt-1">{errors2.name}</p>}
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={formData2.email}
                    onChange={(e) => {
                      setFormData2({...formData2, email: e.target.value});
                      setErrors2({...errors2, email: ''});
                    }}
                    className={`w-full px-3 py-2 bg-white border-2 ${errors2.email ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-xs focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-20`}
                  />
                  {errors2.email && <p className="text-red-500 text-xs mt-1">{errors2.email}</p>}
                  <input
                    type="tel"
                    placeholder="Enter your Phone"
                    value={formData2.phone}
                    onChange={(e) => {
                      setFormData2({...formData2, phone: e.target.value});
                      setErrors2({...errors2, phone: ''});
                    }}
                    className={`w-full px-3 py-2 bg-white border-2 ${errors2.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-xs focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-20`}
                  />
                  {errors2.phone && <p className="text-red-500 text-xs mt-1">{errors2.phone}</p>}
                  <textarea
                    placeholder="Enter your Message"
                    value={formData2.message}
                    onChange={(e) => {
                      setFormData2({...formData2, message: e.target.value});
                      setErrors2({...errors2, message: ''});
                    }}
                    rows="4"
                    className={`w-full px-3 py-2 bg-white border-2 ${errors2.message ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-xs focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-20 resize-none`}
                  ></textarea>
                  {errors2.message && <p className="text-red-500 text-xs mt-1">{errors2.message}</p>}
                  {successMessage2 && <p className="text-green-600 text-sm mt-2">{successMessage2}</p>}
                  <button
                    type="submit"
                    className="w-full px-6 py-2.5 bg-gradient-to-r from-[#1F6367] to-[#164d50] hover:from-[#164d50] hover:to-[#0d3436] text-white rounded-lg text-xs font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    Submit
                  </button>
                </div>

                {/* Desktop: Stack all fields vertically */}
                <div className="hidden sm:block space-y-3 sm:space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      value={formData2.name}
                      onChange={(e) => {
                        setFormData2({...formData2, name: e.target.value});
                        setErrors2({...errors2, name: ''});
                      }}
                      className={`w-full px-4 py-3 bg-white border-2 ${errors2.name ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-20`}
                    />
                    {errors2.name && <p className="text-red-500 text-xs mt-1">{errors2.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      value={formData2.email}
                      onChange={(e) => {
                        setFormData2({...formData2, email: e.target.value});
                        setErrors2({...errors2, email: ''});
                      }}
                      className={`w-full px-4 py-3 bg-white border-2 ${errors2.email ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-20`}
                    />
                    {errors2.email && <p className="text-red-500 text-xs mt-1">{errors2.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Enter your Phone"
                      value={formData2.phone}
                      onChange={(e) => {
                        setFormData2({...formData2, phone: e.target.value});
                        setErrors2({...errors2, phone: ''});
                      }}
                      className={`w-full px-4 py-3 bg-white border-2 ${errors2.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-20`}
                    />
                    {errors2.phone && <p className="text-red-500 text-xs mt-1">{errors2.phone}</p>}
                  </div>
                  <div>
                    <textarea
                      placeholder="Enter your Message"
                      value={formData2.message}
                      onChange={(e) => {
                        setFormData2({...formData2, message: e.target.value});
                        setErrors2({...errors2, message: ''});
                      }}
                      rows="4"
                      className={`w-full px-4 py-3 bg-white border-2 ${errors2.message ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-20 resize-none`}
                    ></textarea>
                    {errors2.message && <p className="text-red-500 text-xs mt-1">{errors2.message}</p>}
                  </div>
                  {successMessage2 && <p className="text-green-600 text-sm mt-2">{successMessage2}</p>}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#1F6367] to-[#164d50] hover:from-[#164d50] hover:to-[#0d3436] text-white rounded-lg text-sm font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
