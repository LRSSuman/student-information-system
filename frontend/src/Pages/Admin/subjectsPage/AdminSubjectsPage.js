import { subjectList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';

const AdminSubjectsPage = () => {
    return (
        <div className='subject-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    <span>CSE Department subject resources</span>
                    <button className='admin-btn add-btn'>Add</button>
                </div>
                <ul>
                    {subjectList.map((subject) => {
                        return (
                            <DataList
                                isAdmin={true}
                                key={subject.id}
                                icon={subject.dp}
                                name={subject.name}
                                email={subject.email}
                                additional={subject.year}
                                btnValue={'Download'}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AdminSubjectsPage;
