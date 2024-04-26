import React from 'react';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import BioSection from '../BioSection/BioSection';

const View = ({ viewData }) => {
    return (
        <div className='content-main'>
            <WelcomeSection />
            <BioSection />
        </div>
    );
};

export default View;
