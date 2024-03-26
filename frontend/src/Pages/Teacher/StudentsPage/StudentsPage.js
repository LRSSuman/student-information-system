import React from 'react';
import { studentList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';

const StudentsPage = () => {
    return (
        <div className='teachers-page'>
            <div className='data-list'>
                <div className='data-list-heading'>CSE Department Students</div>
                <ul>
                    {studentList.map((student) => {
                        return (
                            <DataList
                                key={student.id}
                                icon={student.dp}
                                name={student.name}
                                additional={student.role}
                                btnValue={'View'}
                                email={student.email}
                                dept={student.rollNo}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default StudentsPage;
