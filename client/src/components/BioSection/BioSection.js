import './BioSection.css';
import PersonalDetails from '../PersonalDetails/PersonalDetails';

import React, { useEffect } from 'react';
import YourProfile from '../YourProfile/YourProfile';
import { useDispatch } from 'react-redux';
import { setLoginPage } from '../../store/Slices/sidebarSlice';

const BioSection = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoginPage(false));
    }, []);
    return (
        <div className='bio-section'>
            <span className='bio-heading'>Your Profile</span>
            <YourProfile />
            <div className='bio-data'>
                <div className='bio-data-heading'>Personal Details</div>
                <PersonalDetails />
            </div>
        </div>
    );
};

export default BioSection;
