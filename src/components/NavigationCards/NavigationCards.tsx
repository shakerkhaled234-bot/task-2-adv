import React from 'react';
import './NavigationCards.css';

interface NavigationCardData {
  id: number;
  title: string;
  description: string;
  link: string;
}

const cardsData: NavigationCardData[] = [
  {
    id: 1,
    title: "About Us",
    description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    link: "#"
  },
  {
    id: 2,
    title: "Academics",
    description: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    link: "#"
  },
  {
    id: 3,
    title: "Student Life",
    description: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    link: "#"
  },
  {
    id: 4,
    title: "Admissions",
    description: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    link: "#"
  }
];

const NavigationCards: React.FC = () => {
  return (
    <section className="nav-cards-section">
      <div className="nav-cards-header">
        <span className="explore-badge">Explore More</span>
        <h1>Navigate through our Pages</h1>
        <p>
          Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school.
        </p>
      </div>

      <div className="nav-cards-grid">
        {cardsData.map((card) => (
          <div key={card.id} className="nav-custom-card">
            <h2>{card.title}</h2>
            
           <div className="orange-divider">
  <span className="dot"></span>
  <span className="line"></span>
  <span className="line"></span>
  <span className="line"></span>
  <span className="line"></span>
  <span className="line"></span>
  <span className="dot"></span>
</div>

            <p className="card-desc">{card.description}</p>
            
            <button className="learn-more-button">
              Learn More <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NavigationCards;