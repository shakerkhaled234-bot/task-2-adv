// src/components/Hero/Hero.tsx
import React from 'react';
import './Hero.css'; 



const Hero: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                
   
                <div className="hero-image-wrapper">
              
                    <div className="image-inner-container">
                        <img src="/assets/img/Image-Container.png" alt="Children in beanie hats smiling" />
                      
                        <div className="dots-overlay" aria-hidden="true"></div>
                    </div>
                </div>

    
                <div className="hero-content">
              
                    <p className="sub-title">Welcome to Little Learners Academy</p>
                    
            
                    <h1 className="main-title">
                        Where Young Minds Blossom and <span className="highlight-text">Dreams Take Flight.</span>
                    </h1>
                    
               
                    <p className="description">
                        Our kinder garden school provides a nurturing and stimulating environment, 
                        fostering a love for learning that lasts a lifetime. Join us as we 
                        embark on an exciting educational journey together!
                    </p>

                    <div className="stats-card">
                        <div className="stat-item">
                            <span className="stat-number">+7000</span>
                            <span className="stat-label">Students Passed Out</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">+37</span>
                            <span className="stat-label">Awards & Recognitions</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">+15</span>
                            <span className="stat-label">Experience Educators</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;