
import React from 'react';
import './BenefitsShared.css'; 


import icon1 from '/assets/img/Icon-Container.png';
import icon2 from '/assets/img/Icon-Container1.png';
import icon3 from '/assets/img/Icon-Container2.png';
import icon4 from '/assets/img/Icon-Container3.png';
import icon5 from '/assets/img/Icon-Container4.png';
import icon6 from '/assets/img/Icon-Container5.png';

interface Benefit {
    id: number;
    icon: string; 
    title: string;
    description: string;
}

const benefitsData: Benefit[] = [
    { id: 1, icon: icon1, title: "Holistic Learning Approach", description: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." },
    { id: 2, icon: icon2, title: "Experienced Educators", description: "Our passionate and qualified teachers create a supportive and stimulating learning environment." },
    { id: 3, icon: icon3, title: "Nurturing Environment", description: "We prioritize safety and provide a warm and caring atmosphere for every child.??" },
    { id: 4, icon: icon4, title: "Play-Based Learning", description: "We believe in the power of play to foster creativity, problem-solving skills, and imagination." },
    { id: 5, icon: icon5, title: "Individualized Attention", description: "Our small class sizes enable personalized attention, catering to each child's unique needs." },
    { id: 6, icon: icon6, title: "Parent Involvement", description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration." }
];





const Benefits: React.FC = () => {
    return (
        <section className="benefits-section">
 
            <div className="benefits-header">
                <p className="sub-title">Children Deserve Bright Future</p>
                <h2 className="main-title">Our Benefits</h2>
                <p className="description">
                    With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum...
                </p>
            </div>

            <div className="benefits-grid">
                {benefitsData.map((benefit) => (
               
                    <div key={benefit.id} className="card-container">

                        <div className="icon-wrapper">
                            <img 
                                src={benefit.icon} 
                                alt={benefit.title} 
                                className="benefit-img" 
                            />
                        </div>

                    
                        <div className="benefit-card">
                            <h3 className="card-title">{benefit.title}</h3>
                            <p className="card-description">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;