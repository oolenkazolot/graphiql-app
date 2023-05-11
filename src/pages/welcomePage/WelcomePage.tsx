import './WelcomePage.scss'
import '../../components/Logo/Logo.scss';
import Section1 from '../../components/WecomeSections/Section1/Section1';
import TaskInfo from '../../components/WecomeSections/TaskInfo/TaskInfo';
import ThirdSection from '../../components/WecomeSections/ThirdSection/ThirdSection';
import FourthSection from '../../components/WecomeSections/FourthSection/FourthSection';
import FifthSection from '../../components/WecomeSections/FifthSection/FifthSection';

function WelcomePage() {
  
  return (
    <>
      <Section1 />
      <TaskInfo />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </>
  );
}

export default WelcomePage;
