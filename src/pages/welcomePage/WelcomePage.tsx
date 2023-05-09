import './WelcomePage.scss'
import '../../components/Logo/Logo.scss';
import Section1 from '../../components/WecomeSections/Section1/Section1';
import TaskInfo from '../../components/WecomeSections/TaskInfo/TaskInfo';

function WelcomePage() {
  
  return (
    <>
      <Section1 />
      <TaskInfo />
    </>
  );
}

export default WelcomePage;
