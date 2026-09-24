import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { language } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 font-['Inter']" id="pricing">
      {/* Background Image - Shared with Application via bg-fixed */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/image.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1B3F]/85 via-[#0A1B3F]/60 to-[#0A1B3F]/85"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Text content */}
          <div className="lg:col-span-7 text-white pt-2">
            <h3 className="text-[16px] md:text-[20px] font-bold tracking-widest text-[#F1A424] mb-2 uppercase">
              CEBC CORPORATE MEMBERSHIP
            </h3>
            <h2 className="text-[56px] md:text-[64px] font-bold mb-4 tracking-tight leading-tight">
              {language === 'en' ? 'Become a CEBC Corporate Member' : '成为CEBC企业会员'}
            </h2>
            <p className="text-[20px] md:text-[24px] font-medium mb-6 leading-[1.6] max-w-[700px] text-white/90">
              {language === 'en' 
                ? 'Join a trusted business network connecting China and Eurasia and unlock new opportunities.'
                : <>加入连接中国与欧亚的商业网络，<br/>在更广阔的市场中发现合作机会。</>
              }
            </p>
            {language === 'cn' && (
              <p className="text-[16px] md:text-[18px] text-gray-400 mb-8 max-w-[600px] leading-[1.5]">
                Join a trusted business network connecting China and Eurasia<br/>
                and unlock new opportunities.
              </p>
            )}

            {/* 4 Icons grid (horizontal like mockup) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div>
                <div className="mb-3 text-[#F1A424]">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h4 className="font-bold text-[18px] md:text-[20px] mb-1">{language === 'en' ? 'Expand network' : '拓展合作网络'}</h4>
                {language === 'cn' && <p className="text-[14px] text-gray-400 leading-[1.3]">Expand your<br/>business network</p>}
              </div>
              <div>
                <div className="mb-3 text-[#F1A424]">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h4 className="font-bold text-[18px] md:text-[20px] mb-1">{language === 'en' ? 'Access opportunities' : '获取市场机会'}</h4>
                {language === 'cn' && <p className="text-[14px] text-gray-400 leading-[1.3]">Access market<br/>opportunities</p>}
              </div>
              <div>
                <div className="mb-3 text-[#F1A424]">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <h4 className="font-bold text-[18px] md:text-[20px] mb-1">{language === 'en' ? 'Exclusive events' : '参与高端活动'}</h4>
                {language === 'cn' && <p className="text-[14px] text-gray-400 leading-[1.3]">Join exclusive<br/>events and delegations</p>}
              </div>
              <div>
                <div className="mb-3 text-[#F1A424]">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h4 className="font-bold text-[18px] md:text-[20px] mb-1">{language === 'en' ? 'Tailored support' : '获得专业支持'}</h4>
                {language === 'cn' && <p className="text-[14px] text-gray-400 leading-[1.3]">Receive tailored<br/>support</p>}
              </div>
            </div>
            
            <div className="mt-8 border-l-[3px] border-white/20 pl-6">
              <p className="text-[20px] md:text-[22px] font-bold text-white/90">
                {language === 'en' ? 'Connect China & Eurasia, build a wider tomorrow' : '连接中国与欧亚 · 共创更广阔的未来'}
              </p>
              {language === 'cn' && (
                <p className="text-[14px] mt-1 text-white/50 tracking-[0.2em] uppercase">
                  A WIDER TOMORROW TOGETHER.
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-sm shadow-2xl p-8 relative z-10">
              
              <h3 className="text-[32px] md:text-[36px] font-bold text-[#0A1B3F] mb-1">{language === 'en' ? 'Corporate Membership' : '企业会员'}</h3>
              {language === 'cn' && <h4 className="text-[14px] text-gray-500 tracking-wider mb-6 uppercase">CORPORATE MEMBERSHIP</h4>}
              {language === 'en' && <div className="mb-6"></div>}
              
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-baseline text-[#F1A424]">
                  <span className="text-[28px] font-bold mr-2">RMB</span>
                  <span className="text-[64px] font-bold tracking-tighter leading-none">9,800</span>
                  <span className="text-[18px] ml-2 text-[#0A1B3F] font-bold">{language === 'en' ? '/ yr' : '/ 年'}</span>
                </div>
                {language === 'cn' && <p className="text-[14px] text-gray-400 mt-2">RMB 9,800 / 12 months</p>}
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0A1B3F] mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="text-[#0A1B3F] text-[15px] md:text-[16px] font-bold block">{language === 'en' ? 'Full Corporate Member benefits' : '完整的企业会员权益'}</span>
                    {language === 'cn' && <span className="text-gray-500 text-[12px]">Full Corporate Member benefits</span>}
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0A1B3F] mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="text-[#0A1B3F] text-[15px] md:text-[16px] font-bold block">{language === 'en' ? 'Company profile and product showcase' : '公司及产品展示'}</span>
                    {language === 'cn' && <span className="text-gray-500 text-[12px]">Company profile and product showcase</span>}
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0A1B3F] mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="text-[#0A1B3F] text-[15px] md:text-[16px] font-bold block">{language === 'en' ? 'Access to business activities and matchmaking' : '参与商务活动与项目对接'}</span>
                    {language === 'cn' && <span className="text-gray-500 text-[12px]">Access to business activities and matchmaking</span>}
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0A1B3F] mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="text-[#0A1B3F] text-[15px] md:text-[16px] font-bold block">{language === 'en' ? 'Market insights and opportunities' : '获取市场信息与合作机会'}</span>
                    {language === 'cn' && <span className="text-gray-500 text-[12px]">Market insights and opportunities</span>}
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0A1B3F] mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="text-[#0A1B3F] text-[15px] md:text-[16px] font-bold block">{language === 'en' ? 'Preferential rates for CEBC services' : '享受会员专属服务优惠'}</span>
                    {language === 'cn' && <span className="text-gray-500 text-[12px]">Preferential rates for CEBC services</span>}
                  </div>
                </li>
              </ul>

              <button 
                onClick={() => document.getElementById('application').scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#0A1B3F] text-white py-4 rounded-sm font-bold hover:bg-[#0A1B3F]/90 transition-colors flex items-center justify-center mb-4 text-[16px] md:text-[18px]"
              >
                {language === 'en' ? 'APPLY FOR CORPORATE MEMBERSHIP' : '申请成为企业会员'}
                {language === 'cn' && <span className="text-[12px] font-normal ml-3">APPLY FOR CORPORATE MEMBERSHIP</span>}
                <span className="ml-3">→</span>
              </button>
              
              <div className="text-center">
                <a href="#benefits" className="text-[14px] text-gray-500 hover:text-[#0A1B3F] transition-colors inline-flex items-center">
                  {language === 'en' ? 'View Member Benefits' : '了解会员权益详情'}
                  {language === 'cn' && <span className="text-[12px] ml-2">View Member Benefits</span>}
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
