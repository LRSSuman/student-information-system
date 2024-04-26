// import {
//     yourProfile,
//     yourProfileStudent,
//     yourProfileTeacher,
// } from '../../data/data';
import { useEffect, useState } from 'react';
import './YourProfile.css';
import { getRoutePath } from '../../utils/getRoutePath';
import { useSelector } from 'react-redux';

const YourProfile = () => {
    // const [yourProfile, setYourProfile] = useState({});
    // useEffect(() => {
    //     if (getRoutePath() === '/student/home') {
    //         setYourProfile(yourProfileStudent);
    //     } else if (getRoutePath() === '/teacher/home') {
    //         setYourProfile(yourProfileTeacher);
    //     }
    // }, []);

    const { yourProfile } = useSelector((state) => {
        return state.homeData;
    });
    return (
        <div className='bio-pic'>
            <div className='bio-profile-pic'>
                <img
                    src={`http://localhost:8000/img/${yourProfile.image}`}
                    alt={yourProfile.alt}
                />
            </div>
            <div className='profile-txt'>
                <span>{yourProfile.name}</span>
                <span>{yourProfile.rollNo}</span>
            </div>
        </div>
    );
};

export default YourProfile;
