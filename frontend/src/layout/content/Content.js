import './Content.css';
import { useDispatch, useSelector } from 'react-redux';
import Router from '../../routes/Router';
import Header from '../Header/Header';
import { getRoutePath } from '../../utils/getRoutePath';

const Content = () => {
    const dispatch = useDispatch();
    const { scroll } = useSelector((state) => {
        return state.sidebar;
    });
    const { pageNotFound } = useSelector((state) => {
        return state.pageNotFound;
    });

    return (
        <div className={`main-content ${scroll}`}>
            {getRoutePath() === '/' ? null : pageNotFound ? null : <Header />}
            <Router />
        </div>
    );
};

export default Content;
