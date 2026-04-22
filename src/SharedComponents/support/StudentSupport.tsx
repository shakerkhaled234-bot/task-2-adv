import React from 'react';
import './StudentSupport.css';

const StudentSupport: React.FC = () => {
  const supportData = [
    {
      title: "Counseling",
      description: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
      image: "/assets/img/light.png" // استبدل الرابط بصورتك
    },
    {
      title: "Learning Support",
      description: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
      image: "/assets/img/book.png" // استبدل الرابط بصورتك
    },
    {
      title: "Parent-Teacher Collaboration",
      description: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
      image: "/assets/img/parent.png" // استبدل الرابط بصورتك
    }
  ];

  return (
    <section className="support-container">
      <div className="badge-wrapper">
         <span className="badge-text">Our Achievements</span>
      </div>
      <h2 className="section-title">Student Support</h2>
      <p className="section-description">
        At Little Learners Academy, we are committed to providing a supportive and nurturing environment 
        that meets the unique needs of each student. Our student support services include
      </p>

      <div className="cards-grid">
        {supportData.map((item, index) => (
          <div className="support-card" key={index}>
            <div className="icon-box">
               {/* استبدال الأيقونة بصورة */}
               <img src={item.image} alt={item.title} className="support-card-img" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentSupport;