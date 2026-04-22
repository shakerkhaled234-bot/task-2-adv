import React from 'react';
import './Subject.css'; // تأكد من نقل التنسيقات الخاصة به لهذا الملف

// تعريف واجهة البيانات التي يتوقعها المكون
interface Subject {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface SubjectsSectionProps {
  badge: string;
  title: string;
  description: string;
  data: Subject[];
}

const SubjectsSection: React.FC<SubjectsSectionProps> = ({ badge, title, description, data }) => {
  return (
    <section className="learn-section">
      <div className="learn-header">
        <button className="features-badge">{badge}</button>
        <h2 className="main-title">{title}</h2>
        <p className="description">{description}</p>
      </div>

      <div className="subjects-grid">
        {data.map((subject) => (
          <div key={subject.id} className="subject-card">
            <div className="image-stack-container">
              <div className="vertical-rectangle"></div>
              <div className="card-image-wrapper">
                <img src={subject.image} alt={subject.title} className="subject-image" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{subject.title}</h3>
              <p className="card-description">{subject.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubjectsSection;