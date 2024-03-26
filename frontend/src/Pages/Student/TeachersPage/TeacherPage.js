import './TeacherPage.css';
import { teacherList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';

const TeacherPage = () => {
    return (
        <div className='teachers-page'>
            <div className='data-list'>
                <div className='data-list-heading'>CSE Department Teachers</div>
                <ul>
                    {teacherList.map((teacher) => {
                        return (
                            <DataList
                                key={teacher.id}
                                icon={teacher.dp}
                                name={teacher.name}
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

export default TeacherPage;
