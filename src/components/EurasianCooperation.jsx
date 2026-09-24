import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EurasianCooperation = () => {
  const { language } = useLanguage();

  const stats = [
    { value: '40+', cn: '商务代表团', en: 'Business Delegations' },
    { value: '200+', cn: '企业对接', en: 'Company Meetings' },
    { value: '30+', cn: '国家和地区', en: 'Countries & Regions' },
    { value: '10+', cn: '大型活动', en: 'Major Events' }
  ];

  const gallery = [
    { titleCn: '企业参访', titleEn: 'Company Visits', image: '/images/3-4.jpeg' },
    { titleCn: '政府及机构会议', titleEn: 'Government & Institutional Meetings', image: '/images/3-1.png' },
    { titleCn: '国际论坛与重大活动', titleEn: 'International Forums & Events', image: '/images/1-1.jpeg' },
    { titleCn: '展会与市场拓展', titleEn: 'Exhibitions & Market Development', image: '/images/3-3.png' },
    { titleCn: '项目考察', titleEn: 'Project Site Visits', image: '/images/1-3.jpeg' },
    { titleCn: '项目合作', titleEn: 'Project Cooperation', image: '/images/1-2.jpeg' },
    { titleCn: 'B2B 对接', titleEn: 'B2B Matchmaking', image: '/images/1-4.jpeg' },
    { titleCn: '商务及MBA代表团', titleEn: 'Business & MBA Delegations', image: '/images/3-2.png' },
  ];

  const partners = [
    { 
      name: '2026 SCO Business Council Annual Meeting', 
      shortName: 'SCO 2026', 
      logo: '' 
    },
    { 
      name: 'World Nomad Games (2024)', 
      shortName: 'WNG 2024', 
      logo: '' 
    },
    { 
      name: 'RES 2026 Astana', 
      shortName: 'RES 2026', 
      logo: '' 
    },
    { 
      name: 'GLA Global Logistics Conference', 
      shortName: 'GLA 2025', 
      logo: '' 
    },
    { 
      name: 'C5+1 Business Forum', 
      shortName: 'C5+1', 
      logo: '' 
    },
    { 
      name: 'GDTE (Guangzhou)', 
      shortName: 'GDTE', 
      logo: '' 
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFC] font-['Inter'] relative overflow-hidden" id="eurasian-cooperation">
      
      {/* Mountain Panorama Background — bg image.png */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/bg%20image.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Row — Title + Stats + Decorative Text */}
        <div className="flex flex-col xl:flex-row justify-between items-start mb-12 md:mb-16 gap-8 xl:gap-0">
          
          {/* Left: Title & Description */}
          <div className="xl:w-[42%]">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[13px] md:text-[15px] font-black text-[#D98200] tracking-widest uppercase">
                {language === 'en' ? 'CEBC IN EURASIA' : '我们的实践'}
              </span>
              <div className="h-[2px] w-[24px] bg-[#D98200]"></div>
              <span className="text-[12px] md:text-[14px] text-[#0A1B3F] font-bold tracking-wider uppercase">
                {language === 'cn' ? 'CEBC IN EURASIA' : 'PROVEN TRACK RECORD'}
              </span>
            </div>

            <h2 className="text-[32px] md:text-[54px] font-black text-[#0A1B3F] mb-2 tracking-tight leading-[1.15]">
              {language === 'en' ? 'CEBC IN ACTION' : '在欧亚的实际行动'}
            </h2>
            {language === 'cn' && (
              <h3 className="text-[18px] md:text-[24px] font-extrabold text-[#0A1B3F] tracking-wide mb-6">
                CEBC IN ACTION
              </h3>
            )}
            {language === 'en' && <div className="h-4"></div>}
            
            <p className="text-[16px] md:text-[19px] text-[#0A1B3F] font-semibold max-w-[550px] leading-[1.7] mb-2">
              {language === 'en' 
                ? 'Through business delegations, company matchmaking, institutional engagement, exhibitions and project cooperation, we help Chinese companies build real, long-term partnerships in Central Asia and the wider Eurasia region.'
                : '我们通过商务代表团、企业对接、政府及机构沟通、展会活动和项目合作，帮助中国企业在中亚及欧亚市场建立真实、长期的合作关系。'
              }
            </p>
            {language === 'cn' && (
              <p className="text-[14px] md:text-[16px] text-gray-900 font-medium max-w-[550px] leading-[1.7]">
                Through business delegations, company matchmaking, institutional engagement, exhibitions and project cooperation, we help Chinese companies build real, long-term partnerships in Central Asia and the wider Eurasia region.
              </p>
            )}
          </div>
          
          {/* Middle: Stats */}
          <div className="xl:w-[43%] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 xl:gap-3 xl:pt-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col border-l-[3px] border-[#D98200] pl-3 md:pl-4">
                <span className="text-[36px] md:text-[44px] font-black text-[#0A1B3F] mb-1 leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[15px] md:text-[16px] font-extrabold text-[#0A1B3F] leading-snug">
                  {language === 'en' ? stat.en : stat.cn}
                </span>
                {language === 'cn' && (
                  <span className="text-[11px] md:text-[12px] font-bold text-gray-700 uppercase tracking-wider mt-1.5 leading-snug">
                    {stat.en}
                  </span>
                )}
              </div>
            ))}
          </div>
          
          {/* Right: Decorative Text */}
          <div className="hidden xl:flex xl:w-[15%] flex-col items-end text-right border-r-[3px] border-[#D98200] pr-5 xl:pt-4">
            <div className="text-[11px] md:text-[12px] font-black text-gray-700 uppercase tracking-[0.25em] leading-[1.8] mb-4">
              CONNECT · EMPOWER<br/>BUILD · CREATE
            </div>
            <div className="text-[16px] md:text-[18px] font-black text-[#0A1B3F] leading-[1.5]">
              {language === 'en' ? (
                <>From Dialogue<br/>to Partnership<br/>From Projects<br/>to Shared Growth</>
              ) : (
                <>从对话到合作<br/>从项目到共同发展</>
              )}
            </div>
            {language === 'cn' && (
              <p className="text-[11px] md:text-[12px] font-bold text-gray-800 uppercase tracking-wider mt-2.5 leading-[1.6]">
                FROM DIALOGUE TO PARTNERSHIP<br/>FROM PROJECTS TO SHARED GROWTH
              </p>
            )}
            {language === 'en' && (
              <p className="text-[11px] md:text-[12px] font-bold text-gray-800 uppercase tracking-wider mt-2.5 leading-[1.6]">
                BRIDGING REGIONAL COMMERCE
              </p>
            )}
          </div>
        </div>

        {/* Gallery Grid — 4 columns, 2 rows like PDF */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-5 mb-14 md:mb-18">
          {gallery.map((item, index) => (
            <div 
              key={index} 
              className="relative h-[180px] md:h-[240px] group overflow-hidden rounded-sm bg-gray-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={item.image} 
                alt={item.titleEn} 
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B3F]/95 via-[#0A1B3F]/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-5 flex justify-between items-end">
                <div>
                  <h3 className="text-white font-extrabold text-[15px] md:text-[18px] leading-snug tracking-wide">
                    {language === 'en' ? item.titleEn : item.titleCn}
                  </h3>
                  {language === 'cn' && (
                    <p className="text-white/95 text-[11px] md:text-[13px] font-semibold mt-1">
                      {item.titleEn}
                    </p>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#D98200] text-[#0A1B3F] flex items-center justify-center font-black opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-[14px] flex-shrink-0 ml-2">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Projects Bar — Logo Containers ready for partners */}
        <div className="border-2 border-gray-200/90 bg-white/95 backdrop-blur-md rounded-sm p-6 md:p-8 flex flex-col xl:flex-row items-start xl:items-center shadow-lg">
          
          {/* Left Title */}
          <div className="mb-6 xl:mb-0 xl:mr-8 xl:min-w-[210px] border-r-0 xl:border-r-2 border-gray-200 xl:pr-8">
            <h3 className="text-[20px] md:text-[24px] font-black text-[#0A1B3F] mb-1">
              {language === 'en' ? 'SELECTED PROJECTS' : '部分项目与活动'}
            </h3>
            <p className="text-[12px] md:text-[13px] text-gray-800 font-extrabold uppercase tracking-widest">
              {language === 'cn' ? 'SELECTED PROJECTS & ENGAGEMENTS' : '& ENGAGEMENTS'}
            </p>
          </div>
          
          {/* Logo container slots — Clean ready frames for partner logos (No emojis!) */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 w-full">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center justify-start text-center group">
                
                {/* Logo Frame Container */}
                <div className="w-full h-[68px] md:h-[78px] bg-white border border-gray-200/90 rounded-sm shadow-sm hover:shadow-md hover:border-[#D98200] flex items-center justify-center p-3 transition-all duration-300 group/logo">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-[46px] max-w-full object-contain filter grayscale group-hover/logo:grayscale-0 transition-all duration-300" 
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-[13px] md:text-[15px] font-black tracking-wider text-[#0A1B3F] group-hover/logo:text-[#D98200] transition-colors uppercase">
                        {partner.shortName}
                      </span>
                      <span className="text-[9px] text-gray-500 uppercase tracking-widest font-extrabold mt-0.5">
                        LOGO
                      </span>
                    </div>
                  )}
                </div>

                {/* Event / Partner Label */}
                <p className="text-[12px] md:text-[13px] font-extrabold text-gray-900 group-hover:text-[#0A1B3F] transition-colors leading-[1.3] mt-2.5 text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
          
          {/* Right Action */}
          <div className="mt-6 xl:mt-0 xl:ml-6 xl:border-l-2 border-gray-200 xl:pl-6 flex flex-col justify-center cursor-pointer group">
            <span className="text-[15px] md:text-[17px] font-black text-[#0A1B3F] whitespace-nowrap group-hover:text-[#D98200] transition-colors">
              {language === 'en' ? 'MORE CASES' : '更多合作与案例'}
            </span>
            <span className="text-[13px] font-bold text-gray-700 whitespace-nowrap mt-1 flex items-center group-hover:text-[#D98200] transition-colors">
              <span>{language === 'en' ? 'COMING SOON' : '持续更新中'}</span>
              <span className="ml-2 group-hover:translate-x-1.5 transition-transform font-black">→</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EurasianCooperation;
