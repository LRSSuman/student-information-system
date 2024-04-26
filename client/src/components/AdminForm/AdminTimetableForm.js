import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../store/Slices/adminSlice';

const AdminTimetableForm = () => {
    const dispatch = useDispatch();
    const { edit, editValue } = useSelector((state) => {
        return state.adminRole;
    });
    const { timetableList } = useSelector((state) => {
        return state.listSlice;
    });

    const [subjectlist, setSubjectlist] = useState('');
    const [formEdit, setFormEdit] = useState(false);
    const [timetableDetails, setTimetableDetails] = useState({
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
        setTimetableDetails(timetableList);
    }, []);

    const [editTimetableDetails, setEditTimetableDetails] = useState({});
    useEffect(() => {
        if (edit === true) {
            setTimetableDetails({
                monday: editValue.monday,
                tuesday: editValue.tuesday,
                wednesday: editValue.wednesday,
                thursday: editValue.thursday,
                friday: editValue.friday,
                subjectList: editValue.subjectList,
            });
        }
    }, []);

    const handleEdit = () => {
        console.log(timetableDetails);
        axios
            .post(
                `http://localhost:8000/admin/timetable/${editValue._id}`,
                timetableDetails
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
                    <span>ALTER TIMETABLE</span>
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
                    <div className='form-details'>
                        <div className='timetable-form'>
                            <div className='timetable-form'>
                                <div className='label timetable-form-heading'>
                                    Time Table
                                </div>
                                <div className='label'>monday: </div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                timetableDetails.monday.first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                monday: {
                                                                    ...prevState.monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );

                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            monday: {
                                                                ...prevState.monday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.monday.second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                monday: {
                                                                    ...prevState.monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            monday: {
                                                                ...prevState.monday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.monday.third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                monday: {
                                                                    ...prevState.monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            monday: {
                                                                ...prevState.monday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.monday.fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                monday: {
                                                                    ...prevState.monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            monday: {
                                                                ...prevState.monday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.monday.fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                monday: {
                                                                    ...prevState.monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            monday: {
                                                                ...prevState.monday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.monday.sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                monday: {
                                                                    ...prevState.monday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            monday: {
                                                                ...prevState.monday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='label'>tuesday: </div>

                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                timetableDetails.tuesday.first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                tuesday: {
                                                                    ...prevState.tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            tuesday: {
                                                                ...prevState.tuesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.tuesday.second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                tuesday: {
                                                                    ...prevState.tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            tuesday: {
                                                                ...prevState.tuesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.tuesday.third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                tuesday: {
                                                                    ...prevState.tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            tuesday: {
                                                                ...prevState.tuesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        {' '}
                                        <label htmlFor=''>fourth:</label>
                                        <input
                                            type='text'
                                            name='fourth'
                                            placeholder='fourth'
                                            value={
                                                timetableDetails.tuesday.fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                tuesday: {
                                                                    ...prevState.tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            tuesday: {
                                                                ...prevState.tuesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.tuesday.fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                tuesday: {
                                                                    ...prevState.tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            tuesday: {
                                                                ...prevState.tuesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.tuesday.sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                tuesday: {
                                                                    ...prevState.tuesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            tuesday: {
                                                                ...prevState.tuesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='label'>wednesday: </div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                timetableDetails.wednesday.first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                wednesday: {
                                                                    ...prevState.wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            wednesday: {
                                                                ...prevState.wednesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.wednesday
                                                    .second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                wednesday: {
                                                                    ...prevState.wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            wednesday: {
                                                                ...prevState.wednesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.wednesday.third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                wednesday: {
                                                                    ...prevState.wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            wednesday: {
                                                                ...prevState.wednesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.wednesday
                                                    .fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                wednesday: {
                                                                    ...prevState.wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            wednesday: {
                                                                ...prevState.wednesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.wednesday.fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                wednesday: {
                                                                    ...prevState.wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            wednesday: {
                                                                ...prevState.wednesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.wednesday.sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                wednesday: {
                                                                    ...prevState.wednesday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            wednesday: {
                                                                ...prevState.wednesday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='label'>thursday: </div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                timetableDetails.thursday.first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                thursday: {
                                                                    ...prevState.thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            thursday: {
                                                                ...prevState.thursday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        {' '}
                                        <label htmlFor=''>second:</label>
                                        <input
                                            type='text'
                                            name='second'
                                            placeholder='second'
                                            value={
                                                timetableDetails.thursday.second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                thursday: {
                                                                    ...prevState.thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            thursday: {
                                                                ...prevState.thursday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.thursday.third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                thursday: {
                                                                    ...prevState.thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            thursday: {
                                                                ...prevState.thursday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.thursday.fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                thursday: {
                                                                    ...prevState.thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            thursday: {
                                                                ...prevState.thursday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.thursday.fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                thursday: {
                                                                    ...prevState.thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            thursday: {
                                                                ...prevState.thursday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        {' '}
                                        <label htmlFor=''>sixth:</label>
                                        <input
                                            type='text'
                                            name='sixth'
                                            placeholder='sixth'
                                            value={
                                                timetableDetails.thursday.sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                thursday: {
                                                                    ...prevState.thursday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            thursday: {
                                                                ...prevState.thursday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='label'>friday</div>
                                <div className='timetable-form-input'>
                                    <div>
                                        <label htmlFor=''>first:</label>
                                        <input
                                            type='text'
                                            name='first'
                                            placeholder='first'
                                            value={
                                                timetableDetails.friday.first
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                friday: {
                                                                    ...prevState.friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            friday: {
                                                                ...prevState.friday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.friday.second
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                friday: {
                                                                    ...prevState.friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            friday: {
                                                                ...prevState.friday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.friday.third
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                friday: {
                                                                    ...prevState.friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            friday: {
                                                                ...prevState.friday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.friday.fourth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                friday: {
                                                                    ...prevState.friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            friday: {
                                                                ...prevState.friday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.friday.fifth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                friday: {
                                                                    ...prevState.friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            friday: {
                                                                ...prevState.friday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
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
                                                timetableDetails.friday.sixth
                                            }
                                            onChange={(e) => {
                                                setFormEdit(true);
                                                if (formEdit === true) {
                                                    setEditTimetableDetails(
                                                        (prevState) => {
                                                            console.log(
                                                                prevState
                                                            );
                                                            return {
                                                                ...prevState,

                                                                friday: {
                                                                    ...prevState.friday,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            };
                                                        }
                                                    );
                                                    setFormEdit(false);
                                                }
                                                setTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,

                                                            friday: {
                                                                ...prevState.friday,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        };
                                                    }
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='subject-details-form'>
                                <div>
                                    <label htmlFor='name'>
                                        Subjects details :
                                    </label>
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
                                                setEditTimetableDetails(
                                                    (prevState) => {
                                                        return {
                                                            ...prevState,
                                                            subjectList: [
                                                                ...prevState.subjectlist,
                                                                subjectlist,
                                                            ],
                                                        };
                                                    }
                                                );
                                                setFormEdit(false);
                                            }
                                            setTimetableDetails((prevState) => {
                                                return {
                                                    ...prevState,
                                                    subjectList: [
                                                        ...prevState.subjectList,
                                                        subjectlist,
                                                    ],
                                                };
                                            });
                                            setSubjectlist('');
                                            console.log(
                                                timetableDetails.subjectList
                                            );
                                        }}
                                    >
                                        Add
                                    </button>
                                </div>

                                <div className='subject-detail-form-list'>
                                    {timetableDetails.subjectList.map(
                                        (sub, i) => {
                                            return (
                                                <li
                                                    key={i}
                                                    onClick={(e) => {
                                                        let sublist =
                                                            timetableDetails.subjectList;
                                                        sublist =
                                                            sublist.filter(
                                                                (val) =>
                                                                    val !== sub
                                                            );
                                                        setEditTimetableDetails(
                                                            (prevState) => {
                                                                return {
                                                                    ...prevState,
                                                                    subjectList:
                                                                        sublist,
                                                                };
                                                            }
                                                        );

                                                        setFormEdit(true);
                                                        if (formEdit === true) {
                                                            setEditTimetableDetails(
                                                                (prevState) => {
                                                                    return {
                                                                        ...prevState,
                                                                        subjectList:
                                                                            sublist,
                                                                    };
                                                                }
                                                            );
                                                            setFormEdit(false);
                                                        }
                                                        setTimetableDetails(
                                                            (prevState) => {
                                                                return {
                                                                    ...prevState,
                                                                    subjectList:
                                                                        sublist,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                >
                                                    {sub}
                                                </li>
                                            );
                                        }
                                    )}
                                </div>
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

export default AdminTimetableForm;
