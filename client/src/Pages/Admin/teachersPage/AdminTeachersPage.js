// import { teacherList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';
import AdminTeacherForm from '../../../components/AdminForm/AdminTeacherForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../../store/Slices/adminSlice';
import { setTeacherList } from '../../../store/Slices/ListSlice';
import axios from 'axios';
import { setHomeData } from '../../../store/Slices/homeDataSlice';
import View from '../../../components/view/View';

const AdminTeachersPage = () => {
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

    const { view, add, edit, editValue } = useSelector((state) => {
        return state.adminRole;
    });

    if (view == true) {
        dispatch(setHomeData({ teacher: true, data: editValue }));
    }

    console.log(editValue);
    return add == true || edit == true ? (
        <AdminTeacherForm />
    ) : view == true ? (
        <View />
    ) : (
        <div className='teachers-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    <span>CSE Department Teachers</span>
                    <button
                        className='admin-btn add-btn'
                        onClick={() => {
                            dispatch(setAdminRole({ add: true }));
                        }}
                    >
                        Add
                    </button>
                </div>
                <ul>
                    {teacherList.map((teacher, i) => {
                        return (
                            <DataList
                                editValue={teacher}
                                isAdmin={true}
                                key={i}
                                icon={teacher.Image}
                                name={teacher.name}
                                dept={teacher.department}
                                email={teacher.email}
                                additional={teacher.role}
                                btnValue={'View'}
                                teacher={true}
                                deleteId={teacher._id}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AdminTeachersPage;
