import { getRoutePath } from '../../utils/getRoutePath';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../store/Slices/adminSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DataList.css';
import { setStudentList, setTeacherList } from '../../store/Slices/ListSlice';
import { useEffect } from 'react';
import { setLoginPage } from '../../store/Slices/sidebarSlice';

const DataList = ({
    editValue,
    icon,
    name,
    additional,
    btnValue,
    email,
    dept,
    isAdmin,
    deleteId,
    student,
    teacher,
    subject,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoginPage(false));
    }, []);
    const handleDelete = async () => {
        let url;
        if (student == true) {
            url = 'students';
        }
        if (teacher == true) {
            url = 'teachers';
        }
        if (subject == true) {
            url = 'subjects';
        }
        axios
            .post(`http://localhost:8000/admin/${url}/delete/${deleteId}`)
            .then((res) => {
                if (student == true) {
                    dispatch(setStudentList(res.data.students));
                }
                if (teacher == true) {
                    dispatch(setTeacherList(res.data.teachers));
                }
                if (subject == true) {
                    dispatch(setTeacherList(res.data.subjects));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDownload = () => {
        axios
            .get(`http://localhost:8000/subjects/download/${editValue.file}`, {
                responseType: 'blob',
            })
            .then((res) => {
                const href = URL.createObjectURL(res.data);
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', `${editValue.subName}.pdf`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(href);
            })
            .catch((err) => console.log(err));
    };
    return (
        <li>
            <div className='data-list-data'>
                <div className='data-list-data-name dl'>
                    <div
                        className={`data-list-data-profile-image ${
                            getRoutePath() == '/student/subjects'
                                ? 'no-bd-rs'
                                : null
                        } ${
                            getRoutePath() == '/teacher/subjects'
                                ? 'no-bd-rs'
                                : null
                        } ${
                            getRoutePath() == '/admin/subjects'
                                ? 'no-bd-rs'
                                : null
                        }`}
                    >
                        {subject !== true ? (
                            <img
                                src={`http://localhost:8000/img/${icon}`}
                                alt='profile'
                            />
                        ) : (
                            <img src={`${icon}`} alt='profile' />
                        )}
                    </div>
                    <div>
                        <div className='data-list-data-txt'>{name}</div>
                        <div className='data-list-data-txt'>{email}</div>
                    </div>
                </div>
                <div className='dl dl-info'>
                    <div className='data-list-data-txt'>{dept}</div>
                    <div className='data-list-data-txt'>{additional}</div>
                </div>
                <div className='dl'>
                    {isAdmin ? (
                        <>
                            <div className='admin-btns'>
                                {btnValue === 'View' ? (
                                    <button
                                        className='admin-btn view-btn'
                                        onClick={() => {
                                            dispatch(
                                                setAdminRole({
                                                    view: true,
                                                    editValue: editValue,
                                                })
                                            );
                                        }}
                                    >
                                        {btnValue}
                                    </button>
                                ) : btnValue === 'Download' ? (
                                    <button
                                        className='admin-btn view-btn'
                                        onClick={handleDownload}
                                    >
                                        {btnValue}
                                    </button>
                                ) : null}
                                <button
                                    className='admin-btn edit-btn'
                                    onClick={() => {
                                        dispatch(
                                            setAdminRole({
                                                edit: true,
                                                editValue: editValue,
                                            })
                                        );
                                    }}
                                >
                                    edit
                                </button>
                                <button
                                    className='admin-btn delete-btn'
                                    onClick={() => {
                                        if (
                                            window.confirm(
                                                'are you sure want to delete'
                                            ) == true
                                        ) {
                                            handleDelete();
                                        }
                                    }}
                                >
                                    delete
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {btnValue === 'View' ? (
                                <button
                                    className='admin-btn view-btn'
                                    onClick={() => {
                                        dispatch(
                                            setAdminRole({
                                                view: true,
                                                editValue: editValue,
                                            })
                                        );
                                    }}
                                >
                                    {btnValue}
                                </button>
                            ) : btnValue === 'Download' ? (
                                <button
                                    className='admin-btn view-btn'
                                    onClick={handleDownload}
                                >
                                    {btnValue}
                                </button>
                            ) : null}
                        </>
                    )}
                </div>
            </div>
        </li>
    );
};

export default DataList;
