import React from 'react';
// import { studentList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../../store/Slices/adminSlice';
import { setStudentList } from '../../../store/Slices/ListSlice';
import axios from 'axios';
import View from '../../../components/view/View';
import { setHomeData } from '../../../store/Slices/homeDataSlice';

const StudentsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const response = axios
            .get('http://localhost:8000/students')
            .then((res) => {
                dispatch(setStudentList(res.data.student));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const { studentList } = useSelector((state) => {
        return state.listSlice;
    });
    console.log(studentList);

    const { view, editValue } = useSelector((state) => {
        return state.adminRole;
    });

    if (view == true) {
        dispatch(setHomeData({ student: true, data: editValue }));
    }
    return view == true ? (
        <View />
    ) : (
        <div className='teachers-page'>
            <div className='data-list'>
                <div className='data-list-heading'>CSE Department Students</div>
                <ul>
                    {studentList.map((student, i) => {
                        return (
                            <DataList
                                editValue={student}
                                key={i}
                                icon={student.Image}
                                name={student.name}
                                additional={student.department}
                                btnValue={'View'}
                                email={student.email}
                                dept={student.rollNo}
                                student={true}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default StudentsPage;
