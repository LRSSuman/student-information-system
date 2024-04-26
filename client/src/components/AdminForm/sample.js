<div className='timetable-form-input'>
    <label htmlFor=''>first:</label>
    <input
        type='text'
        name='first'
        placeholder='first'
        value={teacherDetails.timetable.friday.first}
        onChange={(e) => {
            // setFormEdit(true);
            if (formEdit === true) {
                setEditTeacherDetails((prevState) => {
                    console.log(prevState);
                    return {
                        ...prevState,
                        timetable: {
                            ...prevState.timetable,
                            friday: {
                                ...prevState.timetable.friday,
                                [e.target.name]: e.target.value,
                            },
                        },
                    };
                });
                setFormEdit(false);
            }
            setTeacherDetails((prevState) => {
                return {
                    ...prevState,
                    timetable: {
                        ...prevState.timetable,
                        friday: {
                            ...prevState.timetable.friday,
                            [e.target.name]: e.target.value,
                        },
                    },
                };
            });
        }}
    />
    <label htmlFor=''>second:</label>
    <input
        type='text'
        name='second'
        placeholder='second'
        value={teacherDetails.timetable.friday.second}
        onChange={(e) => {
            // setFormEdit(true);
            if (formEdit === true) {
                setEditTeacherDetails((prevState) => {
                    console.log(prevState);
                    return {
                        ...prevState,
                        timetable: {
                            ...prevState.timetable,
                            friday: {
                                ...prevState.timetable.friday,
                                [e.target.name]: e.target.value,
                            },
                        },
                    };
                });
                setFormEdit(false);
            }
            setTeacherDetails((prevState) => {
                return {
                    ...prevState,
                    timetable: {
                        ...prevState.timetable,
                        friday: {
                            ...prevState.timetable.friday,
                            [e.target.name]: e.target.value,
                        },
                    },
                };
            });
        }}
    />
    <label htmlFor=''>third:</label>
    <input
        type='text'
        name='third'
        placeholder='third'
        value={teacherDetails.timetable.friday.third}
        onChange={(e) => {
            // setFormEdit(true);
            if (formEdit === true) {
                setEditTeacherDetails((prevState) => {
                    console.log(prevState);
                    return {
                        ...prevState,
                        timetable: {
                            ...prevState.timetable,
                            friday: {
                                ...prevState.timetable.friday,
                                [e.target.name]: e.target.value,
                            },
                        },
                    };
                });
                setFormEdit(false);
            }
            setTeacherDetails((prevState) => {
                return {
                    ...prevState,
                    timetable: {
                        ...prevState.timetable,
                        friday: {
                            ...prevState.timetable.friday,
                            [e.target.name]: e.target.value,
                        },
                    },
                };
            });
        }}
    />
    <label htmlFor=''>fourth:</label>
    <input
        type='text'
        name='fourth'
        placeholder='fourth'
        value={teacherDetails.timetable.friday.fourth}
        onChange={(e) => {
            // setFormEdit(true);
            if (formEdit === true) {
                setEditTeacherDetails((prevState) => {
                    console.log(prevState);
                    return {
                        ...prevState,
                        timetable: {
                            ...prevState.timetable,
                            friday: {
                                ...prevState.timetable.friday,
                                [e.target.name]: e.target.value,
                            },
                        },
                    };
                });
                setFormEdit(false);
            }
            setTeacherDetails((prevState) => {
                return {
                    ...prevState,
                    timetable: {
                        ...prevState.timetable,
                        friday: {
                            ...prevState.timetable.friday,
                            [e.target.name]: e.target.value,
                        },
                    },
                };
            });
        }}
    />
    <label htmlFor=''>fifth:</label>
    <input
        type='text'
        name='fifth'
        placeholder='fifth'
        value={teacherDetails.timetable.friday.fifth}
        onChange={(e) => {
            // setFormEdit(true);
            if (formEdit === true) {
                setEditTeacherDetails((prevState) => {
                    console.log(prevState);
                    return {
                        ...prevState,
                        timetable: {
                            ...prevState.timetable,
                            friday: {
                                ...prevState.timetable.friday,
                                [e.target.name]: e.target.value,
                            },
                        },
                    };
                });
                setFormEdit(false);
            }
            setTeacherDetails((prevState) => {
                return {
                    ...prevState,
                    timetable: {
                        ...prevState.timetable,
                        friday: {
                            ...prevState.timetable.friday,
                            [e.target.name]: e.target.value,
                        },
                    },
                };
            });
        }}
    />
    <label htmlFor=''>sixth:</label>
    <input
        type='text'
        name='sixth'
        placeholder='sixth'
        value={teacherDetails.timetable.friday.sixth}
        onChange={(e) => {
            // setFormEdit(true);
            if (formEdit === true) {
                setEditTeacherDetails((prevState) => {
                    console.log(prevState);
                    return {
                        ...prevState,
                        timetable: {
                            ...prevState.timetable,
                            friday: {
                                ...prevState.timetable.friday,
                                [e.target.name]: e.target.value,
                            },
                        },
                    };
                });
                setFormEdit(false);
            }
            setTeacherDetails((prevState) => {
                return {
                    ...prevState,
                    timetable: {
                        ...prevState.timetable,
                        friday: {
                            ...prevState.timetable.friday,
                            [e.target.name]: e.target.value,
                        },
                    },
                };
            });
        }}
    />
</div>;
