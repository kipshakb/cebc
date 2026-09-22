import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#0A1B3F] text-white font-['Inter'] pt-24 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8 bg-white p-2.5 rounded-[2px] w-fit">
              <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); }}>
                <img src="/logo.png" alt="CEBC Logo" className="h-[40px] w-auto object-contain" />
              </a>
            </div>
            <p className="text-gray-400 text-[13px] leading-[1.6]">
              We connect people, empower businesses, build lasting relationships and create new opportunities across China and Eurasia.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[14px] mb-6 text-white">{language === 'en' ? 'About Us' : '关于我们 About Us'}</h4>
            <ul className="space-y-3 text-gray-400 text-[13px]">
              <li><a href="#" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Overview' : 'CEBC简介 Overview'}</a></li>
              <li><a href="#" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Our Team' : '我们的团队 Our Team'}</a></li>
              <li><a href="#" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'News' : '最新动态 News'}</a></li>
              <li><a href="#" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Careers' : '加入我们 Careers'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[14px] mb-6 text-white">{language === 'en' ? 'Membership' : '会员服务 Membership'}</h4>
            <ul className="space-y-3 text-gray-400 text-[13px]">
              <li><a href="#pricing" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Corporate Member' : '企业会员 Corporate Member'}</a></li>
              <li><a href="#" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Professional Member' : '专业会员 Professional Member'}</a></li>
              <li><a href="#" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Institutional Partner' : '机构伙伴 Institutional Partner'}</a></li>
              <li><a href="#" className="hover:text-[#F1A424] transition-colors">{language === 'en' ? 'Strategic Partner' : '战略伙伴 Strategic Partner'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[14px] mb-6 text-white">{language === 'en' ? 'Contact Us' : '联系我们 Contact Us'}</h4>
            <ul className="space-y-3 text-gray-400 text-[13px]">
              <li>info@cebc.org</li>
              <li className="pt-2">{language === 'en' ? 'Beijing | Shenzhen' : '北京 Beijing | 深圳 Shenzhen'}</li>
              <li>{language === 'en' ? 'Astana | Tashkent' : '阿斯塔纳 Astana | 塔什干 Tashkent'}</li>
            </ul>
            <div className="mt-8 flex space-x-4">
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#F1A424] hover:text-[#F1A424] cursor-pointer transition-colors text-gray-400">
                <span className="text-[10px] font-bold">in</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#F1A424] hover:text-[#F1A424] cursor-pointer transition-colors text-gray-400">
                <span className="text-[10px] font-bold">wx</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500">
          <p>© {new Date().getFullYear()} CEBC China-Eurasian Business Council. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Privacy Policy' : '隐私政策 Privacy Policy'}</a>
            <a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Terms of Use' : '使用条款 Terms of Use'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
