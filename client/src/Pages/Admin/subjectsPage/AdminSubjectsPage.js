import DataList from '../../../components/DataList/DataList';
import { icons, images } from '../../../utils/images';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../../store/Slices/adminSlice';
import { setSubjectList } from '../../../store/Slices/ListSlice';
import axios from 'axios';
import AdminSubjectForm from '../../../components/AdminForm/AdminSubjectForm';

const AdminSubjectsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const response = axios
            .get('http://localhost:8000/subjects')
            .then((res) => {
                dispatch(setSubjectList(res.data.subjects));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const { subjectList } = useSelector((state) => {
        return state.listSlice;
    });
    console.log(subjectList);

    const { add, edit, editValue } = useSelector((state) => {
        return state.adminRole;
    });

    return add == true || edit == true ? (
        <AdminSubjectForm />
    ) : (
        <div className='subject-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    <span>CSE Department subject resources</span>
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
                    {subjectList.map((subject, i) => {
                        return (
                            <DataList
                                icn={true}
                                isAdmin={true}
                                key={i}
                                editValue={subject}
                                icon={icons.subject}
                                name={subject.subCode}
                                email={subject.subName}
                                additional={`${subject.year} year`}
                                deleteId={subject._id}
                                btnValue={'Download'}
                                subject={true}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AdminSubjectsPage;
