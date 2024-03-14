import { yourProfile } from '../../data/data';
import './YourProfile.css';

const YourProfile = () => {
    return (
        <div className='bio-pic'>
            <div className='bio-profile-pic'>
                <img src={yourProfile.dp} alt={yourProfile.alt} />
            </div>
            <div className='profile-txt'>
                <span>{yourProfile.name}</span>
                <span>{yourProfile.rollNo}</span>
            </div>
        </div>
    );
};

export default YourProfile;
