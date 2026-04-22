import HeroSection from "../../SharedComponents/Hero/HeroShared"
import Benefits from "../../SharedComponents/Benefits2/BenefitsShared"
import SubjectsSection from "../../SharedComponents/sub/Subject"
import StudentSupport from "../../SharedComponents/support/StudentSupport"
import './StudentLife.css'



const subjectsData = [
  { id: 1, image: '/assets/img/sport.png', title: 'Language Arts', description: 'Reading, writing, storytelling, and communication skills.' },
  { id: 2, image: '/assets/img/festivals.png', title: 'Mathematics', description: 'Number sense, basic operations, problem-solving, and logic.' },
  { id: 3, image: '/assets/img/art.png', title: 'Science', description: 'Exploring the natural world through hands-on experiments and investigations.' },
  { id: 4, image: '/assets/img/science.png', title: 'Social Studies', description: 'Cultivating an understanding of diverse cultures and communities.' },
  { id: 5, image: '/assets/img/inter.png', title: 'Arts and Crafts', description: 'Encouraging creativity through various art forms and crafts.' },
  { id: 6, image: '/assets/img/graduation.png', title: 'Physical Education', description: 'Promoting physical fitness, coordination, and teamwork.' },
];
const StudentLife = () => {
  return (
    <div>
<HeroSection 
        badge="Academics" 
        title="Nurturing Young Minds for Success" 
        description="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
      />

<Benefits/>

<SubjectsSection 
        badge="Our Features"
        title="What Students Learn"
        description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills."
        data={subjectsData} // نمرر مصفوفة البيانات هنا
      />


 <StudentSupport />

    </div>
  )
}

export default StudentLife