import './StudentHomePage.css';
import BioSection from '../../../components/BioSection/BioSection';
import WelcomeSection from '../../../components/WelcomeSection/WelcomeSection';

const StudentHomePage = () => {
    return (
        <div className='content-main'>
            <WelcomeSection />
            <BioSection />
        </div>
    );
};

export default StudentHomePage;
