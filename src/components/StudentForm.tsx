import React, { useState } from 'react';
import './StudentForm.css';

// استيراد الأيقونات كصور من مجلد assets
import facebookIcon from '/assets/img/Button.png';
import twitterIcon from '/assets/img/Button1.png';
import linkedinIcon from '/assets/img/Button2.png';

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  studentAge: string;
  program: string;
  message: string;
}

const StudentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    studentAge: '',
    program: '',
    message: '',
  });

  // معالج تغيير المدخلات باستخدام النوع المخصص لكل عنصر
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // معالج الإرسال باستخدام النوع الحديث لتجنب التحذير Deprecated
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('بيانات النموذج المرسلة:', formData);
  };

  return (
    <section className="student-form-section">
      <div className="form-container">
        <header className="form-header">
          <span className="form-badge">Contact Form</span>
          <h2 className="form-title">Student Information</h2>
          <p className="form-description">
            If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs.
          </p>
        </header>

        <div className="form-card">
          {/* قسم الأيقونات العلوية */}
          <div className="social-float-icons">
            <div className="social-box"><img src={facebookIcon} alt="FB" /></div>
            <div className="social-box"><img src={twitterIcon} alt="TW" /></div>
            <div className="social-box"><img src={linkedinIcon} alt="LI" /></div>
          </div>

          <form onSubmit={handleSubmit} className="actual-form">
            <div className="form-grid">
              <div className="input-field">
                <label>Parent Name</label>
                <input
                  type="text"
                  name="parentName"
                  placeholder="Enter Parent Name"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label>Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  placeholder="Enter Student Name"
                  value={formData.studentName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label>Student Age</label>
                <input
                  type="text"
                  name="studentAge"
                  placeholder="Enter Student Age"
                  value={formData.studentAge}
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label>Program of Interest</label>
                <div className="select-container">
                  <select name="program" value={formData.program} onChange={handleChange}>
                    <option value="">Select Program</option>
                    <option value="preschool">Preschool</option>
                    <option value="kindergarten">Kindergarten</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input-field full-width">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Enter your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StudentForm;