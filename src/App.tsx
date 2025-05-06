import './style/reset.css';
import './style/App.scss';
import Header from './component/Header/Header';
import { useResizeListener } from './hooks/useResizeListener';
import MainWrapper from './component/Wrapper/MainWrapper/mainWrapper';
import TitleSection from './component/Section/Title/TiitleSection';
import StackInfo from './component/Section/StackInfo/StackComponent';
import EducationInfo from './component/Section/EducationInfo/Education';
import WelcomeSection from './component/Section/Welcome/WelcomeSection';
import ProjectInfo from './component/Section/ProjectInfo/ProjectInfo';
import MouseCircle from './component/Animate/Mouse/MouseCircle';
import Footer from './component/Footer/footer';

const App = () => {
  useResizeListener();

  return (
    <>
      <MouseCircle/>
      <Header/>

      <MainWrapper>
        <WelcomeSection/>
        <TitleSection/> 
        <StackInfo/>
        <EducationInfo/>
        <ProjectInfo/>
      </MainWrapper>
      
      <Footer/>
    </>    
  );
};

export default App;