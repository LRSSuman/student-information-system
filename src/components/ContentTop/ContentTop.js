import './ContentTop.css';
import { icons, images } from '../../utils/images';
import { useDispatch } from 'react-redux';
import { setToggleSidebar } from '../../store/Slices/sidebarSlice';

const ContentTop = () => {
    const dispatch = useDispatch();
    return (
        <div className='content-top'>
            <div className='content-top-left'>
                <div
                    className='menu-icon'
                    onClick={() => dispatch(setToggleSidebar())}
                >
                    <img src={icons.menu} alt='menu' />
                </div>
                <div className='menu-txt'>Home</div>
            </div>
            <div className='content-top-right'>
                <div className='search-bar'>
                    <input type='text' placeholder=' search here...' />
                </div>
                <div className='avatar'>
                    <div className='profile-pic'>
                        <img src={images.profile} alt='profile' />
                    </div>
                    <div className='profile-name'>ALICE-DOE</div>
                    <div className='dropdown-btn'>V</div>
                    <ul className='dropdown' id='dropdown'>
                        <li>
                            <div className='dropdown-icon'>
                                <img src={icons.search} alt='search' />
                            </div>
                            <div className='dropdown-txt'>search</div>
                        </li>
                        <li>
                            <div className='dropdown-icon'>
                                <img src={icons.gear} alt='darktheme' />
                            </div>
                            <div className='dropdown-txt'>darkmode</div>
                        </li>
                        <li>
                            <div className='dropdown-icon'>
                                <img src={icons.bell} alt='notification' />
                            </div>
                            <div className='dropdown-txt'>notification</div>
                        </li>
                    </ul>
                </div>
                <div className='dark-theme-btn'>
                    <img src={icons.gear} alt='dark-theme' />
                </div>
                <div className='notification-btn'>
                    <img src={icons.bell} alt='notification' />
                </div>
            </div>
        </div>
    );
};

export default ContentTop;
