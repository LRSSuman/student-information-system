import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../store/Slices/adminSlice';

const AdminTeacherForm = () => {
    const dispatch = useDispatch();
    const { edit, editValue } = useSelector((state) => {
        return state.adminRole;
    });
    const [formEdit, setFormEdit] = useState(false);
    const [subjectlist, setSubjectlist] = useState('');
    const [teacherDetails, setTeacherDetails] = useState({
        name: '',
        image: '',
        department: '',
        role: '',
        experience: '',
        totalSubjects: '',
        dob: '',
        gender: '',
        email: '',
        mobile: '',
        attendance: '',
        password: '',
        timetable: {
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
        },
        subList: [],
    });

    const [editTeacherDetails, setEditTeacherDetails] = useState({});

    useEffect(() => {
        if (edit === true) {
            setTeacherDetails({
                name: editValue.name,
                image: editValue.Image,
                department: editValue.department,
                role: editValue.role,
                experience: editValue.experience,
                totalSubjects: editValue.totalSubjects,
                dob: editValue.dob,
                gender: editValue.gender,
                email: editValue.email,
                mobile: editValue.mobile,
                attendance: editValue.attendance,
                password: editValue.password,
                // timetable: {
                //     monday: {
                //         first: editValue.timetable.monday.first,
                //         second: editValue.timetable.monday.second,
                //         third: editValue.timetable.monday.third,
                //         fourth: editValue.timetable.monday.fourth,
                //         fifth: editValue.timetable.monday.fifth,
                //         sixth: editValue.timetable.monday.sixth,
                //     },
                //     tuesday: {
                //         first: editValue.timetable.tuesday.first,
                //         second: editValue.timetable.tuesday.second,
                //         third: editValue.timetable.tuesday.third,
                //         fourth: editValue.timetable.tuesday.fourth,
                //         fifth: editValue.timetable.tuesday.fifth,
                //         sixth: editValue.timetable.tuesday.sixth,
                //     },
                //     wednesday: {
                //         first: editValue.timetable.wednesday.first,
                //         second: editValue.timetable.wednesday.second,
                //         third: editValue.timetable.wednesday.third,
                //         fourth: editValue.timetable.wednesday.fourth,
                //         fifth: editValue.timetable.wednesday.fifth,
                //         sixth: editValue.timetable.wednesday.sixth,
                //     },
                //     thursday: {
                //         first: editValue.timetable.thursday.first,
                //         second: editValue.timetable.thursday.second,
                //         third: editValue.timetable.thursday.third,
                //         fourth: editValue.timetable.thursday.fourth,
                //         fifth: editValue.timetable.thursday.fifth,
                //         sixth: editValue.timetable.thursday.sixth,
                //     },
                //     friday: {
                //         first: editValue.timetable.friday.first,
                //         second: editValue.timetable.friday.second,
                //         third: editValue.timetable.friday.third,
                //         fourth: editValue.timetable.friday.fourth,
                //         fifth: editValue.timetable.friday.fifth,
                //         sixth: editValue.timetable.friday.sixth,
                //     },
                // },
                timetable: editValue.timetable,
                subList: editValue.subList,
            });
            setEditTeacherDetails((prevState) => {
                return {
                    ...prevState,
                    subList: editValue.subList,
                    timetable: editValue.timetable,
                };
            });
        }
    }, []);
    const [file, setFile] = useState();

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('data', JSON.stringify(teacherDetails));
        console.log(formdata);
        axios
            .post('http://localhost:8000/admin/teachers/new', formdata)
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
        formdata.append('data', JSON.stringify(teacherDetails));
        console.log(editTeacherDetails);
        console.log(teacherDetails);
        axios
            .post(
                `http://localhost:8000/admin/teachers/${editValue._id}`,
                formdata
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='admin-form-page'>
            <div className='admin-data-form'>
                <div className='admin-form-heading'>
                    <span>ALTER TEACHER</span>
                    <button
                        className='admin-btn add-btn'
                        onClick={() => {
                            dispatch(setAdminRole({ default: true }));
                        }}
                    >
                        Back
                    </button>
                </div>
                <div className='admin-teacher-form'>
                    <div className='form-image '>
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
                                        value={teacherDetails.name}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                    <label htmlFor='name'>Department : </label>
                                    <input
                                        type='text'
                                        name='department'
                                        placeholder='enter a department'
                                        value={teacherDetails.department}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                    <label htmlFor='role'>Role </label>
                                    <input
                                        type='text'
                                        name='role'
                                        placeholder='enter a role'
                                        value={teacherDetails.role}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                    <label htmlFor='experience'>
                                        Experience :{' '}
                                    </label>
                                    <input
                                        type='text'
                                        name='experience'
                                        placeholder='enter a Experience'
                                        value={teacherDetails.experience}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                        Total Subjects :{' '}
                                    </label>
                                    <input
                                        type='text'
                                        name='totalSubjects'
                                        placeholder='enter no of subjects'
                                        value={teacherDetails.totalSubjects}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                        Date of Birth :{' '}
                                    </label>
                                    <input
                                        type='date'
                                        name='dob'
                                        placeholder='enter a DOB'
                                        value={teacherDetails.dob}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                    <label htmlFor='name'>Attendance : </label>
                                    <input
                                        type='text'
                                        name='attendance'
                                        placeholder='enter a Attendance'
                                        value={teacherDetails.attendance}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                        value={teacherDetails.gender}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                        value={teacherDetails.email}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                    <label htmlFor='name'>Mobile : </label>
                                    <input
                                        type='text'
                                        name='mobile'
                                        placeholder='enter a mobile no'
                                        value={teacherDetails.mobile}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                                    <label htmlFor='name'>Password : </label>
                                    <input
                                        type='text'
                                        name='password'
                                        placeholder='enter a password'
                                        value={teacherDetails.password}
                                        onChange={(e) => {
                                            setFormEdit(true);
                                            if (formEdit === true) {
                                                setEditTeacherDetails(
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
                                            setTeacherDetails((prevState) => {
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
                        <div className='timetable-form'>
                            <div className='label timetable-form-heading'>
                                Time Table
                            </div>
                            <div>
                                <div className='label'>monday: </div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                teacherDetails.timetable.monday
                                                    .first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    monday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .monday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                monday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>second:</label>
                                        <input
                                            type='text'
                                            name='second'
                                            placeholder='second'
                                            value={
                                                teacherDetails.timetable.monday
                                                    .second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    monday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .monday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                monday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>third:</label>
                                        <input
                                            type='text'
                                            name='third'
                                            placeholder='third'
                                            value={
                                                teacherDetails.timetable.monday
                                                    .third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    monday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .monday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                monday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>fourth:</label>
                                        <input
                                            type='text'
                                            name='fourth'
                                            placeholder='fourth'
                                            value={
                                                teacherDetails.timetable.monday
                                                    .fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    monday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .monday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                monday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>fifth:</label>
                                        <input
                                            type='text'
                                            name='fifth'
                                            placeholder='fifth'
                                            value={
                                                teacherDetails.timetable.monday
                                                    .fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .timetable,
                                                                    monday: {
                                                                        ...prevState.monday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                monday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>sixth:</label>
                                        <input
                                            type='text'
                                            name='sixth'
                                            placeholder='sixth'
                                            value={
                                                teacherDetails.timetable.monday
                                                    .sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    monday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .monday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                monday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='label'>tuesday: </div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                teacherDetails.timetable.tuesday
                                                    .first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    tuesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .tuesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                tuesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>second:</label>
                                        <input
                                            type='text'
                                            name='second'
                                            placeholder='second'
                                            value={
                                                teacherDetails.timetable.tuesday
                                                    .second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    tuesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .tuesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                tuesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>third:</label>
                                        <input
                                            type='text'
                                            name='third'
                                            placeholder='third'
                                            value={
                                                teacherDetails.timetable.tuesday
                                                    .third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    tuesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .tuesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                tuesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>fourth:</label>
                                        <input
                                            type='text'
                                            name='fourth'
                                            placeholder='fourth'
                                            value={
                                                teacherDetails.timetable.tuesday
                                                    .fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    tuesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .tuesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                tuesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>fifth:</label>
                                        <input
                                            type='text'
                                            name='fifth'
                                            placeholder='fifth'
                                            value={
                                                teacherDetails.timetable.tuesday
                                                    .fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    tuesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .tuesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                tuesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor=''>sixth:</label>
                                        <input
                                            type='text'
                                            name='sixth'
                                            placeholder='sixth'
                                            value={
                                                teacherDetails.timetable.tuesday
                                                    .sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    tuesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .tuesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                tuesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='label'>wednesday: </div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                teacherDetails.timetable
                                                    .wednesday.first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    wednesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .wednesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                wednesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>second:</label>
                                        <input
                                            type='text'
                                            name='second'
                                            placeholder='second'
                                            value={
                                                teacherDetails.timetable
                                                    .wednesday.second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    wednesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .wednesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                wednesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>third:</label>
                                        <input
                                            type='text'
                                            name='third'
                                            placeholder='third'
                                            value={
                                                teacherDetails.timetable
                                                    .wednesday.third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    wednesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .wednesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                wednesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>fourth:</label>
                                        <input
                                            type='text'
                                            name='fourth'
                                            placeholder='fourth'
                                            value={
                                                teacherDetails.timetable
                                                    .wednesday.fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    wednesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .wednesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                wednesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>fifth:</label>
                                        <input
                                            type='text'
                                            name='fifth'
                                            placeholder='fifth'
                                            value={
                                                teacherDetails.timetable
                                                    .wednesday.fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    wednesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .wednesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                wednesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>sixth:</label>
                                        <input
                                            type='text'
                                            name='sixth'
                                            placeholder='sixth'
                                            value={
                                                teacherDetails.timetable
                                                    .wednesday.sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    wednesday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .wednesday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                wednesday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='label'>thursday: </div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                teacherDetails.timetable
                                                    .thursday.first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    thursday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .thursday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                thursday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>second:</label>
                                        <input
                                            type='text'
                                            name='second'
                                            placeholder='second'
                                            value={
                                                teacherDetails.timetable
                                                    .thursday.second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    thursday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .thursday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                thursday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>third:</label>
                                        <input
                                            type='text'
                                            name='third'
                                            placeholder='third'
                                            value={
                                                teacherDetails.timetable
                                                    .thursday.third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    thursday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .thursday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                thursday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>fourth:</label>
                                        <input
                                            type='text'
                                            name='fourth'
                                            placeholder='fourth'
                                            value={
                                                teacherDetails.timetable
                                                    .thursday.fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    thursday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .thursday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                thursday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>fifth:</label>
                                        <input
                                            type='text'
                                            name='fifth'
                                            placeholder='fifth'
                                            value={
                                                teacherDetails.timetable
                                                    .thursday.fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    thursday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .thursday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                thursday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>sixth:</label>
                                        <input
                                            type='text'
                                            name='sixth'
                                            placeholder='sixth'
                                            value={
                                                teacherDetails.timetable
                                                    .thursday.sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    thursday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .thursday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                thursday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='label'>friday</div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                teacherDetails.timetable.friday
                                                    .first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    friday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .friday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                friday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>second:</label>
                                        <input
                                            type='text'
                                            name='second'
                                            placeholder='second'
                                            value={
                                                teacherDetails.timetable.friday
                                                    .second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    friday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .friday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                friday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>third:</label>
                                        <input
                                            type='text'
                                            name='third'
                                            placeholder='third'
                                            value={
                                                teacherDetails.timetable.friday
                                                    .third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    friday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .friday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                friday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>fourth:</label>
                                        <input
                                            type='text'
                                            name='fourth'
                                            placeholder='fourth'
                                            value={
                                                teacherDetails.timetable.friday
                                                    .fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    friday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .friday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                friday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>fifth:</label>
                                        <input
                                            type='text'
                                            name='fifth'
                                            placeholder='fifth'
                                            value={
                                                teacherDetails.timetable.friday
                                                    .fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    friday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .friday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                friday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>sixth:</label>
                                        <input
                                            type='text'
                                            name='sixth'
                                            placeholder='sixth'
                                            value={
                                                teacherDetails.timetable.friday
                                                    .sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,
                                                                timetable: {
                                                                    ...prevState.timetable,
                                                                    friday: {
                                                                        ...prevState
                                                                            .timetable
                                                                            .friday,
                                                                        [e
                                                                            .target
                                                                            .name]:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            timetable: {
                                                                ...prevState.timetable,
                                                                friday: {
                                                                    ...prevState
                                                                        .timetable
                                                                        .friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='subject-details-form'>
                            <div>
                                <label htmlFor='name'>Subjects details :</label>
                                <input
                                    type='text'
                                    name='subjectList'
                                    placeholder='enter a subjects details '
                                    value={subjectlist}
                                    onChange={(e) => {
                                        setSubjectlist(e.target.value);
                                    }}
                                />
                                <button
                                    className='subject-detail-add-btn'
                                    onClick={() => {
                                        setFormEdit(true);
                                        if (formEdit === true) {
                                            setEditTeacherDetails(
                                                (prevState) => {
                                                    return {
                                                        ...prevState,
                                                        subList: [
                                                            ...prevState.subList,
                                                            subjectlist,
                                                        ],
                                                    };
                                                }
                                            );
                                            setFormEdit(false);
                                        }
                                        setTeacherDetails((prevState) => {
                                            return {
                                                ...prevState,
                                                subList: [
                                                    ...prevState.subList,
                                                    subjectlist,
                                                ],
                                            };
                                        });
                                        setSubjectlist('');
                                    }}
                                >
                                    Add
                                </button>
                            </div>
                            <div className='subject-detail-form-list'>
                                {teacherDetails.subList.map((sub, i) => {
                                    return (
                                        <li
                                            key={i}
                                            onClick={(e) => {
                                                let sublist =
                                                    teacherDetails.subList;
                                                sublist = sublist.filter(
                                                    (val) => val !== sub
                                                );
                                                setEditTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            subList: sublist,
                                                        };
                                                    }
                                                );

                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTeacherDetails(
                                                        (prevState) => {
                                                            return {
                                                                ...prevState,
                                                                subList:
                                                                    sublist,
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTeacherDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            subList: sublist,
                                                        };
                                                    }
                                                );
                                            }}
                                        >
                                            {sub}
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='admin-submit-btn'>
                    <button
                        className='admin-teacher-submit'
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
    );
};

export default AdminTeacherForm;
