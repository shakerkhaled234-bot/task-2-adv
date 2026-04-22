import React from 'react';
// تأكد أن المسار هنا صحيح مئة بالمئة حسب مجلداتك
import HeroSection from "../../SharedComponents/Hero/HeroShared";
import StudentForm from "../../components/StudentForm";
import './Contact.css'

// استيراد الصور (تأكد من وجود الصور في المسارات الصحيحة)
import MailIcon from '/assets/img/mail.png';
import PhoneIcon from '/assets/img/phone.png';
import LocationIcon from '/assets/img/location.png';
import ClockIcon from '/assets/img/time.png';

const Contact = () => {
  // تعريف المحتوى الإضافي الذي سيظهر تحت الوصف
  const contactInfo = (
    <div className="contact-grid">
      <div className="contact-item">
        <div className="contact-image-wrapper">
          <img src={MailIcon} alt="Email" />
        </div>
        <span>hello@littlelearners.com</span>
      </div>

      <div className="contact-item">
        <div className="contact-image-wrapper">
          <img src={PhoneIcon} alt="Phone" />
        </div>
        <span>+91 91813 23 2309</span>
      </div>

      <div className="contact-item">
        <div className="contact-image-wrapper">
          <img src={LocationIcon} alt="Location" />
        </div>
        <span>Somewhere in the World</span>
      </div>

      <div className="contact-item">
        <div className="contact-image-wrapper">
          <img src={ClockIcon} alt="Clock" />
        </div>
        <span>Office Hours - 9am - 6pm</span>
      </div>
    </div>
  );

  return (
    <div>
      {/* هنا نمرر الـ contactInfo لبروب extraContent */}
      <HeroSection 
        badge="Contact Us" 
        title="Connect With Us" 
        description="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        extraContent={contactInfo} 
      />

      <StudentForm />
    </div>
  );
};

export default Contact;