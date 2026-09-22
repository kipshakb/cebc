import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Connections = () => {
  const { language } = useLanguage();

  const connections = [
    {
      title: "高层会晤",
      titleEn: "Government & Business Meetings",
      desc: "对接政府机构、行业协会、重要企业，促进务实合作。",
      descEn: "Engage with government bodies, industry associations and leading companies to advance practical cooperation.",
      image: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "商务代表团",
      titleEn: "Business Delegations",
      desc: "组织企业考察、商务访问和定制化对接活动。",
      descEn: "Organize tailored business delegations, company visits and matchmaking programs.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "行业论坛与展会",
      titleEn: "Industry Events & Exhibitions",
      desc: "汇聚行业领袖、专家学者和企业，分享趋势，创造合作机遇。",
      descEn: "Bring together industry leaders, experts and companies to share insights and create new opportunities.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "企业与项目访问",
      titleEn: "Company & Project Visits",
      desc: "深入企业与项目现场，了解实际需求，推动解决方案落地。",
      descEn: "Visit companies and project sites to understand real needs and facilitate solutions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white font-['Inter']" id="connections">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16">
          <div className="flex items-start mb-6 lg:mb-0">
            <div className="mr-6 hidden md:block mt-1">
              <span className="text-[12px] font-bold text-gray-400">04</span>
            </div>
            <div>
              <div className="h-[2px] w-[30px] bg-[#F1A424] mb-4"></div>
              <h2 className="text-[42px] font-bold text-[#0A1B3F] mb-1 tracking-tight leading-tight">
                {language === 'en' ? 'Real Connections Create Real Opportunities' : '真实的连接 带来更多机会'}
              </h2>
              {language === 'cn' && <p className="text-[14px] text-[#0A1B3F] font-medium tracking-wide">Real Connections Create Real Opportunities</p>}
            </div>
          </div>
          
          <div className="lg:text-right border-l-[2px] border-[#F1A424] pl-4 lg:border-l-0 lg:border-r-[2px] lg:pl-0 lg:pr-4">
            <p className="text-[14px] font-medium text-[#0A1B3F]">
              {language === 'en' ? 'Turning connections into real outcomes.' : '通过务实的合作，推动更多项目落地。'}
            </p>
            {language === 'cn' && (
              <p className="text-[10px] text-gray-500 mt-1">
                Turning connections into real outcomes.
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {connections.map((item, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="h-[220px] overflow-hidden mb-6">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <h3 className="text-[16px] font-bold text-[#0A1B3F] mb-1">{language === 'en' ? item.titleEn : item.title}</h3>
              {language === 'cn' && <h4 className="text-[12px] text-gray-500 mb-4">{item.titleEn}</h4>}
              {language === 'en' && <div className="mb-4"></div>}
              
              <p className="text-[13px] text-gray-700 leading-[1.6]">
                {language === 'en' ? item.descEn : item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connections;
