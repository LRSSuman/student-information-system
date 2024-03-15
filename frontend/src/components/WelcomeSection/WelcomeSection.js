import Card from '../Card/Card';
import './WelcomeSection.css';
const WelcomeSection = () => {
    return (
        <div>
            <div className='welcome-section'>
                <span className='welcome-txt'>Welcome ALICE-DOE!</span>
                <Card />
            </div>
        </div>
    );
};

export default WelcomeSection;
