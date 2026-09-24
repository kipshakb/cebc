import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      id: "01",
      title: "官方企业会员身份",
      titleEn: "Official Corporate Member Status",
      desc: "获得CEBC企业会员资格及官方会员证书。",
      descEn: "Gain official CEBC corporate membership status and certificate.",
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
      ),
      image: "/images/2-1.png",
      bgClass: "bg-white",
      textClass: "text-[#0A1B3F]"
    },
    {
      id: "02",
      title: "企业与产品展示",
      titleEn: "Company & Product Visibility",
      desc: "在CEBC平台展示企业信息及最多6个产品或解决方案。",
      descEn: "Showcase your company profile and up to 6 products or solutions on the CEBC platform.",
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      image: "/images/2-2.jpeg",
      bgClass: "bg-white",
      textClass: "text-[#0A1B3F]"
    },
    {
      id: "03",
      title: "CEBC商务网络",
      titleEn: "CEBC Business Network",
      desc: "融入中国与欧亚的企业、机构与行业网络。",
      descEn: "Become part of a growing network of companies, institutions and industry stakeholders across China and Eurasia.",
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      image: "/images/2-3.jpeg",
      bgClass: "bg-white",
      textClass: "text-[#0A1B3F]"
    },
    {
      id: "04",
      title: "市场与商业动态",
      titleEn: "Market & Opportunity Updates",
      desc: "获取精选的市场动态、项目信息与行业资讯。",
      descEn: "Receive selected updates on market developments, projects, exhibitions and business opportunities.",
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
      ),
      image: "/images/2-4.jpeg",
      bgClass: "bg-gray-50",
      textClass: "text-[#0A1B3F]"
    },
    {
      id: "05",
      title: "优先参与CEBC活动",
      titleEn: "Priority Invitations",
      desc: "优先受邀参加商务对接、政企活动、行业论坛、展会等活动。",
      descEn: "Receive priority invitations to selected business meetings, B2B & B2G activities, industry events, exhibitions and more.",
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      ),
      image: "/images/2-5.jpeg",
      bgClass: "bg-[#0A1B3F]",
      textClass: "text-white"
    },
    {
      id: "06",
      title: "专业服务会员权益",
      titleEn: "Member Benefits for Professional Services",
      desc: "享受会员专属条款与支持（包括一次年度咨询）。",
      descEn: "Receive preferential member terms and priority consideration for CEBC professional services (including one annual consultation).",
      icon: (
        <svg className="w-5 h-5 text-[#F1A424]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      image: "/images/2-6.jpeg",
      bgClass: "bg-white",
      textClass: "text-[#0A1B3F]"
    }
  ];

  return (
    <section className="pb-16 md:pb-24 pt-0 bg-[#F8F9FA] font-['Inter'] relative overflow-hidden" id="benefits">
      
      {/* Decorative subtle mountain background at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[500px] z-0 opacity-70 bg-cover bg-top"
        style={{ backgroundImage: "url('/images/philosophy_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] to-transparent"></div>
      </div>

      {/* Header matching the mockup */}
      <div className="w-full bg-[#0A1B3F] text-white py-12 md:py-20 mb-10 md:mb-16 relative z-20 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:justify-between lg:items-end">
          <div className="mb-6 lg:mb-0 flex items-start">
            <div className="mr-6 hidden md:block mt-3">
              <span className="text-[18px] md:text-[24px] font-bold text-white/50">03</span>
            </div>
            <div>
              <h2 className="text-[36px] md:text-[72px] font-bold text-white leading-tight tracking-tight">
                {language === 'en' ? 'Membership Benefits' : '会员权益'}
              </h2>
              {language === 'cn' && <h3 className="text-[20px] md:text-[24px] text-white/70 uppercase tracking-widest mt-2">MEMBERSHIP BENEFITS</h3>}
            </div>
          </div>
          
          <div className="lg:text-right border-l-[3px] border-[#F1A424] pl-5 lg:border-l-0 lg:border-r-[3px] lg:pl-0 lg:pr-5">
            <p className="text-[14px] md:text-[24px] font-medium text-white">
              {language === 'en' ? 'More Connections · More Opportunities · Greater Value' : '更多连接 · 更多机会 · 更大价值'}
            </p>
            {language === 'cn' && (
              <p className="text-[14px] md:text-[16px] text-white/60 mt-2 uppercase tracking-widest">
                More Connections · More Opportunities · Greater Value
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div key={item.id} className={`${item.bgClass} flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[360px]`}>
              
              <div className="p-6 md:p-10 flex-grow">
                <div className="flex items-center space-x-4 mb-8">
                  <span className={`text-[28px] md:text-[36px] font-bold ${item.bgClass === 'bg-[#0A1B3F]' ? 'text-white' : 'text-[#F1A424]'}`}>{item.id}</span>
                  <div className={`p-1 ${item.bgClass === 'bg-[#0A1B3F]' ? 'text-white' : 'text-[#0A1B3F]'}`}>
                    <div className="scale-150 transform origin-left">
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className={`text-[18px] md:text-[28px] font-bold ${item.textClass} mb-2 tracking-tight`}>{language === 'en' ? item.titleEn : item.title}</h3>
                {language === 'cn' && <h4 className={`text-[16px] md:text-[18px] ${item.bgClass === 'bg-[#0A1B3F]' ? 'text-gray-300' : 'text-gray-500'} mb-6`}>{item.titleEn}</h4>}
                {language === 'en' && <div className="h-6"></div>}
                
                <p className={`text-[14px] md:text-[18px] ${item.bgClass === 'bg-[#0A1B3F]' ? 'text-gray-300' : 'text-gray-600'} leading-[1.7]`}>
                  {language === 'en' ? item.descEn : item.desc}
                </p>
              </div>

              {/* Only show image if it exists for the card */}
              {item.image && (
                <div className="h-[140px] md:h-[360px] w-full overflow-hidden mt-auto">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              )}
              {/* For Card 1 which has no image, we add a subtle design element */}
              {!item.image && (
                <div className="h-[140px] w-full flex items-center justify-center bg-gray-50 mt-auto px-8 relative overflow-hidden">
                  <div className="absolute right-[-40px] bottom-[-40px] opacity-10">
                    <img src="/logo.png" className="w-[200px]" alt="" />
                  </div>
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
