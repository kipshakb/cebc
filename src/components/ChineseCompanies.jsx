import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ChineseCompanies = () => {
  const { language } = useLanguage();

  const services = [
    {
      id: '01',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      titleCn: '市场进入支持',
      titleEn: 'Market Entry Support',
      descCn: '市场调研、进入策略、本地政策解读与资源精准对接',
      descEn: 'Market research, entry strategy, local policies & resource matchmaking',
      image: '/images/1-1.jpeg'
    },
    {
      id: '02',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      titleCn: 'B2B & B2G 商务拓展',
      titleEn: 'B2B & B2G Business Development',
      descCn: '客户开发、战略伙伴寻找、高层商务对接与政府机构沟通',
      descEn: 'Client development, partner search, B2B meetings & institutional outreach',
      image: '/images/3-1.png'
    },
    {
      id: '03',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      titleCn: '商务及MBA代表团',
      titleEn: 'Business & MBA Delegations',
      descCn: '海外企业参访、定制化商务考察、高管研修与MBA交流项目',
      descEn: 'Enterprise visits, customized business tours & executive exchange programs',
      image: '/images/3-2.png'
    },
    {
      id: '04',
      icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
      titleCn: 'PR、市场推广及产品发布',
      titleEn: 'PR, Marketing & Product Launch',
      descCn: '区域品牌塑造、主流媒体传播、多语种本地化营销与发布会执行',
      descEn: 'Regional branding, media coverage, localized marketing & launch events',
      image: '/images/1-2.jpeg'
    },
    {
      id: '05',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      titleCn: '展会及市场拓展支持',
      titleEn: 'Exhibition & Market Expansion',
      descCn: '国际重点展会规划、展位设计搭建、专业买家邀约与现场展洽',
      descEn: 'Trade show planning, booth build, buyer invitations & onsite support',
      image: '/images/3-3.png'
    },
    {
      id: '06',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      titleCn: '战略咨询及专项项目',
      titleEn: 'Strategic Consulting & Projects',
      descCn: '跨境投资研报、行业可行性论证、产业落地与合规风险支持',
      descEn: 'Cross-border investment reports, feasibility analysis & compliance advisory',
      image: '/images/3-4.jpeg'
    }
  ];

  return (
    <section className="relative bg-[#FAFAFC] font-['Inter'] overflow-hidden" id="chinese-companies">
      
      {/* Mountain Panorama Background — bg image.png */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/bg%20image.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 py-16 md:py-24">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-16">
          <div className="lg:w-8/12 mb-8 lg:mb-0">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[13px] md:text-[15px] font-black text-[#D98200] tracking-widest uppercase">
                {language === 'en' ? 'OUR SERVICES' : '我们的服务'}
              </span>
              <div className="h-[2px] w-[24px] bg-[#D98200]"></div>
              <span className="text-[12px] md:text-[14px] text-[#0A1B3F] font-bold tracking-wider uppercase">
                {language === 'cn' ? 'OUR SERVICES' : 'FOR CHINESE ENTERPRISES'}
              </span>
            </div>

            <h2 className="text-[32px] md:text-[54px] font-black text-[#0A1B3F] mb-2 tracking-tight leading-[1.15]">
              {language === 'en' ? 'A FULL RANGE OF SUPPORT FOR CHINESE COMPANIES' : '为中国企业提供全方位支持'}
            </h2>
            {language === 'cn' && (
              <h3 className="text-[16px] md:text-[22px] font-extrabold text-[#0A1B3F] tracking-wide mb-6">
                A FULL RANGE OF SUPPORT FOR CHINESE COMPANIES
              </h3>
            )}
            {language === 'en' && <div className="h-4"></div>}
            
            <p className="text-[16px] md:text-[19px] text-[#0A1B3F] font-semibold max-w-[750px] leading-[1.7] mb-2">
              {language === 'en' 
                ? 'From market entry to local execution, CEBC provides practical and result-oriented support for Chinese companies in Central Asia and the wider Eurasia region.'
                : '从市场进入到项目落地，CEBC为中国企业在中亚及更广泛的欧亚市场提供专业、务实、可执行的本地支持。'
              }
            </p>
            {language === 'cn' && (
              <p className="text-[14px] md:text-[16px] text-gray-900 font-medium max-w-[750px] leading-[1.7]">
                From market entry to local execution, CEBC provides practical and result-oriented support for Chinese companies in Central Asia and the wider Eurasia region.
              </p>
            )}
          </div>
          
          {/* Right decorative text */}
          <div className="hidden lg:block text-right border-r-[4px] border-[#D98200] pr-6">
            <p className="text-[22px] md:text-[28px] font-black text-[#0A1B3F] leading-[1.3] mb-3">
              {language === 'en' ? <>Connecting<br/>Opportunities<br/>Building Tomorrow</> : <>连接机遇<br/>共建未来</>}
            </p>
            {language === 'cn' && (
              <p className="text-[13px] md:text-[14px] text-gray-800 font-bold uppercase tracking-[0.2em] leading-[1.8]">
                CONNECTING<br/>OPPORTUNITIES<br/>BUILDING TOMORROW
              </p>
            )}
            {language === 'en' && (
              <p className="text-[13px] md:text-[14px] text-gray-800 font-bold uppercase tracking-[0.2em] leading-[1.8]">
                CEBC EURASIA NETWORK
              </p>
            )}
          </div>
        </div>

        {/* Services Grid — 6 cards matching PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 md:gap-5 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="flex flex-col group bg-white/95 backdrop-blur-sm rounded-sm border-2 border-gray-200/90 hover:border-[#D98200] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
            >
              
              <div className="p-5 md:p-5 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[28px] md:text-[32px] font-black text-[#D98200] leading-none">
                    {service.id}
                  </span>
                  <div className="p-2 rounded-full bg-[#0A1B3F]/5 text-[#0A1B3F] group-hover:bg-[#D98200]/10 group-hover:text-[#D98200] transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={service.icon} />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-[17px] md:text-[18px] font-extrabold text-[#0A1B3F] mb-1 leading-[1.3]">
                  {language === 'en' ? service.titleEn : service.titleCn}
                </h3>
                {language === 'cn' && (
                  <h4 className="text-[12px] md:text-[13px] font-bold text-gray-800 mb-3 leading-snug">
                    {service.titleEn}
                  </h4>
                )}
                {language === 'en' && <div className="h-3"></div>}
                
                <p className="text-[13px] md:text-[14px] font-medium text-gray-900 leading-[1.6] mb-4 flex-grow">
                  {language === 'en' ? service.descEn : service.descCn}
                </p>
              </div>
              
              {/* Image thumbnail */}
              <div className="h-[120px] md:h-[135px] w-full overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.titleEn} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
              </div>
              
              {/* Learn more link */}
              <div className="px-5 py-3.5 border-t border-gray-100 bg-gray-50/70">
                <a 
                  href="#application" 
                  className="text-[13px] md:text-[14px] font-extrabold text-[#0A1B3F] flex items-center justify-between group-hover:text-[#D98200] transition-colors"
                >
                  <span>{language === 'en' ? 'Learn more' : '了解更多'}</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform font-black">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Bottom CTA Banner — dark blue like PDF */}
      <div className="relative z-10 bg-[#0A1B3F] overflow-hidden shadow-2xl">
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: 'url(/images/1-4.jpeg)' }}
        ></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-[24px] md:text-[36px] font-black text-white mb-1.5 tracking-tight">
                {language === 'en' ? 'READY TO EXPAND INTO CENTRAL ASIA & EURASIA?' : '准备拓展中亚及欧亚市场？'}
              </h3>
              {language === 'cn' && (
                <p className="text-[14px] md:text-[16px] text-white/70 font-semibold uppercase tracking-wider">
                  READY TO EXPAND INTO CENTRAL ASIA & EURASIA?
                </p>
              )}
              <p className="text-[15px] md:text-[17px] text-white/90 font-medium mt-3">
                {language === 'en' 
                  ? 'Start your Eurasia journey with the CEBC team.' 
                  : '与CEBC团队建立联系，开启您的中亚及欧亚市场拓展之旅。'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#application" 
                className="bg-[#F1A424] hover:bg-[#ffb53a] text-[#0A1B3F] text-[15px] font-black px-9 py-4 rounded-[2px] transition-all duration-300 flex items-center justify-center whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>{language === 'en' ? 'Submit Request' : '提交项目需求'}</span>
                <span className="ml-2 font-black">→</span>
              </a>
              <a 
                href="#benefits" 
                className="border-2 border-white/50 text-white hover:bg-white hover:text-[#0A1B3F] text-[15px] font-bold px-8 py-4 rounded-[2px] transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              >
                <span>{language === 'en' ? 'Explore Services' : '了解更多服务'}</span>
                <span className="ml-2 font-black">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ChineseCompanies;
