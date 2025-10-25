import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Calendar, Building, Share2, Bookmark, ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';

const JobDetailsPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const jobData = {
    title: 'Senior Software Engineer',
    company: 'TechVision Solutions',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹18-25 LPA',
    experience: '4-7 years',
    posted: '2 days ago',
    applicants: 47,
    logo: 'bg-gradient-to-br from-[#1F6367] to-[#164d50]'
  };

  const skills = [
    'React.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 
    'Docker', 'Kubernetes', 'GraphQL', 'Redis', 'CI/CD'
  ];

  const benefits = [
    'Health Insurance',
    'Work from Home',
    'Learning Budget',
    'Flexible Hours',
    'Team Outings',
    'Performance Bonus'
  ];

  const similarJobs = [
    { title: 'Full Stack Developer', company: 'InnovateCorp', salary: '₹15-22 LPA', location: 'Hyderabad', type: 'Full-time' },
    { title: 'Backend Engineer', company: 'DataFlow Inc', salary: '₹16-24 LPA', location: 'Mumbai', type: 'Remote' },
    { title: 'DevOps Engineer', company: 'CloudScale', salary: '₹20-28 LPA', location: 'Pune', type: 'Full-time' },
    { title: 'React Native Developer', company: 'MobileFirst Tech', salary: '₹14-20 LPA', location: 'Chennai', type: 'Hybrid' },
    { title: 'Data Engineer', company: 'AnalyticsPro', salary: '₹18-26 LPA', location: 'Bangalore', type: 'Full-time' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#1F6367] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Back to search</span>
            </button>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bookmark 
                  className={`w-5 h-5 ${isBookmarked ? 'fill-[#E63946] text-[#E63946]' : 'text-gray-600'}`} 
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className={`${jobData.logo} w-20 h-20 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    <Building className="w-10 h-10" />
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {jobData.title}
                    </h1>
                    <p className="text-lg text-gray-700 mb-4">{jobData.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#1F6367]" />
                        {jobData.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-[#1F6367]" />
                        {jobData.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-[#1F6367]" />
                        {jobData.salary}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-[#1F6367]" />
                        {jobData.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      Posted {jobData.posted}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {jobData.applicants} applicants
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white px-6 sm:px-8 py-4 border-t border-gray-100">
                <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#E63946] to-[#d62835] hover:from-[#d62835] hover:to-[#c61729] text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  {['description', 'requirements', 'company'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${
                        activeTab === tab 
                          ? 'text-[#1F6367]' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1F6367]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {activeTab === 'description' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About the role</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We're looking for a talented Senior Software Engineer to join our engineering team. You'll work on building scalable web applications, collaborating with cross-functional teams, and mentoring junior developers. This role offers the opportunity to work with cutting-edge technologies and make a significant impact on our product development.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {[
                          'Design and develop scalable microservices architecture',
                          'Lead technical discussions and code reviews',
                          'Collaborate with product managers and designers',
                          'Mentor junior team members and promote best practices',
                          'Optimize application performance and security'
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-[#1F6367] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-[#1F6367] hover:text-white transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualifications</h3>
                      <ul className="space-y-2">
                        {[
                          "Bachelor's degree in Computer Science or related field",
                          '4+ years of experience in software development',
                          'Strong understanding of RESTful APIs and microservices',
                          'Experience with cloud platforms (AWS/Azure/GCP)',
                          'Excellent problem-solving and communication skills'
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E63946] flex-shrink-0 mt-2"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'company' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About TechVision Solutions</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        TechVision Solutions is a leading technology company specializing in enterprise software solutions. With over 500 employees across multiple offices, we're committed to innovation and creating products that make a difference.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Our culture emphasizes collaboration, continuous learning, and work-life balance. We believe in empowering our team members to do their best work.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Perks & Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-[#1F6367]"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Apply Card */}
            <div className="bg-gradient-to-br from-[#1F6367] to-[#164d50] rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Quick Apply</h3>
              <p className="text-sm opacity-90 mb-4">
                Apply with your Jobfount profile in just one click
              </p>
              <button className="w-full bg-white text-[#1F6367] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply with Profile
              </button>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                {similarJobs.map((job, idx) => (
                  <div 
                    key={idx}
                    className="pb-4 border-b border-gray-100 last:border-0 last:pb-0 hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <h4 className="font-medium text-gray-900 mb-1">{job.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                    <p className="text-sm font-medium text-[#E63946]">{job.salary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hiring Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">High Response Rate</p>
                    <p className="text-xs text-gray-600 mt-0.5">Typically responds within 2 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Growing Team</p>
                    <p className="text-xs text-gray-600 mt-0.5">Hired 3 people recently</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;