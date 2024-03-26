import './SubjectPage.css';
import { subjectList } from '../../../data/data';
import DataList from '../../../components/DataList/DataList';

const SubjectPage = () => {
    return (
        <div className='subject-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    CSE Department subject resources
                </div>
                <ul>
                    {subjectList.map((subject) => {
                        return (
                            <DataList
                                key={subject.id}
                                icon={subject.dp}
                                name={subject.name}
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

export default SubjectPage;
