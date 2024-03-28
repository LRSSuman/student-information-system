import React from 'react';
import { studentList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';

const AdminStudentsPage = () => {
    return (
        <div className='teachers-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    <span>CSE Department Students</span>
                    <button className='admin-btn add-btn'>Add</button>
                </div>
                <ul>
                    {studentList.map((student) => {
                        return (
                            <DataList
                                isAdmin={true}
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

export default AdminStudentsPage;
