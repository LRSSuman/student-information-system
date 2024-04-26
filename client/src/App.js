import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Content from './layout/content/Content';
import Sidebar from './layout/sidebar/Sidebar';
import { setLoginPage, setToggleSidebar } from './store/Slices/sidebarSlice';
import { useEffect } from 'react';
import { getRoutePath } from './utils/getRoutePath';
import { BrowserRouter } from 'react-router-dom';

function App() {
    const dispatch = useDispatch();
    const path = getRoutePath();
    useEffect(() => {
        if (path !== '/') {
            dispatch(setLoginPage(false));
        }
    }, []);
    const { blur, scroll, loginPage } = useSelector((state) => {
        return state.sidebar;
    });
    useEffect(() => {
        if (scroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [scroll]);

    const { pageNotFound } = useSelector((state) => {
        return state.pageNotFound;
    });
    return (
        <div className='app'>
            <BrowserRouter>
                {loginPage == true ? null : pageNotFound ? null : <Sidebar />}
                <Content />
                <div
                    className={`blur-screen ${blur}`}
                    onClick={() => {
                        dispatch(setToggleSidebar());
                    }}
                ></div>
            </BrowserRouter>
        </div>
    );
}

export default App;
