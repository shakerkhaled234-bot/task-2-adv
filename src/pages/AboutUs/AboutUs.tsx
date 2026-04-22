import React, { useRef } from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
const awards = [
  { 
    id: 1, 
    title: "Outstanding Early Childhood Education Award", 
    image: "/assets/img/Icon-Container6.png", // حط رابط الصورة هون
    desc: "Presented by the National Association for the Education of Young Children (NAEYC)..." 
  },
  { 
    id: 2, 
    title: "Innovative STEAM Education Award", 
    image: "/assets/img/Icon-Container7.png", 
    desc: "Awarded by the Education Excellence Association for our pioneering efforts..." 
  },
  { 
    id: 3, 
    title: "Environmental Stewardship Award", 
    image: "/assets/img/Icon-Container8.png", 
    desc: "Received from the Green Earth Society for our dedication to environmental education." 
  },
  { 
    id: 4, 
    title: "Creative Arts Excellence", 
    image: "/assets/img/Icon-Container6.png", 
    desc: "Recognized for our artistic programs that inspire young imagination." 
  },

];

  const historyData = [
    { year: "2023", title: "Resilience and Future Horizons", desc: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow." },
    { year: "2017", title: "Innovation and Technology", desc: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students." },
    { year: "2012", title: "Expansion and Recognition", desc: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies." },
    { year: "2005", title: "Inception and Growth", desc: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth." }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
const teamMembers = [
  {
    name: "Ms. Sarah Anderson",
    img: "/assets/img/sarah.png", // تأكد من إضافة الصور في مجلد public
    qualification: "Bachelor's Degree in Early Childhood Education",
    desc: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
  },
  {
    name: "Mr. David Roberts",
    img: "/assets/img/david.png",
    qualification: "Master's Degree in Elementary Education",
    desc: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
  },
  {
    name: "Ms. Emily Hernandez",
    img: "/assets/img/emily.png",
    qualification: "Diploma in Child Psychology",
    desc: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
  },
  {
    name: "Mr. Michael Turner",
    img: "/assets/img/michael.png",
    qualification: "Bachelor's Degree in Physical Education",
    desc: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
  }
  ,
  {
    name: "Ms. Jessica Lee",
    img: "/assets/img/jessica.png",
    qualification: "Bachelor's Degree in Physical Education",
    desc: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
  }
  ,
  {
    name: "Mr. William Parker",
    img: "/assets/img/william.png",
    qualification: "Bachelor's Degree in Physical Education",
    desc: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
  }
];
  return (
    <div className="about-page-wrapper">
      {/* 1. Hero Section */}
      <div className="about-hero-container">
        <div className='about-hero'> 
          <div className="pattern-wrapper">
            {[4, 3, 2, 1].map((count, idx) => (
              <div key={idx} className="square-row">
                {[...Array(count)].map((_, i) => (
                  <div key={i} className="mini-square"><div className="inner-black"></div></div>
                ))}
              </div>
            ))}
          </div>
          <div className="about-hero-btn"><button>Overview</button></div>
          <div className="about-content-flex">
            <h1>Welcome to Little Learners Academy</h1>
            <p>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</p>
          </div>
        </div>
      </div>

      {/* 2. Mission & Vision Section */}
      <section className='mission-section-container'>
        <div className='section-title-box'>
          <button className="overview-badge">Mission & Visions</button>
          <h1>Our Mission & Visions</h1>
          <p>We are here to provide a nurturing and inclusive environment where young minds can thrive.</p>
        </div>
        <div className='mission-cards'>
          <div className='mission-item-wrapper'>
            <div className='card-header-flex'>
              <h1>Mission</h1>
              <img src="/assets/img/mission-icon.png" alt="Mission" />
            </div>
            <p>At Little Learners Academy, our mission is to inspire a passion for learning...</p>
          </div>
          <div className='mission-item-wrapper'>
            <div className='card-header-flex'>
              <h1>Vision</h1>
              <img src="/assets/img/vision-icon.png" alt="Vision" />
            </div>
            <p>Our vision is to be a beacon of educational excellence...</p>
          </div>
        </div>
      </section>

      {/* 3. Awards Slider Section */}
      <section className="awards-section">
        <div className="section-title-box">
          <button className="overview-badge">Our Achievements</button>
          <h1>Our Awards and Recognitions</h1>
          <p>Little Learners Academy takes pride in our commitment to excellence.</p>
        </div>
        <div className="slider-wrapper" ref={scrollRef}>
          {awards.map((award) => (
            <div key={award.id} className="award-card">
        <img src={award.image} alt={award.title} className="award-img" />
              <h3>{award.title}</h3>
              <p>{award.desc}</p>
            </div>
          ))}
        </div>
        <div className="awards-footer">
          <span className="more-awards">8 More Awards</span>
          <div className="slider-controls">
            <button className="arrow-btn" onClick={() => scroll('left')}>←</button>
            <button className="arrow-btn" onClick={() => scroll('right')}>→</button>
          </div>
        </div>
      </section>

      {/* 4. History Section */}
      <div className="history-container-box">
  <div className="timeline-line"></div>
  {historyData.map((item, index) => (
    <div key={index} className="history-item">
      <div className="timeline-connector">
        <div className="connector-circle"></div>
        <div className="connector-line"></div>
      </div>
      
      <div className="history-card">
        <div className="history-year-box">
          {/* إضافة النمط البرتقالي هنا */}
          <div className="year-pattern-icon">
             {[...Array(9)].map((_, i) => <div key={i} className="pattern-dot"></div>)}
          </div>
          <h2>{item.year}</h2>
        </div>
        
        <div className="history-content">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div>


      <section className="team-section">
  <div className="section-title-box">
    <button className="overview-badge">Our Teachers With Expertise</button>
    <h1>Our Team Members</h1>
    <p>At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators.</p>
  </div>

  <div className="team-grid">
    {teamMembers.map((member, index) => (
      <div key={index} className="team-card">
        {/* الهيدر: الصورة، الاسم، وأيقونة البريد */}
        <div className="team-card-header">
          <div className="member-main-info">
            <img src={member.img} alt={member.name} className="member-avatar" />
            <h2 className="member-name">{member.name}</h2>
          </div>
          <div className="mail-btn-icon">
            <span className="icon-envelope">✉</span>
          </div>
        </div>

        {/* الصندوق الداخلي للتفاصيل */}
        <div className="member-details-inner-box">
          <h4 className="member-qual">Qualification: {member.qualification}</h4>
          <p className="member-description">{member.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default AboutUs;