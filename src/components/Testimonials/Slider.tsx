import React, { useState } from 'react';
import './Slider.css';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Jennifer B", image: "/assets/img/Profile-Container.png", content: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
  { id: 2, name: "David K", image: "/assets/img/Profile-Container1.png", content: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment." },
  { id: 3, name: "Emily L", image: "/assets/img/Profile-Container2.png", content: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the teachers." },
  { id: 4, name: "Michael R", image: "/assets/img/Profile-Container.png", content: "The facilities are top-notch and the curriculum is very well-balanced for early childhood development." },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : true;
  const maxIndex = isDesktop ? testimonials.length - 3 : testimonials.length - 1;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="slider-section">
      <span className="tag">Their Happy Words</span>
      <h2>Our Testimonials</h2>
      <p>Our testimonials are heartfelt reflections of the nurturing environment we provide.</p>
<div className="slider-main-wrapper">
  
  <div className="slider-viewport">
    <div 
      className="slider-track" 
      style={{ transform: `translateX(-${currentIndex * (isDesktop ? 33.333 + 1.7 : 100 + 5.5)}%)` }}
    >
      {testimonials.map((item) => (
        <div className="card-item" key={item.id}>
          <div className="card-inner">
            <img src={item.image} alt={item.name} className="profile-img" />
            <h4>{item.name}</h4>
            <div className="stars">★★★★★</div>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>


  <div className="navigation-controls">
    <button className="nav-button prev" onClick={handlePrev}>←</button>
    <button className="nav-button next" onClick={handleNext}>→</button>
  </div>
</div>
    </div>
  );
};

export default TestimonialSlider;