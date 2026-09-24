import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Philosophy = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-white font-['Inter'] relative" id="philosophy">
      {/* Subtle Mountain Background as requested in PDF */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-bottom"
        style={{ backgroundImage: "url('/images/philosophy_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left Title Section */}
          <div className="flex-shrink-0 md:w-5/12 md:pr-8">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-[14px] md:text-[16px] font-bold text-gray-400">02</span>
              <div className="h-[1px] w-8 bg-gray-300"></div>
            </div>
            
            <h2 className="text-[52px] md:text-[64px] font-bold text-[#0A1B3F] mb-2 tracking-tight leading-[1.1]">
              {language === 'en' ? 'Our Philosophy' : '我们的理念'}
            </h2>
            {language === 'cn' && <h3 className="text-[24px] md:text-[28px] font-light text-gray-500 tracking-wide">OUR PHILOSOPHY</h3>}
          </div>

          {/* Vertical Divider (Hidden on small screens, shown on md and up) */}
          <div className="hidden md:block w-[2px] h-[120px] bg-[#F1A424]/80 mx-4"></div>
          
          {/* Mobile horizontal divider */}
          <div className="block md:hidden w-1/3 h-[2px] bg-[#F1A424]/80 my-8"></div>

          {/* Right Text Section */}
          <div className="flex-1 md:pl-8">
            <p className="text-[18px] md:text-[22px] font-medium text-[#0A1B3F] mb-4 max-w-2xl leading-[1.6]">
              {language === 'en' 
                ? 'We connect people, empower businesses, build lasting relationships and create new opportunities across China and Eurasia.'
                : '以连接为起点，与伙伴共创更大的商业价值。'
              }
            </p>
            {language === 'cn' && (
              <p className="text-[16px] md:text-[18px] text-gray-500 max-w-2xl leading-[1.7]">
                We connect people, empower businesses, build lasting relationships<br/>
                and create new opportunities across China and Eurasia.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          
          {/* C - Connect */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-4">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[64px] md:text-[80px] font-bold text-[#F1A424] leading-none">C</span>
              <div className="text-left mt-2">
                <div className="text-[20px] md:text-[24px] font-bold text-[#0A1B3F]">{language === 'en' ? 'CONNECT' : '连接'}</div>
                {language === 'cn' && <div className="text-[14px] md:text-[16px] text-gray-500 uppercase tracking-widest mt-0.5">CONNECT</div>}
              </div>
            </div>
            <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
              <img src="/images/1-1.jpeg" alt="Connect" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[18px] md:text-[20px] text-[#0A1B3F] mb-2">{language === 'en' ? 'Connect with the right people' : '连接关键人物与资源'}</h4>
            {language === 'cn' && <p className="text-[14px] md:text-[16px] text-gray-500 leading-[1.5]">Connect with<br/>the right people</p>}
          </div>

          <div className="hidden md:block text-gray-300">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* E - Empower */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-4 mt-12 md:mt-0">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[64px] md:text-[80px] font-bold text-[#F1A424] leading-none">E</span>
              <div className="text-left mt-2">
                <div className="text-[20px] md:text-[24px] font-bold text-[#0A1B3F]">{language === 'en' ? 'EMPOWER' : '赋能'}</div>
                {language === 'cn' && <div className="text-[14px] md:text-[16px] text-gray-500 uppercase tracking-widest mt-0.5">EMPOWER</div>}
              </div>
            </div>
            <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
              <img src="/images/1-2.jpeg" alt="Empower" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[18px] md:text-[20px] text-[#0A1B3F] mb-2">{language === 'en' ? 'Empower your business with local access' : '获取市场洞察与支持'}</h4>
            {language === 'cn' && <p className="text-[14px] md:text-[16px] text-gray-500 leading-[1.5]">Empower your business<br/>with local access</p>}
          </div>

          <div className="hidden md:block text-gray-300">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* B - Build */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-4 mt-12 md:mt-0">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[64px] md:text-[80px] font-bold text-[#F1A424] leading-none">B</span>
              <div className="text-left mt-2">
                <div className="text-[20px] md:text-[24px] font-bold text-[#0A1B3F]">{language === 'en' ? 'BUILD' : '共建'}</div>
                {language === 'cn' && <div className="text-[14px] md:text-[16px] text-gray-500 uppercase tracking-widest mt-0.5">BUILD</div>}
              </div>
            </div>
            <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
              <img src="/images/1-3.jpeg" alt="Build" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[18px] md:text-[20px] text-[#0A1B3F] mb-2">{language === 'en' ? 'Build long-term relationships' : '建立长期合作关系'}</h4>
            {language === 'cn' && <p className="text-[14px] md:text-[16px] text-gray-500 leading-[1.5]">Build long-term<br/>relationships</p>}
          </div>

          <div className="hidden md:block text-gray-300">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* C - Create */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-4 mt-12 md:mt-0">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[64px] md:text-[80px] font-bold text-[#F1A424] leading-none">C</span>
              <div className="text-left mt-2">
                <div className="text-[20px] md:text-[24px] font-bold text-[#0A1B3F]">{language === 'en' ? 'CREATE' : '共创'}</div>
                {language === 'cn' && <div className="text-[14px] md:text-[16px] text-gray-500 uppercase tracking-widest mt-0.5">CREATE</div>}
              </div>
            </div>
            <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
              <img src="/images/1-4.jpeg" alt="Create" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[18px] md:text-[20px] text-[#0A1B3F] mb-2">{language === 'en' ? 'Create new opportunities together' : '共同创造商业机会'}</h4>
            {language === 'cn' && <p className="text-[14px] md:text-[16px] text-gray-500 leading-[1.5]">Create new<br/>opportunities together</p>}
          </div>

        </div>

        {/* Footer line */}
        <div className="text-center mt-24">
          <p className="text-[14px] md:text-[18px] tracking-[0.2em] text-[#0A1B3F] font-bold opacity-80 uppercase">
            WE CONNECT. EMPOWER. BUILD. CREATE.
          </p>
          {language === 'cn' && (
            <p className="text-[16px] md:text-[20px] tracking-[0.1em] text-gray-500 mt-3">
              连接中国与欧亚 · 共创更广阔的未来
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
