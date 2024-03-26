import { images } from '../../utils/images';
import { useState } from 'react';
import './AuthendicationPage.css';
import AuthendicationForm from '../../components/AuthendicationForm/AuthendicationForm';
const AuthendicationPage = () => {
    const [isFaculty, setIsFaculty] = useState(false);
    return (
        <div className='authendication-page'>
            <div className='authendication-page-container'>
                <div className='authendication-page-container-txt'>
                    <div className='authendication-logo'>
                        <div className='authendication-logo-img'>
                            <img src={images.logo} alt='logo' />
                        </div>
                        <div className='authendication-logo-txt'>
                            <span>C.S.E</span> <br />
                            <span>MET ENGINEERING COLLEGE</span>
                        </div>
                    </div>
                </div>
                <div className='authendication-page-container-form'>
                    <AuthendicationForm isFaculty={isFaculty} />
                    <div
                        className='login-txt'
                        onClick={() => setIsFaculty(!isFaculty)}
                    >
                        {isFaculty
                            ? 'Login as Student ?'
                            : 'Login as Faculty ?'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthendicationPage;
