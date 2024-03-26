import TimeTable from '../../../components/TImeTable/TimeTable';
import { getRoutePath } from '../../../utils/getRoutePath';
import './TimeTablePage.css';
const TimeTablePage = () => {
    return (
        <div className='timetable-page'>
            <div className='data-list'>
                <div className='data-list-heading'>Your class Time Table</div>
                <TimeTable />
                {getRoutePath() === '/teacher/timetable' ? null : (
                    <div className='timetable-details'>
                        <div>Details :</div>
                        <div className='timetable-subjects'>
                            <div className='timetable-subject-name'>
                                1. Object Oriented Software Engineering (CCS351)
                                - teacher name
                            </div>
                            <div className='timetable-subject-name'>
                                2. Object Oriented Software Engineering (CCS351)
                                - teacher name
                            </div>
                            <div className='timetable-subject-name'>
                                3. Object Oriented Software Engineering (CCS351)
                                - teacher name
                            </div>
                            <div className='timetable-subject-name'>
                                4. Object Oriented Software Engineering (CCS351)
                                - teacher name
                            </div>
                            <div className='timetable-subject-name'>
                                5. Object Oriented Software Engineering (CCS351)
                                - teacher name
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeTablePage;
