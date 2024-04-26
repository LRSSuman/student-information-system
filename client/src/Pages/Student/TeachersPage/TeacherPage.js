import './TeacherPage.css';
// import { teacherList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../../store/Slices/adminSlice';
import { setTeacherList } from '../../../store/Slices/ListSlice';
import axios from 'axios';
import { setHomeData } from '../../../store/Slices/homeDataSlice';
import View from '../../../components/view/View';

const TeacherPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const response = axios
            .get('http://localhost:8000/teachers')
            .then((res) => {
                dispatch(setTeacherList(res.data.teacher));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const { teacherList } = useSelector((state) => {
        return state.listSlice;
    });

    console.log(teacherList);

    const { view, editValue } = useSelector((state) => {
        return state.adminRole;
    });

    console.log(view);

    if (view == true) {
        dispatch(setHomeData({ teacher: true, data: editValue }));
    }

    return view == true ? (
        <View />
    ) : (
        <div className='teachers-page'>
            <div className='data-list'>
                <div className='data-list-heading'>CSE Department Teachers</div>
                <ul>
                    {teacherList.map((teacher, i) => {
                        return (
                            <DataList
                                editValue={teacher}
                                key={i}
                                icon={teacher.Image}
                                name={teacher.name}
                                dept={teacher.department}
                                email={teacher.email}
                                additional={teacher.role}
                                btnValue={'View'}
                                teacher={true}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TeacherPage;
