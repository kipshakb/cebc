import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyJoin = () => {
  const { language } = useLanguage();

  return (
    <section className="py-32 bg-[#F8F9FA] font-['Inter']" id="whyjoin">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
        
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-[12px] font-bold text-gray-400">05</span>
            <div className="h-[1px] w-6 bg-gray-300"></div>
          </div>
          <h2 className="text-[42px] font-bold text-[#0A1B3F] mb-1 tracking-tight">
            {language === 'en' ? 'Why Join CEBC?' : '为什么加入CEBC？'}
          </h2>
          {language === 'cn' && <h3 className="text-[14px] text-gray-500 uppercase tracking-widest mt-2">WHY JOIN CEBC?</h3>}
        </div>

        <div className="max-w-[800px] mx-auto text-left">
          {(language === 'cn' || language === 'en') && (
            <p className={`text-[18px] md:text-[20px] text-[#0A1B3F] leading-[1.8] font-medium ${language === 'en' ? '' : 'text-justify'}`}>
              {language === 'en' ? (
                <>CEBC Membership keeps your company connected to Central Asia and Eurasia, helps you build long-term relationships with businesses, institutions and industry partners, and keeps you closer to relevant market developments, business activities and opportunities. Because meaningful business opportunities often grow from long-term connections and trust — <strong className="text-[#F1A424]">when the opportunity comes, you don't have to start from zero.</strong></>
              ) : (
                <>CEBC会员让您的企业持续连接中亚及欧亚市场，与当地企业、机构和行业伙伴建立长期关系，并更及时地了解相关市场动态、商务活动与合作机会。因为真正的商业机会往往来自长期的连接与信任——<strong className="text-[#F1A424]">当机会出现时，您不必从零开始。</strong></>
              )}
            </p>
          )}
          
          {language === 'cn' && (
            <>
              <div className="h-[1px] w-12 bg-[#F1A424] my-10"></div>
              <p className="text-[15px] text-gray-500 leading-[1.8] text-justify">
                CEBC Membership keeps your company connected to Central Asia and Eurasia, helps you build long-term relationships with businesses, institutions and industry partners, and keeps you closer to relevant market developments, business activities and opportunities. Because meaningful business opportunities often grow from long-term connections and trust — <strong className="text-[#0A1B3F] font-semibold">when the opportunity comes, you don't have to start from zero.</strong>
              </p>
            </>
          )}
        </div>

        <div className="mt-24 text-center">
          <p className="text-[11px] tracking-[0.2em] text-[#0A1B3F] font-bold opacity-80 uppercase">
            CONNECT · EMPOWER · BUILD · CREATE
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default WhyJoin;
