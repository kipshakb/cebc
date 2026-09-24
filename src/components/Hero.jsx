import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[800px] flex items-center overflow-hidden font-['Inter']" id="hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Shenzhen-hiteck-4.jpg.jpeg')" }}
      >
        {/* Soft overlay to make text readable but keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B3F]/80 via-[#0A1B3F]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B3F]/90 via-[#0A1B3F]/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center mt-[-60px]">
        {/* Left Content */}
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-[2px] w-[30px] bg-[#F1A424]"></div>
            <p className="text-[15px] md:text-[16px] tracking-[0.1em] text-white">
              {language === 'en' ? 'WIDER MARKET  CLOSER COOPERATION  LONGER-TERM OPPORTUNITIES' : '更广阔的市场  更紧密的合作  更长远的机遇'}
            </p>
          </div>
          
          <h1 className="text-[64px] md:text-[80px] font-bold leading-[1.1] mb-2 tracking-tight">
            {language === 'en' ? 'Join CEBC' : '加入CEBC'}
          </h1>
          <h2 className="text-[56px] md:text-[72px] font-bold leading-[1.1] mb-5 tracking-tight">
            {language === 'en' ? 'Connect China and Eurasia' : '连接中国与欧亚'}
          </h2>
          
          {language === 'cn' && (
            <p className="text-[24px] md:text-[28px] font-medium mb-8 text-white">
              Join CEBC, Connect China and Eurasia
            </p>
          )}
          {language === 'en' && <div className="h-6"></div>}
          
          <p className="text-[16px] md:text-[18px] mb-12 text-white/90 leading-[1.8] max-w-[600px]">
            {language === 'en' 
              ? 'Become a CEBC Corporate Member to join a pragmatic, professional, and sustainable business community. Connect with government bodies, enterprises, and industry partners across China and Eurasia, and seize more opportunities for cooperation and development.'
              : '成为CEBC企业会员，融入一个务实、专业、可持续的商业社区，与中国及欧亚地区的政府机构、企业和行业伙伴建立联系，把握更多合作与发展机会。'
            }
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
            <a href="#pricing" className="bg-[#F1A424] text-[#0A1B3F] text-[16px] md:text-[18px] font-bold px-8 py-3.5 rounded-[2px] hover:bg-[#ffb53a] transition-colors flex items-center justify-center min-w-[220px]">
              {language === 'en' ? 'Become a Corporate Member' : '成为企业会员'} <span className="ml-2">→</span>
            </a>
            <a href="#benefits" className="border border-white/50 text-white text-[16px] md:text-[18px] font-medium px-8 py-3.5 rounded-[2px] hover:bg-white/10 transition-colors flex items-center justify-center min-w-[220px] backdrop-blur-sm">
              {language === 'en' ? 'Explore Benefits' : '了解会员权益'}
            </a>
          </div>
        </div>

        {/* Right Content (Floating Text) */}
        <div className="hidden lg:block text-right border-l-[2px] border-[#F1A424] pl-5">
          <h3 className="text-white font-medium text-[24px] tracking-[0.1em] mb-1">
            {language === 'en' ? 'FROM CHINA' : '从中国走向欧亚'}
          </h3>
          <h3 className="text-white font-medium text-[24px] tracking-[0.1em] mb-4">
            {language === 'en' ? 'TO A WIDER EURASIA' : '共创更广阔的未来'}
          </h3>
          {language === 'cn' && (
            <>
              <p className="text-white/70 text-[12px] md:text-[14px] uppercase tracking-[0.15em] leading-[1.5]">
                FROM CHINA<br/>TO A WIDER EURASIA<br/>A SHARED TOMORROW
              </p>
            </>
          )}
          {language === 'en' && (
             <p className="text-white/70 text-[12px] md:text-[14px] uppercase tracking-[0.15em] leading-[1.5]">
             A SHARED TOMORROW
           </p>
          )}
        </div>
      </div>

      {/* Stats Bar at bottom */}
      <div className="absolute bottom-0 w-full border-t border-white/20 bg-[#0A1B3F]/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="flex items-center space-x-4 group">
              <svg className="w-8 h-8 text-white/70 group-hover:text-[#F1A424] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div>
                <div className="text-white font-bold text-[24px] md:text-[28px]">100+</div>
                {language === 'en' ? (
                  <div className="text-gray-400 text-[12px] md:text-[14px] mt-0.5">Members & Partners</div>
                ) : (
                  <div className="text-gray-400 text-[12px] md:text-[14px] mt-0.5 leading-[1.3]">会员与合作伙伴<br/>Members & Partners</div>
                )}
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="flex items-center space-x-4 border-l border-white/20 pl-8 group">
              <svg className="w-8 h-8 text-white/70 group-hover:text-[#F1A424] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <div>
                <div className="text-white font-bold text-[24px] md:text-[28px]">5</div>
                {language === 'en' ? (
                  <div className="text-gray-400 text-[12px] md:text-[14px] mt-0.5 leading-[1.3]">Central Asian Countries<br/>(and wider Eurasia)</div>
                ) : (
                  <div className="text-gray-400 text-[12px] md:text-[14px] mt-0.5 leading-[1.3]">中亚国家 (及更广泛的欧亚地区)<br/>Central Asian Countries</div>
                )}
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="flex items-center space-x-4 border-l border-white/20 pl-8 group">
              <svg className="w-8 h-8 text-white/70 group-hover:text-[#F1A424] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div>
                <div className="text-white font-bold text-[24px] md:text-[28px]">{language === 'en' ? 'Abundant' : '丰富的'}</div>
                {language === 'en' ? (
                  <div className="text-gray-400 text-[12px] md:text-[14px] mt-0.5 leading-[1.3]">Business Opportunities</div>
                ) : (
                  <div className="text-gray-400 text-[12px] md:text-[14px] mt-0.5 leading-[1.3]">商业机会<br/>Business Opportunities</div>
                )}
              </div>
            </div>
            
            {/* Stat 4 */}
            <div className="flex items-center space-x-4 border-l border-white/20 pl-8 group">
              <svg className="w-8 h-8 text-white/70 group-hover:text-[#F1A424] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <div>
                <div className="text-white font-bold text-[24px] md:text-[28px]">{language === 'en' ? 'Strong' : '强大的'}</div>
                {language === 'en' ? (
                  <div className="text-gray-400 text-[12px] md:text-[14px] mt-0.5 leading-[1.3]">Expert Network</div>
                ) : (
                  <div className="text-gray-400 text-[12px] md:text-[14px] mt-0.5 leading-[1.3]">专家网络<br/>Expert Network</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
