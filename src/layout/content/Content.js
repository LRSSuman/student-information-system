import './Content.css';
import ContentMain from '../../components/ContentMain/ContentMain';
import ContentTop from '../../components/ContentTop/ContentTop';
import { useDispatch, useSelector } from 'react-redux';

const Content = () => {
    const dispatch = useDispatch();
    const { scroll } = useSelector((state) => {
        return state.sidebar;
    });
    return (
        <div className={`main-content ${scroll}`}>
            <ContentTop />
            <ContentMain />
        </div>
    );
};

export default Content;
