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
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-[12px] font-bold text-gray-400">02</span>
            <div className="h-[1px] w-6 bg-gray-300"></div>
          </div>
          
          <h2 className="text-[42px] font-bold text-[#0A1B3F] mb-1 tracking-tight">
            {language === 'en' ? 'Our Philosophy' : '我们的理念'}
          </h2>
          {language === 'cn' && <h3 className="text-[20px] font-light text-gray-500 mb-6 tracking-wide">OUR PHILOSOPHY</h3>}
          {language === 'en' && <div className="h-6"></div>}
          
          <p className="text-[15px] font-medium text-[#0A1B3F] mb-2 max-w-2xl">
            {language === 'en' 
              ? 'We connect people, empower businesses, build lasting relationships and create new opportunities across China and Eurasia.'
              : '以连接为起点，与伙伴共创更大的商业价值。'
            }
          </p>
          {language === 'cn' && (
            <p className="text-[13px] text-gray-500 max-w-2xl leading-[1.6]">
              We connect people, empower businesses, build lasting relationships<br/>
              and create new opportunities across China and Eurasia.
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          
          {/* C - Connect */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-4">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[48px] font-bold text-[#F1A424]">C</span>
              <div className="text-left">
                <div className="text-[16px] font-bold text-[#0A1B3F]">{language === 'en' ? 'CONNECT' : '连接'}</div>
                {language === 'cn' && <div className="text-[11px] text-gray-500 uppercase tracking-widest">CONNECT</div>}
              </div>
            </div>
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Connect" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[14px] text-[#0A1B3F] mb-1">{language === 'en' ? 'Connect with the right people' : '连接关键人物与资源'}</h4>
            {language === 'cn' && <p className="text-[12px] text-gray-500 leading-[1.4]">Connect with<br/>the right people</p>}
          </div>

          <div className="hidden md:block text-gray-300">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* E - Empower */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-4 mt-12 md:mt-0">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[48px] font-bold text-[#F1A424]">E</span>
              <div className="text-left">
                <div className="text-[16px] font-bold text-[#0A1B3F]">{language === 'en' ? 'EMPOWER' : '赋能'}</div>
                {language === 'cn' && <div className="text-[11px] text-gray-500 uppercase tracking-widest">EMPOWER</div>}
              </div>
            </div>
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Empower" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[14px] text-[#0A1B3F] mb-1">{language === 'en' ? 'Empower your business with local access' : '获取市场洞察与支持'}</h4>
            {language === 'cn' && <p className="text-[12px] text-gray-500 leading-[1.4]">Empower your business<br/>with local access</p>}
          </div>

          <div className="hidden md:block text-gray-300">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* B - Build */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-4 mt-12 md:mt-0">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[48px] font-bold text-[#F1A424]">B</span>
              <div className="text-left">
                <div className="text-[16px] font-bold text-[#0A1B3F]">{language === 'en' ? 'BUILD' : '共建'}</div>
                {language === 'cn' && <div className="text-[11px] text-gray-500 uppercase tracking-widest">BUILD</div>}
              </div>
            </div>
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
              <img src="https://images.unsplash.com/photo-1541888087428-efb756be368d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Build" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[14px] text-[#0A1B3F] mb-1">{language === 'en' ? 'Build long-term relationships' : '建立长期合作关系'}</h4>
            {language === 'cn' && <p className="text-[12px] text-gray-500 leading-[1.4]">Build long-term<br/>relationships</p>}
          </div>

          <div className="hidden md:block text-gray-300">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* C - Create */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-4 mt-12 md:mt-0">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[48px] font-bold text-[#F1A424]">C</span>
              <div className="text-left">
                <div className="text-[16px] font-bold text-[#0A1B3F]">{language === 'en' ? 'CREATE' : '共创'}</div>
                {language === 'cn' && <div className="text-[11px] text-gray-500 uppercase tracking-widest">CREATE</div>}
              </div>
            </div>
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Create" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[14px] text-[#0A1B3F] mb-1">{language === 'en' ? 'Create new opportunities together' : '共同创造商业机会'}</h4>
            {language === 'cn' && <p className="text-[12px] text-gray-500 leading-[1.4]">Create new<br/>opportunities together</p>}
          </div>

        </div>

        {/* Footer line */}
        <div className="text-center mt-24">
          <p className="text-[11px] tracking-[0.2em] text-[#0A1B3F] font-bold opacity-80 uppercase">
            WE CONNECT. EMPOWER. BUILD. CREATE.
          </p>
          {language === 'cn' && (
            <p className="text-[12px] tracking-[0.1em] text-gray-500 mt-2">
              连接中国与欧亚 · 共创更广阔的未来
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
