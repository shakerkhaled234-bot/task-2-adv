import HeroSection from "../../SharedComponents/Hero/HeroShared";
import './Admission.css';

// تعريف الواجهات (Interfaces) لضمان كتابة كود TypeScript سليم
interface Step {
  id: string;
  title: string;
  description: string;
}

interface FeeRow {
  program: string;
  ageGroup: string;
  tuition: string;
  registration: string;
  activity: string;
}

interface AdditionalService {
  service: string;
  cost: string;
}

// البيانات (Data)
const feeData: FeeRow[] = [
  { program: 'Nursery', ageGroup: '2 - 3 Years', tuition: '$1,686', registration: '$162', activity: '$12' },
  { program: 'Pre - Kindergartens', ageGroup: '3 - 4 Years', tuition: '$2,686', registration: '$220', activity: '$16' },
  { program: 'Kindergarten', ageGroup: '4 - 5 Years', tuition: '$3,686', registration: '$340', activity: '$20' },
];

const additionalServices: AdditionalService[] = [
  { service: 'Before and After-School Care', cost: '$120 / per month' },
  { service: 'Language Immersion Program', cost: '$60 / per semester' },
  { service: 'Transportation (optional)', cost: '$80 / per month' },
];

const steps: Step[] = [
  { id: '01', title: 'Inquiry', description: 'Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.' },
  { id: '02', title: 'School Tour', description: 'Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.' },
  { id: '03', title: 'Application Form', description: 'Complete the application form and provide the required documents, including your child\'s birth certificate, medical records, and any previous academic records (if applicable).' },
  { id: '04', title: 'Parent Interview', description: 'We value parent engagement, and a meeting with our admissions team allows us to understand your child\'s needs and ensure Little Learners Academy aligns with your family\'s expectations.' },
  { id: '05', title: 'Student Assessment', description: 'For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.' },
  { id: '06', title: 'Acceptance', description: 'Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.' },
];

const Admissions = () => {
  return (
    <div className="admissions-page">
      {/* قسم الهيرو المشترك - الآن سيعمل بشكل مستقل وبألوان سادة */}
      <HeroSection 
        badge="Admissions" 
        title="Nurturing Young Minds for Success" 
        description="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />

      {/* قسم خطوات القبول */}
      <section className="admission-container">
        <div className="admission-header">
          <span className="process-badge">Process</span>
          <h2 className="admission-title">Admission Process</h2>
          <p className="admission-subtitle">
            Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-card-wrapper">
              <div className="step-indicator">
                <div className="step-number-box">{step.id}</div>
                <div className="connector-line"></div>
              </div>
              
              <div className="step-card">
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم هيكل الرسوم */}
      <section className="fee-container">
        <div className="fee-header">
          <span className="features-badge">Our Features</span>
          <h2 className="fee-title">Fee Structure</h2>
          <p className="fee-description">
            Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. 
            The fees vary based on the program, age group, and any additional services chosen.
          </p>
        </div>

        <div className="table-wrapper">
          <table className="fee-table">
            <thead>
              <tr>
                <th>Program</th>
                <th>Age Group</th>
                <th>Annual Tuition</th>
                <th>Registration Fee</th>
                <th>Activity Fee</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((row, index) => (
                <tr key={index}>
                  <td data-label="Program">{row.program}</td>
                  <td data-label="Age Group">{row.ageGroup}</td>
                  <td data-label="Annual Tuition">{row.tuition}</td>
                  <td data-label="Registration Fee">{row.registration}</td>
                  <td data-label="Activity Fee">{row.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* الجدول الثاني للخدمات الإضافية */}
        <div className="table-wrapper secondary-table">
          <div className="table-header-box">
            <h3>Additional Services</h3>
          </div>
          <table className="fee-table">
            <tbody>
              {additionalServices.map((row, index) => (
                <tr key={index}>
                  <td className="service-name">{row.service}</td>
                  <td className="service-cost">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Admissions;