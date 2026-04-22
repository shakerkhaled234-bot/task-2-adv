import React, { useState } from 'react';
import HeroSection from '../../SharedComponents/Hero/HeroShared';
import Benefits from '../../SharedComponents/Benefits2/BenefitsShared';
import './Academics.css';

interface Subject {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  images: string[];
}

const subjectsData: Subject[] = [
  { id: 1, image: '/assets/img/Image.png', title: 'Language Arts', description: 'Reading, writing, storytelling, and communication skills.' },
  { id: 2, image: '/assets/img/Image1.png', title: 'Mathematics', description: 'Number sense, basic operations, problem-solving, and logic.' },
  { id: 3, image: '/assets/img/Image2.png', title: 'Science', description: 'Exploring the natural world through hands-on experiments and investigations.' },
  { id: 4, image: '/assets/img/Image3.png', title: 'Social Studies', description: 'Cultivating an understanding of diverse cultures and communities.' },
  { id: 5, image: '/assets/img/Image4.png', title: 'Arts and Crafts', description: 'Encouraging creativity through various art forms and crafts.' },
  { id: 6, image: '/assets/img/Image5.png', title: 'Physical Education', description: 'Promoting physical fitness, coordination, and teamwork.' },
];

const galleryData: GalleryItem[] = [
  {
    id: 1,
    category: "Classrooms",
    title: "Classrooms",
    description: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: [
      "/assets/img/classroom.png",
      "/assets/img/classroom2.png",
      "/assets/img/classroom3.png",
      "/assets/img/classroom4.png",
      "/assets/img/classroom.png",
      "/assets/img/classroom2.png"
    ]
  },
  {
    id: 2,
    category: "Library",
    title: "Library",
    description: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: [
      "/assets/img/library.png",
      "/assets/img/library2.png",
      "/assets/img/library3.png",
      "/assets/img/library4.png",
      "/assets/img/library.png",
      "/assets/img/library2.png"
    ]
  }
  ,
  {
    id: 2,
    category: "Science Lab",
    title: "Science Lab",
    description: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: [
      "/assets/img/sciencelab.png",
      "/assets/img/science2.png",
      "/assets/img/science3.png",
      "/assets/img/science4.png",
      "/assets/img/sciencelab.png",
      "/assets/img/science2.png"
    ]
  }
  ,
  {
    id: 2,
    category: "Computer Lab",
    title: "Computer Lab",
    description: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    images: [
      "/assets/img/computer.png",
      "/assets/img/computer2.png",
      "/assets/img/computer3.png",
      "/assets/img/computer4.png",
       "/assets/img/computer.png",
        "/assets/img/computer2.png"
    ]
  }
  ,
  {
    id: 2,
    category: "Garden and Nature Area",
    title: "Garden and Nature Area",
    description: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: [
      "/assets/img/garden.png",
      "/assets/img/garden2.png",
      "/assets/img/garden3.png",
      "/assets/img/garden4.png",
      "/assets/img/garden.png",
      "/assets/img/garden2.png"
    ]
  }

];

const RoomSection: React.FC<{ item: GalleryItem }> = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = item.images.length;
  const visibleImages = 4; 
  const maxIndex = Math.max(0, totalImages - visibleImages);

  const nextSlide = () => setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div className="room-gallery-card">
      <div className="room-gallery-viewport">
        <div 
          className="room-gallery-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
        >
          {item.images.map((img, idx) => (
            <div key={idx} className="room-gallery-item">
              <img src={img} alt={`${item.title} ${idx}`} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="room-gallery-footer">
        <div className="room-gallery-info">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <div className="room-gallery-nav">
          <button className="room-gallery-btn" onClick={prevSlide}>←</button>
          <button className="room-gallery-btn" onClick={nextSlide}>→</button>
        </div>
      </div>
    </div>
  );
};

const Academics: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Classrooms", "Library", "Science Lab", "Computer Lab", "Garden"];

  const filteredGallery = activeFilter === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category.includes(activeFilter) || item.title.includes(activeFilter));

  return (
    <div className="academics-page">
      <HeroSection 
        badge="Academics" 
        title="Nurturing Young Minds for Success" 
        description="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <Benefits />

      <section className="learn-section">
        <div className="learn-header">
          <button className="features-badge">Our Features</button>
          <h2 className="main-title">What Students Learn</h2>
        </div>
        <div className="subjects-grid">
          {subjectsData.map((subject) => (
            <div key={subject.id} className="subject-card">
              <div className="image-stack-container">
                <div className="vertical-rectangle"></div>
                <div className="card-image-wrapper">
                  <img src={subject.image} alt={subject.title} className="subject-image" />
                </div>
              </div>
              <h3 className="card-title">{subject.title}</h3>
              <p className="card-description">{subject.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="learn-header">
          <button className="features-badge">Our Gallery</button>
          <h2 className="main-title">Our Rooms Gallery</h2>
        </div>

        <div className="filter-bar">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-list">
          {filteredGallery.map(item => (
            <RoomSection key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Academics;