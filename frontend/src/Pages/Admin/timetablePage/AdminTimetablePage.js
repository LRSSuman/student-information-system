import TimeTable from '../../../components/TImeTable/TimeTable';
const AdminTimeTablePage = () => {
    return (
        <div className='timetable-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    <span>Your class Time Table</span>
                    <button className='admin-btn add-btn'>Add</button>
                </div>
                <div className='years'>
                    <div className='admin-btn year-btn'>First</div>
                    <div className='admin-btn year-btn'>Second</div>
                    <div className='admin-btn year-btn'>Third</div>
                    <div className='admin-btn year-btn'>Fourth</div>
                </div>

                <TimeTable />

                <div className='timetable-details'>
                    <div>Details :</div>
                    <div className='timetable-subjects'>
                        <div className='timetable-subject-name'>
                            1. Object Oriented Software Engineering (CCS351) -
                            teacher name
                        </div>
                        <div className='timetable-subject-name'>
                            2. Object Oriented Software Engineering (CCS351) -
                            teacher name
                        </div>
                        <div className='timetable-subject-name'>
                            3. Object Oriented Software Engineering (CCS351) -
                            teacher name
                        </div>
                        <div className='timetable-subject-name'>
                            4. Object Oriented Software Engineering (CCS351) -
                            teacher name
                        </div>
                        <div className='timetable-subject-name'>
                            5. Object Oriented Software Engineering (CCS351) -
                            teacher name
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminTimeTablePage;
