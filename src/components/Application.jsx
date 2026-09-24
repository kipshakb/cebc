import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Application = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    position: '',
    email: '',
    mobile: '',
    website: '',
    industry: '',
    markets: [],
    needs: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-[#0A1B3F]" id="application">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="bg-white p-16 rounded-[2px] shadow-2xl">
            <div className="text-[#F1A424] mb-6">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-[24px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Thank you for your application.' : '感谢您申请加入CEBC。我们的团队将审核您的申请并尽快与您联系。'}</h3>
            <p className="text-gray-500 text-[14px] mt-4">{language === 'en' ? 'Our team will review your application and contact you regarding the next steps.' : 'Thank you for your interest in joining CEBC. Our team will review your application and contact you regarding the next steps.'}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pb-20 md:pb-32 pt-12 md:pt-16 font-['Inter']" id="application">
      {/* Background Image - Shared with Pricing via bg-fixed */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/pricing_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B3F] via-[#0A1B3F]/95 to-[#0A1B3F]/95"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          <div className="lg:col-span-4 text-white">
            <h3 className="text-[32px] md:text-[42px] font-bold mb-2 tracking-tight">{language === 'en' ? 'Join CEBC' : '加入CEBC'}</h3>
            <h2 className="text-[32px] md:text-[42px] font-bold mb-6 tracking-tight leading-tight text-[#F1A424]">{language === 'en' ? 'Unlock New Opportunities' : <>开启更广阔的<br/>合作机会</>}</h2>
            {language === 'cn' && <p className="text-[14px] uppercase tracking-widest mb-10 text-white/80">JOIN CEBC<br/>UNLOCK NEW OPPORTUNITIES</p>}
            {language === 'en' && <div className="mb-10"></div>}
            
            <p className="text-[15px] mb-2 leading-[1.8] font-medium">{language === 'en' ? 'Fill in the form below. Our team will contact you to share membership benefits and the next steps.' : <>填写简要信息，申请成为CEBC会员。<br/>我们的团队将与您联系，介绍会员权益与后续流程。</>}</p>
            {language === 'cn' && (
              <p className="text-[12px] text-white/70 max-w-[300px] leading-[1.6]">
                Fill in the form below. Our team will contact you to share membership benefits and the next steps.
              </p>
            )}
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2px] shadow-2xl p-6 md:p-12">
              <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 pb-6 border-b border-gray-100">
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">MEMBERSHIP APPLICATION</h4>
                  <h3 className="text-[24px] md:text-[32px] font-bold text-[#0A1B3F] tracking-tight">{language === 'en' ? 'Apply for CEBC Membership' : '申请成为CEBC会员'}</h3>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  {language === 'cn' && <p className="text-[12px] font-bold text-gray-400 tracking-[0.2em] mb-1">连接 · 赋能 · 共建 · 共创</p>}
                  <p className="text-[9px] text-gray-400 tracking-[0.1em] uppercase">CONNECT · EMPOWER · BUILD · CREATE</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Company Name' : '公司名称'} <span className="text-[#F1A424]">*</span></label>
                    <input 
                      type="text" 
                      name="companyName" 
                      required
                      placeholder={language === 'en' ? 'Enter company name' : '请输入公司名称'}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors text-[14px]"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Contact Person' : '联系人'} <span className="text-[#F1A424]">*</span></label>
                    <input 
                      type="text" 
                      name="contactPerson" 
                      required
                      placeholder={language === 'en' ? 'Enter name' : '请输入姓名'}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors text-[14px]"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Position' : '职位'} <span className="text-[#F1A424]">*</span></label>
                    <input 
                      type="text" 
                      name="position" 
                      required
                      placeholder={language === 'en' ? 'Enter position' : '请输入职位'}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors text-[14px]"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Email' : '邮箱'} <span className="text-[#F1A424]">*</span></label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      placeholder={language === 'en' ? 'Enter email' : '请输入邮箱'}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors text-[14px]"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Mobile' : '手机'} <span className="text-[#F1A424]">*</span></label>
                    <input 
                      type="tel" 
                      name="mobile" 
                      required
                      placeholder={language === 'en' ? 'Enter mobile number' : '请输入手机号码'}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors text-[14px]"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Company Website' : '公司网站'}</label>
                    <input 
                      type="url" 
                      name="website" 
                      placeholder={language === 'en' ? 'Enter company website' : '请输入公司网站'}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors text-[14px]"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Industry' : '所属行业'}</label>
                    <select 
                      name="industry"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors text-gray-500 text-[14px]"
                      onChange={handleChange}
                      defaultValue=""
                    >
                      <option value="" disabled>{language === 'en' ? 'Select Industry' : '请选择行业'}</option>
                      <option value="manufacturing">{language === 'en' ? 'Manufacturing & Industrial' : '制造与工业'}</option>
                      <option value="energy">{language === 'en' ? 'Energy & Mining' : '能源与矿业'}</option>
                      <option value="tech">{language === 'en' ? 'Technology & Internet' : '科技与互联网'}</option>
                      <option value="finance">{language === 'en' ? 'Financial Services' : '金融服务'}</option>
                      <option value="logistics">{language === 'en' ? 'Logistics & Transportation' : '物流与交通'}</option>
                      <option value="other">{language === 'en' ? 'Other' : '其他'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'Markets of Interest' : '关注市场'}</label>
                    <select 
                      name="markets"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors text-gray-500 text-[14px]"
                      onChange={(e) => {
                        const values = Array.from(e.target.selectedOptions, option => option.value);
                        setFormData(prev => ({ ...prev, markets: values }));
                      }}
                      defaultValue={[]}
                    >
                      <option value="" disabled>{language === 'en' ? 'Select Markets' : '请选择关注市场'}</option>
                      <option value="kazakhstan">{language === 'en' ? 'Kazakhstan' : '哈萨克斯坦 (Kazakhstan)'}</option>
                      <option value="uzbekistan">{language === 'en' ? 'Uzbekistan' : '乌兹别克斯坦 (Uzbekistan)'}</option>
                      <option value="kyrgyzstan">{language === 'en' ? 'Kyrgyzstan' : '吉尔吉斯斯坦 (Kyrgyzstan)'}</option>
                      <option value="tajikistan">{language === 'en' ? 'Tajikistan' : '塔吉克斯坦 (Tajikistan)'}</option>
                      <option value="turkmenistan">{language === 'en' ? 'Turkmenistan' : '土库曼斯坦 (Turkmenistan)'}</option>
                      <option value="russia">{language === 'en' ? 'Russia' : '俄罗斯 (Russia)'}</option>
                      <option value="belarus">{language === 'en' ? 'Belarus' : '白俄罗斯 (Belarus)'}</option>
                      <option value="caucasus">{language === 'en' ? 'Caucasus' : '高加索地区 (Caucasus)'}</option>
                      <option value="other">{language === 'en' ? 'Other Eurasian Markets' : '其他欧亚市场'}</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-[13px] font-bold text-[#0A1B3F] mb-2">{language === 'en' ? 'What are you looking for in Eurasia?' : '您在欧亚地区的主要需求'}</label>
                  <div className="relative">
                    <textarea 
                      name="needs"
                      maxLength={300}
                      rows="4"
                      placeholder={language === 'en' ? 'Briefly describe your needs (e.g., finding partners, market research, projects, etc.)' : '请简单描述您的需求（如：寻找合作伙伴、了解市场、参与项目等）'}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#0A1B3F] focus:border-[#0A1B3F] transition-colors resize-none text-[14px]"
                      onChange={handleChange}
                    ></textarea>
                    <div className="absolute bottom-3 right-3 text-[11px] text-gray-400 font-medium">
                      {formData.needs.length}/300
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#0A1B3F] text-white py-4 rounded-[2px] font-bold hover:bg-[#0A1B3F]/90 transition-colors flex items-center justify-center text-[14px] tracking-wide"
                  >
                    {language === 'en' ? 'SUBMIT APPLICATION' : '提交申请'}
                    {language === 'cn' && <span className="text-[10px] font-normal ml-2">SUBMIT APPLICATION</span>}
                    <span className="ml-2">→</span>
                  </button>
                  
                  <div className="text-center mt-6">
                    <p className="text-[13px] font-medium text-gray-500">{language === 'en' ? 'Our team will review your application and get back to you shortly.' : '我们将审核您的申请并尽快与您联系。'}</p>
                    {language === 'cn' && <p className="text-[11px] text-gray-400 mt-1">Our team will review your application and get back to you shortly.</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Application;
