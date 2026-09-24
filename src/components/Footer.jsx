import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#0A1B3F] text-white font-['Inter'] pt-16 md:pt-24 pb-6 md:pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-24 mb-12 md:mb-16">
          
          <div>
            <div className="flex items-center mb-8 bg-white p-3 rounded-[2px] w-fit">
              <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); }}>
                <img src="/logo.png" alt="CEBC Logo" className="h-[60px] md:h-[80px] w-auto object-contain" />
              </a>
            </div>
            <div className="text-gray-400 text-[15px] md:text-[18px] leading-[1.8]">
              {language === 'en' ? (
                <p>We connect people, empower businesses, build lasting relationships and create new opportunities across China and Eurasia.</p>
              ) : (
                <>
                  <p className="mb-2 text-white/90">连接人脉，赋能商业，建立持久关系，并在中国与欧亚大陆创造全新机遇。</p>
                  <p className="text-[14px] opacity-70 leading-[1.5]">We connect people, empower businesses, build lasting relationships and create new opportunities across China and Eurasia.</p>
                </>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[18px] md:text-[22px] mb-5 md:mb-6 text-white">{language === 'en' ? 'Quick Links' : '快速链接 Quick Links'}</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-[15px] md:text-[18px]">
              <li><a href="#hero" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Home' : '首页 Home'}</a></li>
              <li><a href="#philosophy" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'About Us' : '关于我们 About Us'}</a></li>
              <li><a href="#pricing" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Membership' : '会员服务 Membership'}</a></li>
              <li><a href="#connections" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Eurasian Cooperation' : '欧亚合作 Eurasian Cooperation'}</a></li>
              <li><a href="#application" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Apply Now' : '申请加入 Apply Now'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[18px] md:text-[22px] mb-5 md:mb-6 text-white">{language === 'en' ? 'Contact Us' : '联系我们 Contact Us'}</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-[15px] md:text-[18px]">
              <li><a href="mailto:info@cebc.org" className="hover:text-[#F1A424] transition-colors">info@cebc.org</a></li>
              <li className="pt-2">{language === 'en' ? 'Beijing | Shenzhen' : '北京 Beijing | 深圳 Shenzhen'}</li>
              <li>{language === 'en' ? 'Astana | Tashkent' : '阿斯塔纳 Astana | 塔什干 Tashkent'}</li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-gray-800 flex justify-center md:justify-start items-center text-[12px] md:text-[16px] text-gray-500">
           <p>© {new Date().getFullYear()} CEBC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
