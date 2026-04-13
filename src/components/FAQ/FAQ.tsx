import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "01",
    question: "What are the school hours at Little Learners Academy?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    id: "02",
    question: "How do you handle food allergies and dietary restrictions?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    id: "03",
    question: "Is there a uniform policy for students?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    id: "04",
    question: "What is the teacher-to-student ratio at Little Learners Academy?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    id: "05",
    question: "What extracurricular activities are available for students?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    id: "06",
    question: "How do you handle discipline and behavior management?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    id: "07",
    question: "What extracurricular activities are available for students?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    id: "08",
    question: "How do I apply for admission to Little Learners Academy?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-container">
      <div className="faq-header">
        <span className="faq-badge">Solutions For The Doubts</span>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-grid">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className={`faq-item ${openId === item.id ? 'is-active' : ''}`}
          >
            <div className="faq-question-box" onClick={() => toggleFAQ(item.id)}>
              <div className="question-content">
                {/* <span className="question-number">{item.id}</span> */}
                <span className="question-text">{item.question}</span>
              </div>
              <button className="faq-icon-btn">
                {openId === item.id ? '−' : '+'}
              </button>
            </div>

            {openId === item.id && (
              <div className="faq-answer-box">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;