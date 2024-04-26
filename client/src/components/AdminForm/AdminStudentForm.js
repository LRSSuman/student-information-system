import './AdminForm.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../store/Slices/adminSlice';

const AdminStudentForm = () => {
    const dispatch = useDispatch();
    const { edit, editValue } = useSelector((state) => {
        return state.adminRole;
    });
    const [formEdit, setFormEdit] = useState(false);
    const [studentDetails, setStudentDetails] = useState({
        name: '',
        rollNo: '',
        image: '',
        department: '',
        year: '',
        arrears: '',
        cgpa: '',
        gender: '',
        dob: '',
        address: '',
        email: '',
        mobile: '',
        currentSubject: '',
        assignmentSubmitted: '',
        attendancePercentage: '',
    });

    const [editStudentDetails, setEditStudentDetails] = useState({});

    useEffect(() => {
        if (edit === true) {
            setStudentDetails({
                name: editValue.name,
                rollNo: editValue.rollNo,
                image: editValue.Image,
                department: editValue.department,
                year: editValue.year,
                arrears: editValue.arrears,
                cgpa: editValue.cgpa,
                gender: editValue.gender,
                dob: editValue.dob,
                address: editValue.address,
                email: editValue.email,
                mobile: editValue.mobile,
                currentSubject: editValue.currentSubject,
                assignmentSubmitted: editValue.assignmentSubmitted,
                attendancePercentage: editValue.attendancePercentage,
            });
        }
    }, []);
    const [file, setFile] = useState();
    // console.log(editValue);

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('data', JSON.stringify(studentDetails));
        console.log(formdata);
        axios
            .post('http://localhost:8000/admin/students/new', formdata)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [image, setImage] = useState(null);

    const handleEdit = () => {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('data', JSON.stringify(editStudentDetails));
        console.log(formdata);
        axios
            .post(
                `http://localhost:8000/admin/students/${editValue._id}`,
                formdata
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(file);
    return (
        <div className='admin-form-page'>
            <div className='admin-data-form'>
                <div className='admin-form-heading'>
                    <span>ALTER STUDENTS</span>
                    <button
                        className='admin-btn add-btn'
                        onClick={() => {
                            dispatch(setAdminRole({ default: true }));
                        }}
                    >
                        Back
                    </button>
                </div>
                <div className='admin-form'>
                    <div className='form-image'>
                        <div className='form-img img-bdr'>
                            {editValue ? (
                                <img
                                    src={`http://localhost:8000/img/${editValue.Image}`}
                                    alt=''
                                />
                            ) : (
                                <img src={image} alt='' />
                            )}
                        </div>

                        <div className='form-img-input'>
                            <input
                                type='file'
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setImage(
                                            URL.createObjectURL(
                                                e.target.files[0]
                                            )
                                        );
                                    }
                                    setFile(e.target.files[0]);
                                }}
                            />
                        </div>
                    </div>
                    <div className='form-details'>
                        <div className='student-form'>
                            <div className='student-form-first'>
                                <div>
                                    <label htmlFor='name'>Name : </label>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='enter a name'
                                        value={studentDetails.name}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='rollNo'>
                                        Roll Number :{' '}
                                    </label>
                                    <input
                                        type='text'
                                        name='rollNo'
                                        placeholder='enter a roll number'
                                        value={studentDetails.rollNo}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                            console.log(editStudentDetails);
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Department : </label>
                                    <input
                                        type='text'
                                        name='department'
                                        placeholder='enter a department'
                                        value={studentDetails.department}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Year : </label>
                                    <input
                                        type='text'
                                        name='year'
                                        placeholder='enter a Year'
                                        value={studentDetails.year}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Arrears : </label>
                                    <input
                                        type='text'
                                        name='arrears'
                                        placeholder='enter no of arrears'
                                        value={studentDetails.arrears}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>CGPA : </label>
                                    <input
                                        type='text'
                                        name='cgpa'
                                        placeholder='enter a CPGA'
                                        value={studentDetails.cgpa}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Gender : </label>
                                    <input
                                        type='text'
                                        name='gender'
                                        placeholder='enter a gender'
                                        value={studentDetails.gender}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='student-form-second'>
                                <div>
                                    <label htmlFor='name'>
                                        Date of Birth :{' '}
                                    </label>
                                    <input
                                        type='date'
                                        name='dob'
                                        placeholder='enter a DOB'
                                        value={studentDetails.dob}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Address : </label>
                                    <input
                                        type='text'
                                        name='address'
                                        placeholder='enter a address'
                                        value={studentDetails.address}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Email : </label>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='enter a email'
                                        value={studentDetails.email}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Mobile No : </label>
                                    <input
                                        type='text'
                                        name='mobile'
                                        placeholder='enter a mobile no'
                                        value={studentDetails.mobile}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>
                                        Current Subjects :{' '}
                                    </label>
                                    <input
                                        type='text'
                                        name='currentSubject'
                                        placeholder='enter a current subjects'
                                        value={studentDetails.currentSubject}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>
                                        Assignment Submitted :
                                    </label>
                                    <input
                                        type='text'
                                        name='assignmentSubmitted'
                                        placeholder='enter a no of assignment submitted'
                                        value={
                                            studentDetails.assignmentSubmitted
                                        }
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditStudentDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>
                                        Attendance Percentage :
                                    </label>
                                    <input
                                        type='text'
                                        name='attendancePercentage'
                                        placeholder='enter a attendance percentage'
                                        value={
                                            studentDetails.attendancePercentage
                                        }
                                        onChange={(e) => {
                                            setStudentDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='admin-submit-btn'>
                            <button
                                className='admin-submit'
                                onClick={() => {
                                    if (edit === true) {
                                        handleEdit();
                                    } else {
                                        handleUpload();
                                    }
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStudentForm;
