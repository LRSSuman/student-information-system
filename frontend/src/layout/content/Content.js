import './Content.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from '../../routes/Router';
import Header from '../Header/Header';
import { getRoutePath } from '../../utils/getRoutePath';

const Content = () => {
    const dispatch = useDispatch();
    const { scroll } = useSelector((state) => {
        return state.sidebar;
    });
    return (
        <div className={`main-content ${scroll}`}>
            {getRoutePath() === '/' ? null : <Header />}
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
};

export default Content;
