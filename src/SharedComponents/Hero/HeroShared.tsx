import React from 'react';
import './HeroShared.css'; 

interface HeroProps {
  badge: string;
  title: string;
  description: string;
  extraContent?: React.ReactNode; // إضافة هذا السطر لاستقبال محتوى إضافي اختيارياً
}

const HeroSection: React.FC<HeroProps> = ({ badge, title, description, extraContent }) => {
  // مصفوفة تمثل ترتيب الألوان بناءً على الصورة (0 للأسود، 1 للبرتقالي المقطع)
  const pattern = [
    [0, 1, 0, 1],
    [1, 0, 1],
    [0, 1],
    [1]
  ];

  return (
    <div className="common-hero-container">
      {/* 1. المربعات في الزاوية */}
      <div className="pattern-wrapper">
        {pattern.map((row, rowIdx) => (
          <div key={rowIdx} className="square-row">
            {/* تم استخدام slice().reverse() هنا لضمان اتجاه الظل البرتقالي كما طلبته سابقاً */}
            {row.slice().reverse().map((type, colIdx) => (
              <div 
                key={colIdx} 
                className={`mini-square ${type === 0 ? 'black-sq' : 'peach-sq'}`}
              >
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 2. الحاوية الرئيسية للمحتوى (Layout) */}
      <div className="hero-main-content">
        
        {/* الجهة اليسرى: تجمع الزر والعنوان لإبعادهم معاً عن المربعات */}
        <div className="hero-left-side">
          <div className="hero-badge-box">
            <button className="overview-badge">{badge}</button>
          </div>
          <h1 className="hero-title">{title}</h1>
        </div>

        {/* الجهة اليمنى: الفقرة الوصفية + الإضافة الجديدة */}
        <div className="hero-description-side">
          <p>{description}</p>
          
          {/* الإضافة: إذا تم تمرير extraContent (مثل كروت التواصل) ستظهر هنا تحت الـ p */}
          {extraContent && (
            <div className="hero-extra-content-wrapper">
              {extraContent}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default HeroSection;