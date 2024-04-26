import './Sidebar.css';
import { icons, images } from '../../utils/images';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setNavlinks,
    setSidebarClose,
    setToggleSidebar,
} from '../../store/Slices/sidebarSlice';
import { NavLink } from 'react-router-dom';
import { setAdminRole } from '../../store/Slices/adminSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const [sidebarToggleClass, setSidebarToggleClass] = useState('');
    // const [navLinks, setNavLinks] = useSelector([]);

    const { toggleSidebar, isSidebarClose, navLinks } = useSelector((state) => {
        return state.sidebar;
    });

    useEffect(() => {
        dispatch(setNavlinks());
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1079 && window.innerWidth <= 1080) {
                dispatch(setSidebarClose(true));
            } else if (window.innerWidth >= 1081 && window.innerWidth <= 1082) {
                dispatch(setSidebarClose(false));
            }
        });
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1080) {
            dispatch(setSidebarClose(true));
        }
    }, []);

    useEffect(() => {
        if (toggleSidebar && !isSidebarClose) {
            setSidebarToggleClass('toggle-sidebar');
        } else if (toggleSidebar && isSidebarClose) {
            setSidebarToggleClass('sidebar-open');
        } else {
            setSidebarToggleClass('');
        }
    }, [toggleSidebar]);

    return (
        <div className={`sidebar ${sidebarToggleClass}`}>
            <div
                className='close'
                onClick={() => {
                    dispatch(setToggleSidebar());
                }}
            >
                <img src={icons.close} alt='close' />
            </div>
            <div className='logo'>
                <div className='logo-img'>
                    <img src={images.logo} alt='met' />
                </div>
                <span className='logo-txt'>MET</span>
            </div>
            <div className='nav-links'>
                <ul>
                    {navLinks.map((navlink) => {
                        return (
                            <li
                                key={navlink.id}
                                onClick={() => {
                                    dispatch(setAdminRole({ default: true }));
                                }}
                            >
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive ? 'active' : null;
                                    }}
                                    to={navlink.navigation}
                                >
                                    {navlink.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
