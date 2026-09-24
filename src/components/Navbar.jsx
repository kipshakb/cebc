import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [activeItem, setActiveItem] = useState('membership');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle active link state
  const handleNavClick = (e, targetId, itemName) => {
    e.preventDefault();
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'home', cn: '首页', en: 'Home', target: 'hero' },
    { name: 'about', cn: '关于我们', en: 'About Us', target: 'philosophy' },
    { name: 'chinese', cn: '中国企业', en: 'Chinese Companies', target: 'pricing' },
    { name: 'eurasia', cn: '欧亚合作', en: 'Eurasian Cooperation', target: 'connections' },
    { name: 'membership', cn: '会员服务', en: 'Membership', target: 'pricing' },
    { name: 'activities', cn: '活动', en: 'Activities', target: 'connections' },
    { name: 'insights', cn: '洞察', en: 'Insights', target: 'whyjoin' },
    { name: 'contact', cn: '联系我们', en: 'Contact Us', target: 'application' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white font-['Inter'] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex justify-between items-center h-[70px] md:h-[90px]">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero', 'home')} className="flex items-center h-full cursor-pointer">
              <img src="/logo.png" alt="CEBC Logo" className="h-[50px] md:h-[75px] w-auto object-contain md:scale-[1.5] origin-left" />
            </a>
            
            {/* Divider */}
            <div className="hidden lg:block h-[34px] w-[1px] bg-gray-200 mx-5 ml-12"></div>
            
            {/* Tagline */}
            <div className="hidden lg:flex flex-col text-[8px] text-[#0A1B3F] font-semibold tracking-[0.05em] leading-[1.3] opacity-80 mt-1">
              <span>CONNECT</span>
              <span>EMPOWER</span>
              <span>BUILD</span>
              <span>CREATE</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden xl:flex space-x-10 text-[13px] text-gray-700 font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative cursor-pointer" onClick={(e) => handleNavClick(e, link.target, link.name)}>
                <a 
                  href={`#${link.target}`} 
                  className={`${activeItem === link.name ? 'text-[#0A1B3F] font-semibold' : 'hover:text-[#0A1B3F] transition-colors'}`}
                >
                  {language === 'en' ? link.en : link.cn}
                </a>
                {activeItem === link.name && (
                  <div className="absolute -bottom-[6px] left-0 right-0 h-[2px] bg-[#F1A424]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section — desktop only */}
          <div className="hidden xl:flex items-center space-x-6">
            
            {/* Language Switch */}
            <div className="flex items-center space-x-2 text-[12px] font-medium">
              <button 
                className={`${language === 'cn' ? 'text-[#0A1B3F] font-bold' : 'text-gray-400 hover:text-[#0A1B3F]'} transition-colors uppercase`} 
                onClick={() => setLanguage('cn')}
              >
                CN
              </button>
              <span className="text-gray-300 font-light">|</span>
              <button 
                className={`${language === 'en' ? 'text-[#0A1B3F] font-bold' : 'text-gray-400 hover:text-[#0A1B3F]'} transition-colors uppercase`} 
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            
            {/* CTA Button */}
            <a href="#application" onClick={(e) => handleNavClick(e, 'application', 'contact')} className="bg-[#0A1B3F] text-white text-[13px] font-medium px-7 py-2.5 rounded-[2px] hover:bg-[#0A1B3F]/90 transition-colors tracking-wide">
              {language === 'en' ? 'Become a Member' : '成为会员'}
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button className="text-gray-600 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl absolute w-full left-0 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target, link.name)}
                className={`text-[16px] font-medium py-3 border-b border-gray-50 ${activeItem === link.name ? 'text-[#F1A424]' : 'text-[#0A1B3F]'}`}
              >
                {language === 'en' ? link.en : link.cn}
              </a>
            ))}
            
            <div className="pt-4 pb-2 flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-[14px] font-medium">
                <button 
                  className={`${language === 'cn' ? 'text-[#0A1B3F] font-bold' : 'text-gray-400'} transition-colors uppercase`} 
                  onClick={() => setLanguage('cn')}
                >
                  CN
                </button>
                <span className="text-gray-300 font-light">|</span>
                <button 
                  className={`${language === 'en' ? 'text-[#0A1B3F] font-bold' : 'text-gray-400'} transition-colors uppercase`} 
                  onClick={() => setLanguage('en')}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
