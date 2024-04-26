import { useEffect } from 'react';
import './TimeTable.css';
import { useDispatch } from 'react-redux';
import { setLoginPage } from '../../store/Slices/sidebarSlice';
const TimeTable = ({ timetableData }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoginPage(false));
    }, []);
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Day/Period</th>
                        <th>
                            I<br />
                            9:30-10:30
                        </th>
                        <th>10:30-10:45</th>
                        <th>
                            II
                            <br />
                            10:45-11:45
                        </th>

                        <th>
                            III
                            <br />
                            11:45-12:45
                        </th>
                        <th>12:45-1:15</th>
                        <th>
                            IV
                            <br />
                            1:15-2:15
                        </th>
                        <th>
                            V
                            <br />
                            2:15-3:15
                        </th>
                        <th>3:15-3:30</th>
                        <th>
                            VII
                            <br />
                            3:30-4:00
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='special'>Monday</td>
                        <td>{timetableData.monday.first}</td>
                        <td rowSpan='5' className='special'>
                            Break
                        </td>
                        <td>{timetableData.monday.second}</td>
                        <td>{timetableData.monday.third}</td>
                        <td rowSpan='5' className='special'>
                            Lunch
                        </td>
                        <td>{timetableData.monday.fourth}</td>
                        <td>{timetableData.monday.fifth}</td>
                        <td rowSpan='5' className='special'>
                            Break
                        </td>
                        <td>{timetableData.monday.sixth}</td>
                    </tr>
                    <tr>
                        <td className='special'>Tuesday</td>
                        <td>{timetableData.tuesday.first}</td>
                        <td>{timetableData.tuesday.second}</td>
                        <td>{timetableData.tuesday.third}</td>
                        <td>{timetableData.tuesday.fourth}</td>
                        <td>{timetableData.tuesday.fifth}</td>
                        <td>{timetableData.tuesday.sixth}</td>
                    </tr>
                    <tr>
                        <td className='special'>Wednesday</td>
                        <td>{timetableData.wednesday.first}</td>
                        <td>{timetableData.wednesday.second}</td>
                        <td>{timetableData.wednesday.third}</td>
                        <td>{timetableData.wednesday.fourth}</td>
                        <td>{timetableData.wednesday.fifth}</td>
                        <td>{timetableData.wednesday.sixth}</td>
                    </tr>
                    <tr>
                        <td className='special'>Thursday</td>
                        <td>{timetableData.thursday.first}</td>
                        <td>{timetableData.thursday.second}</td>
                        <td>{timetableData.thursday.third}</td>
                        <td>{timetableData.thursday.fourth}</td>
                        <td>{timetableData.thursday.fifth}</td>
                        <td>{timetableData.thursday.sixth}</td>
                    </tr>
                    <tr>
                        <td className='special'>Friday</td>
                        <td>{timetableData.friday.first}</td>
                        <td>{timetableData.friday.second}</td>
                        <td>{timetableData.friday.third}</td>
                        <td>{timetableData.friday.fourth}</td>
                        <td>{timetableData.friday.fifth}</td>
                        <td>{timetableData.friday.sixth}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TimeTable;
