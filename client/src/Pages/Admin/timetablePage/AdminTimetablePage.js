import { useEffect, useState } from 'react';
import TimeTable from '../../../components/TImeTable/TimeTable';
import { setAdminRole } from '../../../store/Slices/adminSlice';
import axios from 'axios';
import { setTimetableList } from '../../../store/Slices/ListSlice';
import { useDispatch, useSelector } from 'react-redux';
import AdminTimetableForm from '../../../components/AdminForm/AdminTimetableForm';
const AdminTimeTablePage = () => {
    const dispatch = useDispatch();
    const { add, edit, editValue } = useSelector((state) => {
        return state.adminRole;
    });
    const [timetableData, setTimetableData] = useState({
        monday: {
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
        },
        tuesday: {
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
        },
        wednesday: {
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
        },
        thursday: {
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
        },
        friday: {
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
        },

        subjectList: [],
    });

    useEffect(() => {
        const response = axios
            .get('http://localhost:8000/timetable')
            .then((res) => {
                dispatch(setTimetableList(res.data.timetable));
                setTimetableData(res.data.timetable[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const { timetableList } = useSelector((state) => {
        return state.listSlice;
    });
    console.log(timetableList);

    return add == true || edit == true ? (
        <AdminTimetableForm />
    ) : (
        <div className='timetable-page'>
            <div className='data-list'>
                <div className='data-list-heading'>
                    <span>Your class Time Table</span>
                    <button
                        className='admin-btn add-btn'
                        onClick={() => {
                            dispatch(
                                setAdminRole({
                                    edit: true,
                                    editValue: timetableData,
                                })
                            );
                        }}
                    >
                        Edit
                    </button>
                </div>
                <div className='years'>
                    <div
                        className='admin-btn year-btn'
                        onClick={() => {
                            setTimetableData(timetableList[0]);
                        }}
                    >
                        First
                    </div>
                    <div
                        className='admin-btn year-btn'
                        onClick={() => {
                            setTimetableData(timetableList[1]);
                        }}
                    >
                        Second
                    </div>
                    <div
                        className='admin-btn year-btn'
                        onClick={() => {
                            setTimetableData(timetableList[2]);
                        }}
                    >
                        Third
                    </div>
                    <div
                        className='admin-btn year-btn'
                        onClick={() => {
                            setTimetableData(timetableList[3]);
                        }}
                    >
                        Fourth
                    </div>
                </div>

                <TimeTable timetableData={timetableData} />

                <div className='timetable-details'>
                    <div>Details :</div>
                    <div className='timetable-subjects'>
                        {timetableData.subjectList.map((val, i) => {
                            return (
                                <div className='timetable-subject-name' key={i}>
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

export default AdminTimeTablePage;
