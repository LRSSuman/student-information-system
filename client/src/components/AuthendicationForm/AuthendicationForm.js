import './AuthendicationForm.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setLoginPage, setNavlinks } from '../../store/Slices/sidebarSlice';
import { useDispatch } from 'react-redux';
import {
    studentNavigationLinks,
    teacherNavigationLinks,
    adminNavigationLinks,
} from '../../data/data';
import { setHomeData } from '../../store/Slices/homeDataSlice';
import { setIsAdmin } from '../../store/Slices/adminSlice';

const AuthendicationForm = ({ isFaculty }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setLoginPage(true));
    });
    const [authData, setAuthData] = useState({
        identity: '',
        password: '',
    });

    const loginFaculty = (e) => {
        axios
            .post('http://localhost:8000/login/faculty', authData)
            .then((res) => {
                if (res.data.admin === true) {
                    sessionStorage.setItem(
                        'navLinks',
                        JSON.stringify(adminNavigationLinks)
                    );
                    dispatch(setNavlinks());
                    dispatch(setIsAdmin(true));
                    return navigate(res.data.redirectUrl);
                }
                if (res.data.teacher === true) {
                    sessionStorage.setItem(
                        'navLinks',
                        JSON.stringify(teacherNavigationLinks)
                    );

                    sessionStorage.setItem(
                        'homeData',
                        JSON.stringify(res.data.teacherData)
                    );

                    dispatch(
                        setHomeData({
                            teacher: true,
                            data: res.data.teacherData,
                        })
                    );
                    dispatch(setIsAdmin(false));
                    dispatch(setNavlinks());
                    return navigate(res.data.redirectUrl);
                }
            })
            .catch((err) => {
                e.preventDefault();
                return alert(err.response.data.message);
            });
    };

    const loginStudent = (e) => {
        axios
            .post('http://localhost:8000/login/student', authData)
            .then((res) => {
                if (res.data.student === true) {
                    sessionStorage.setItem(
                        'navLinks',
                        JSON.stringify(studentNavigationLinks)
                    );

                    sessionStorage.setItem(
                        'homeData',
                        JSON.stringify(res.data.studentData)
                    );

                    dispatch(
                        setHomeData({
                            student: true,
                            data: res.data.studentData,
                        })
                    );
                    dispatch(setIsAdmin(false));
                    dispatch(setNavlinks());
                    return navigate(res.data.redirectUrl);
                }
            })
            .catch((err) => {
                e.preventDefault();
                return alert(err.response.data.message);
            });
    };

    return isFaculty ? (
        <form action='#' onSubmit={(e) => e.preventDefault()}>
            <input
                type='email'
                name='email'
                placeholder='Enter your Email'
                autoComplete='off'
                onChange={(e) => {
                    setAuthData((prev) => {
                        return { ...prev, identity: e.target.value };
                    });
                }}
            />

            <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => {
                    setAuthData((prev) => {
                        return { ...prev, password: e.target.value };
                    });
                }}
            />
            <button
                className='submit-btn'
                onClick={(e) => {
                    loginFaculty(e);
                }}
            >
                Login In
            </button>
        </form>
    ) : (
        <form action='#' onSubmit={(e) => e.preventDefault()}>
            <input
                type='number'
                name='roll_number'
                placeholder='Enter your Roll No'
                onChange={(e) => {
                    setAuthData((prev) => {
                        return { ...prev, identity: e.target.value };
                    });
                }}
            />

            <input
                type='date'
                name='password'
                onChange={(e) => {
                    setAuthData((prev) => {
                        return { ...prev, password: e.target.value };
                    });
                }}
            />
            <button
                type='submit'
                className='submit-btn'
                onClick={(e) => {
                    loginStudent(e);
                }}
            >
                Login In
            </button>
        </form>
    );
};

export default AuthendicationForm;
