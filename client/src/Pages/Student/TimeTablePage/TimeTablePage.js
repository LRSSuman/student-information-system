import TimeTable from '../../../components/TImeTable/TimeTable';
import './TimeTablePage.css';
const TimeTablePage = () => {
    const { timetable, subList } = JSON.parse(
        sessionStorage.getItem('homeData')
    );
    console.log(subList);
    console.log(timetable);
    return (
        <div className='timetable-page'>
            <div className='data-list'>
                <div className='data-list-heading'>Your class Time Table</div>
                <TimeTable timetableData={timetable} />

                <div className='timetable-details'>
                    <div>Details :</div>
                    <div className='timetable-subjects'>
                        {timetable.subjectList !== undefined
                            ? timetable.subjectList.map((val, i) => {
                                  return (
                                      <div
                                          className='timetable-subject-name'
                                          key={i}
                                      >
                                          {`${i + 1}. ${val}`}
                                      </div>
                                  );
                              })
                            : subList.map((val, i) => {
                                  return (
                                      <div
                                          className='timetable-subject-name'
                                          key={i}
                                      >
                                          {`${i + 1}. ${val}`}
                                      </div>
                                  );
                              })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeTablePage;
