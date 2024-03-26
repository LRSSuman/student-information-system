import { useEffect, useState } from 'react';
import './PersonalDetails.css';
import {
    personalDetails,
    studentPersonalDetails,
    teacherPersonalDetails,
} from '../../data/data';
import { getRoutePath } from '../../utils/getRoutePath';

const PersonalDetails = () => {
    const [personalDetails, setPersonalDetails] = useState([]);
    useEffect(() => {
        if (getRoutePath() === '/student/home') {
            setPersonalDetails(studentPersonalDetails);
        } else if (getRoutePath() === '/teacher/home') {
            setPersonalDetails(teacherPersonalDetails);
        }
    }, []);
    return (
        <div className='personal-details'>
            {personalDetails.map((details) => {
                return (
                    <div className='personal-data' key={details.id}>
                        <div className='title'>{details.title} :&nbsp;</div>
                        <div className='data'>{details.data}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default PersonalDetails;
