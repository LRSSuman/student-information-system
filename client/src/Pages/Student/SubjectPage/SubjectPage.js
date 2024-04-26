import './SubjectPage.css';
import DataList from '../../../components/DataList/DataList';
import { icons, images } from '../../../utils/images';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../../store/Slices/adminSlice';
import { setSubjectList } from '../../../store/Slices/ListSlice';
import axios from 'axios';

const SubjectPage = () => {
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

    const { editValue } = useSelector((state) => {
        return state.adminRole;
    });

    return (
        <div className='subject-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    CSE Department subject resources
                </div>
                <ul>
                    {subjectList.map((subject, i) => {
                        return (
                            <DataList
                                icn={true}
                                key={i}
                                editValue={subject}
                                icon={icons.subject}
                                name={subject.subCode}
                                email={subject.subName}
                                additional={`${subject.year} year`}
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

export default SubjectPage;
