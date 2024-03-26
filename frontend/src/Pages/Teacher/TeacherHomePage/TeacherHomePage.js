import './TeacherHomePage.css';
import BioSection from '../../../components/BioSection/BioSection';
import WelcomeSection from '../../../components/WelcomeSection/WelcomeSection';

const TeacherHomePage = () => {
    return (
        <div className='content-main'>
            <WelcomeSection />
            <BioSection />
        </div>
    );
};

export default TeacherHomePage;
