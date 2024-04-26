import './StudentHomePage.css';
import BioSection from '../../../components/BioSection/BioSection';
import WelcomeSection from '../../../components/WelcomeSection/WelcomeSection';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHomeData } from '../../../store/Slices/homeDataSlice';

const StudentHomePage = () => {
    const dispatch = useDispatch();
    const studentData = JSON.parse(sessionStorage.getItem('homeData'));
    useEffect(() => {
        dispatch(setHomeData({ student: true, data: studentData }));
    }, []);
    return (
        <div className='content-main'>
            <WelcomeSection />
            <BioSection />
        </div>
    );
};

export default StudentHomePage;
