import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Content from './layout/content/Content';
import Sidebar from './layout/sidebar/Sidebar';
import { setToggleSidebar } from './store/Slices/sidebarSlice';

function App() {
    const dispatch = useDispatch();
    const { blur } = useSelector((state) => {
        return state.sidebar;
    });
    return (
        <div className='App'>
            <Sidebar />
            <Content />
            <div
                className={`blur-screen ${blur}`}
                onClick={() => {
                    dispatch(setToggleSidebar());
                }}
            ></div>
        </div>
    );
}

export default App;
