import { teacherList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';

const AdminTeachersPage = () => {
    return (
        <div className='teachers-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    <span>CSE Department Teachers</span>
                    <button className='admin-btn add-btn'>Add</button>
                </div>
                <ul>
                    {teacherList.map((teacher) => {
                        return (
                            <DataList
                                isAdmin={true}
                                key={teacher.id}
                                icon={teacher.dp}
                                name={teacher.name}
                                dept={teacher.dept}
                                email={teacher.email}
                                additional={teacher.role}
                                btnValue={'View'}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AdminTeachersPage;
