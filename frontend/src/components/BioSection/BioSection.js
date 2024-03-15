import './BioSection.css';
import PersonalDetails from '../PersonalDetails/PersonalDetails';

import React from 'react';
import YourProfile from '../YourProfile/YourProfile';

const BioSection = () => {
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
