import { useDispatch } from 'react-redux';
import './PageNotFound.css';
import { setPageNotFound } from '../../store/Slices/pageNotFoundSlice';
import { useEffect } from 'react';

const PageNotFound = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageNotFound());
    }, []);
    return <div>404 error</div>;
};

export default PageNotFound;
