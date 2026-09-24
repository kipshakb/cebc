import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      id: "01",
      titleCn: "官方企业会员身份",
      titleEn: "Official Corporate Member Status",
      descCn: "获得CEBC企业会员资格及官方会员证书，确立在欧亚商业生态中的正式身份。",
      descEn: "Gain official CEBC corporate membership status and certificate in Eurasia.",
      image: "/images/2-1.png",
      isDark: false,
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: "02",
      titleCn: "企业与产品展示",
      titleEn: "Company & Product Visibility",
      descCn: "在CEBC官方平台与展会网络展示企业信息及最多6个产品或解决方案。",
      descEn: "Showcase company profile and up to 6 products or solutions across CEBC platforms.",
      image: "/images/2-2.jpeg",
      isDark: false,
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "03",
      titleCn: "CEBC商务网络",
      titleEn: "CEBC Business Network",
      descCn: "融入中国与欧亚的企业、机构与行业领军网络，共享跨境资源对接通道。",
      descEn: "Become part of a growing network of companies, institutions and industry leaders.",
      image: "/images/2-3.jpeg",
      isDark: false,
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "04",
      titleCn: "市场与商业动态",
      titleEn: "Market & Opportunity Updates",
      descCn: "定期获取精选中亚及欧亚市场动态、政策风向、招商项目与行业独家资讯。",
      descEn: "Receive curated market developments, policy updates, projects and business opportunities.",
      image: "/images/2-4.jpeg",
      isDark: false,
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      id: "05",
      titleCn: "优先参与CEBC活动",
      titleEn: "Priority Invitations",
      descCn: "优先受邀参加商务对接会、政企闭门会议、国际论坛及重点展会VIP活动。",
      descEn: "Receive VIP priority invitations to B2B & B2G meetings, forums and exhibitions.",
      image: "/images/2-5.jpeg",
      isDark: false,
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      id: "06",
      titleCn: "专业服务会员权益",
      titleEn: "Member Benefits for Services",
      descCn: "享受CEBC专业咨询与落地服务专属优惠（包含一次高管年度战略咨询）。",
      descEn: "Preferential member terms for CEBC advisory (includes one annual strategy consultation).",
      image: "/images/2-6.jpeg",
      isDark: false,
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#F8F9FB] font-['Inter'] overflow-hidden" id="benefits">
      
      {/* Mountain Background Silhouette — bg image.png */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/bg%20image.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FB]/80 via-[#F8F9FB]/30 to-[#F8F9FB]/80"></div>
      </div>

      {/* Header Banner - Dark Navy matching PDF page 5 */}
      <div className="w-full bg-[#0A1B3F] text-white py-12 md:py-18 relative z-10 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:justify-between lg:items-end">
          
          {/* Left Title */}
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[14px] md:text-[16px] font-bold text-white/50">03</span>
              <div className="h-[2px] w-[30px] bg-[#F1A424]"></div>
              <span className="text-[12px] md:text-[14px] font-semibold text-[#F1A424] uppercase tracking-wider">
                {language === 'en' ? 'MEMBERSHIP' : '会员体系'}
              </span>
            </div>
            
            <h2 className="text-[32px] md:text-[56px] font-bold text-white leading-tight tracking-tight">
              {language === 'en' ? 'Membership Benefits' : '会员权益'}
            </h2>
            {language === 'cn' && (
              <h3 className="text-[16px] md:text-[22px] text-white/60 uppercase tracking-[0.15em] mt-1 font-light">
                MEMBERSHIP BENEFITS
              </h3>
            )}
          </div>
          
          {/* Right Tagline */}
          <div className="lg:text-right border-l-[3px] border-[#F1A424] pl-5 lg:border-l-0 lg:border-r-[3px] lg:pl-0 lg:pr-5">
            <p className="text-[16px] md:text-[24px] font-bold text-white leading-snug">
              {language === 'en' ? 'More Connections · More Opportunities · Greater Value' : '更多连接 · 更多机会 · 更大价值'}
            </p>
            {language === 'cn' && (
              <p className="text-[12px] md:text-[14px] text-white/60 mt-1 uppercase tracking-widest">
                MORE CONNECTIONS · MORE OPPORTUNITIES · GREATER VALUE
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 py-12 md:py-16">
        
        {/* Floating Decorative Label */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0A1B3F]/50">
            {language === 'en' ? 'Exclusive Corporate Privileges' : '企业会员专属权益'}
          </span>
          <span className="hidden md:inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#F1A424]">
            CONNECTING ACROSS EURASIA
          </span>
        </div>

        {/* 3x2 Grid of Cards — Horizontal split matching PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((item) => (
            <div 
              key={item.id} 
              className={`group flex flex-col sm:flex-row justify-between rounded-sm border transition-all duration-300 overflow-hidden ${
                item.isDark 
                  ? 'bg-[#0A1B3F] border-[#0A1B3F] text-white shadow-md hover:shadow-2xl hover:border-[#F1A424]' 
                  : 'bg-white border-gray-100/90 text-[#0A1B3F] shadow-sm hover:shadow-xl hover:border-[#F1A424]/40'
              }`}
            >
              {/* Left Content Column */}
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Number & Icon Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-[24px] md:text-[28px] font-bold text-[#F1A424] leading-none">
                      {item.id}
                    </span>
                    <div className="p-1.5 rounded-full bg-[#F1A424]/10">
                      {item.icon}
                    </div>
                  </div>

                  {/* Titles */}
                  <h3 className={`text-[17px] md:text-[19px] font-extrabold mb-1 leading-snug ${
                    item.isDark ? 'text-white' : 'text-[#0A1B3F]'
                  }`}>
                    {language === 'en' ? item.titleEn : item.titleCn}
                  </h3>
                  {language === 'cn' && (
                    <h4 className={`text-[11px] md:text-[12px] font-bold mb-3 leading-tight ${
                      item.isDark ? 'text-white/80' : 'text-gray-800'
                    }`}>
                      {item.titleEn}
                    </h4>
                  )}
                  {language === 'en' && <div className="h-2"></div>}

                  {/* Description */}
                  <p className={`text-[13px] md:text-[14px] leading-[1.6] ${
                    item.isDark ? 'text-gray-200' : 'text-gray-900 font-medium'
                  }`}>
                    {language === 'en' ? item.descEn : item.descCn}
                  </p>
                </div>

                {/* Subtle link / action indicator */}
                <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[12px] font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className={item.isDark ? 'text-[#F1A424]' : 'text-[#0A1B3F]'}>
                    {language === 'en' ? 'Learn more' : '了解更多'}
                  </span>
                  <span className="transform group-hover:translate-x-1 transition-transform font-black">→</span>
                </div>
              </div>

              {/* Right Image Thumbnail Column */}
              <div className="w-full sm:w-[130px] md:w-[140px] lg:w-[135px] xl:w-[150px] h-[130px] sm:h-auto min-h-[140px] relative overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.titleEn} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className={`absolute inset-0 ${
                  item.isDark 
                    ? 'bg-gradient-to-r from-[#0A1B3F]/60 sm:from-[#0A1B3F]/40 to-transparent' 
                    : 'bg-gradient-to-r from-black/5 to-transparent'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar / Pricing Link */}
        <div className="mt-12 text-center">
          <a 
            href="#pricing" 
            className="inline-flex items-center space-x-2 bg-[#0A1B3F] text-white hover:bg-[#F1A424] hover:text-[#0A1B3F] px-8 py-3.5 rounded-[2px] font-bold text-[14px] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>{language === 'en' ? 'View Membership Packages & Pricing' : '查看会员级别与入会方案'}</span>
            <span>→</span>
          </a>
        </div>

        {/* Section Footer Taglines matching the PDF design */}
        <div className="text-center mt-16 md:mt-20 pb-4 relative z-20">
          <p className="text-[12px] md:text-[15px] tracking-[0.25em] text-[#0A1B3F] font-bold opacity-80 uppercase">
            ROOTED IN CHINA · CONNECTING EURASIA · BUILDING A BROADER TOMORROW
          </p>
          {language === 'cn' && (
            <p className="text-[14px] md:text-[18px] tracking-[0.15em] text-[#0A1B3F] mt-2.5 font-semibold">
              立足中国 · 连接欧亚 · 共创更广阔的未来
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
