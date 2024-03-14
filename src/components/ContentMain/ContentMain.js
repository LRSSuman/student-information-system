import BioSection from '../BioSection/BioSection';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import './ContentMain.css';

const ContentMain = () => {
    return (
        <div className='content-main'>
            <WelcomeSection />
            <BioSection />
        </div>
    );
};

export default ContentMain;
