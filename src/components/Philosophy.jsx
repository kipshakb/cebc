import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Philosophy = () => {
  const { language } = useLanguage();

  return (
    <section className="relative bg-[#0A1B3F] font-['Inter'] overflow-hidden" id="philosophy">
      
      {/* Full panoramic mountain/city background with blue tint */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/philosophy_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B3F]/85 via-[#0A1B3F]/60 to-[#0A1B3F]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B3F]/95 via-transparent to-[#0A1B3F]/30"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 py-16 md:py-24">
        
        {/* Top Section: Title + Right Panel */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-20">
          
          {/* Left: Title & Mission */}
          <div className="lg:w-7/12 mb-10 lg:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[14px] md:text-[16px] font-bold text-white/50">02</span>
              <div className="h-[2px] w-[30px] bg-[#F1A424]"></div>
            </div>
            
            <h2 className="text-[36px] md:text-[64px] font-bold text-white mb-2 tracking-tight leading-[1.1]">
              {language === 'en' ? 'Our Philosophy' : '我们的理念'}
            </h2>
            {language === 'cn' && <h3 className="text-[20px] md:text-[28px] font-light text-white/60 tracking-wide mb-8">OUR PHILOSOPHY</h3>}
            {language === 'en' && <div className="h-8"></div>}
            
            <p className="text-[16px] md:text-[22px] font-medium text-white/90 mb-4 max-w-2xl leading-[1.6]">
              {language === 'en' 
                ? 'We connect people, empower businesses, build lasting relationships and create new opportunities across China and Eurasia.'
                : '以连接为起点，与伙伴共创更大的商业价值。'
              }
            </p>
            {language === 'cn' && (
              <p className="text-[14px] md:text-[18px] text-white/60 max-w-2xl leading-[1.7]">
                We connect people, empower businesses, build lasting relationships<br/>
                and create new opportunities across China and Eurasia.
              </p>
            )}
          </div>
          
          {/* Right: Decorative Text Panel */}
          <div className="lg:w-4/12 text-left lg:text-right border-l-[3px] lg:border-l-0 lg:border-r-[3px] border-[#F1A424] pl-6 lg:pl-0 lg:pr-6">
            <h3 className="text-[20px] md:text-[28px] font-bold text-white leading-[1.4] mb-4">
              {language === 'en' ? (
                <>FROM CHINA<br/>TO A WIDER EURASIA</>
              ) : (
                <>从中国走向欧亚<br/>共创更广阔的未来</>
              )}
            </h3>
            {language === 'cn' && (
              <p className="text-[12px] md:text-[14px] text-white/50 uppercase tracking-[0.15em] leading-[1.8]">
                FROM CHINA<br/>TO A WIDER EURASIA<br/>A SHARED TOMORROW
              </p>
            )}
            {language === 'en' && (
              <p className="text-[12px] md:text-[14px] text-white/50 uppercase tracking-[0.15em] leading-[1.8]">
                A SHARED TOMORROW
              </p>
            )}
          </div>
        </div>

        {/* CEBC Circles */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-start md:items-center relative gap-y-10">
          
          {/* C - Connect */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-2 md:px-4">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[48px] md:text-[80px] font-bold text-[#F1A424] leading-none">C</span>
              <div className="text-left mt-2">
                <div className="text-[18px] md:text-[24px] font-bold text-white">{language === 'en' ? 'CONNECT' : '连接'}</div>
                {language === 'cn' && <div className="text-[12px] md:text-[14px] text-white/50 uppercase tracking-widest mt-0.5">CONNECT</div>}
              </div>
            </div>
            <div className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-2 border-white/20 relative">
              <img src="/images/1-1.jpeg" alt="Connect" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[13px] md:text-[18px] text-white mb-1">{language === 'en' ? 'Connect with the right people' : '连接关键人物与资源'}</h4>
            {language === 'cn' && <p className="text-[11px] md:text-[14px] text-white/50 leading-[1.5]">Connect with<br/>the right people</p>}
          </div>

          <div className="hidden md:flex items-center justify-center text-white/30 px-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* E - Empower */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-2 md:px-4">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[48px] md:text-[80px] font-bold text-[#F1A424] leading-none">E</span>
              <div className="text-left mt-2">
                <div className="text-[18px] md:text-[24px] font-bold text-white">{language === 'en' ? 'EMPOWER' : '赋能'}</div>
                {language === 'cn' && <div className="text-[12px] md:text-[14px] text-white/50 uppercase tracking-widest mt-0.5">EMPOWER</div>}
              </div>
            </div>
            <div className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-2 border-white/20 relative">
              <img src="/images/1-2.jpeg" alt="Empower" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[13px] md:text-[18px] text-white mb-1">{language === 'en' ? 'Empower your business with local access' : '获取市场洞察与支持'}</h4>
            {language === 'cn' && <p className="text-[11px] md:text-[14px] text-white/50 leading-[1.5]">Empower your business<br/>with local access</p>}
          </div>

          <div className="hidden md:flex items-center justify-center text-white/30 px-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* B - Build */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-2 md:px-4">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[48px] md:text-[80px] font-bold text-[#F1A424] leading-none">B</span>
              <div className="text-left mt-2">
                <div className="text-[18px] md:text-[24px] font-bold text-white">{language === 'en' ? 'BUILD' : '共建'}</div>
                {language === 'cn' && <div className="text-[12px] md:text-[14px] text-white/50 uppercase tracking-widest mt-0.5">BUILD</div>}
              </div>
            </div>
            <div className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-2 border-white/20 relative">
              <img src="/images/1-3.jpeg" alt="Build" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[13px] md:text-[18px] text-white mb-1">{language === 'en' ? 'Build long-term relationships' : '建立长期合作关系'}</h4>
            {language === 'cn' && <p className="text-[11px] md:text-[14px] text-white/50 leading-[1.5]">Build long-term<br/>relationships</p>}
          </div>

          <div className="hidden md:flex items-center justify-center text-white/30 px-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* C - Create */}
          <div className="flex flex-col items-center text-center group w-full md:w-1/4 px-2 md:px-4">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[48px] md:text-[80px] font-bold text-[#F1A424] leading-none">C</span>
              <div className="text-left mt-2">
                <div className="text-[18px] md:text-[24px] font-bold text-white">{language === 'en' ? 'CREATE' : '共创'}</div>
                {language === 'cn' && <div className="text-[12px] md:text-[14px] text-white/50 uppercase tracking-widest mt-0.5">CREATE</div>}
              </div>
            </div>
            <div className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-2 border-white/20 relative">
              <img src="/images/1-4.jpeg" alt="Create" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-bold text-[13px] md:text-[18px] text-white mb-1">{language === 'en' ? 'Create new opportunities together' : '共同创造商业机会'}</h4>
            {language === 'cn' && <p className="text-[11px] md:text-[14px] text-white/50 leading-[1.5]">Create new<br/>opportunities together</p>}
          </div>

        </div>

        {/* Footer Tagline */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-[12px] md:text-[16px] tracking-[0.25em] text-[#F1A424] font-bold uppercase">
            WE CONNECT. EMPOWER. BUILD. CREATE.
          </p>
          {language === 'cn' && (
            <p className="text-[14px] md:text-[18px] tracking-[0.1em] text-white/70 mt-3">
              连接中国与欧亚 · 共创更广阔的未来
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
