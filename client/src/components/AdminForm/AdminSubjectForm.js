import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRole } from '../../store/Slices/adminSlice';
import { images, icons } from '../../utils/images';

const AdminSubjectForm = () => {
    const dispatch = useDispatch();
    const { edit, editValue } = useSelector((state) => {
        return state.adminRole;
    });

    const [formEdit, setFormEdit] = useState(false);
    const [subjectDetails, setSubjectDetails] = useState({
        subCode: '',
        subName: '',
        year: '',
        file: '',
    });

    const [editSubjectDetails, setEditSubjectDetails] = useState({});

    useEffect(() => {
        if (edit === true) {
            setSubjectDetails({
                subCode: editValue.subCode,
                subName: editValue.subName,
                year: editValue.year,
                file: editValue.file,
            });
        }
    }, []);
    const [file, setFile] = useState();
    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('data', JSON.stringify(subjectDetails));
        console.log(formdata);
        axios
            .post('http://localhost:8000/admin/subjects/new', formdata)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleEdit = () => {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('data', JSON.stringify(editSubjectDetails));
        console.log(formdata);
        axios
            .post(
                `http://localhost:8000/admin/subjects/${editValue._id}`,
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
                    <span>ALTER SUBJECT</span>
                    <button
                        className='admin-btn add-btn'
                        onClick={() => {
                            dispatch(setAdminRole({ default: true }));
                        }}
                    >
                        Back
                    </button>
                </div>
                <div className='admin-subject-form'>
                    <div className='form-image'>
                        <div className='form-img-subject '>
                            <img src={icons.subject} alt='' />
                        </div>
                        <div className='form-img-input'>
                            <input
                                name='btn-file'
                                type='file'
                                onChange={(e) => {
                                    setFile(e.target.files[0]);
                                }}
                            />
                        </div>
                    </div>
                    <div className='form-details'>
                        <div className='student-form subject-form'>
                            <div>
                                <label htmlFor='name'>Subject Code : </label>
                                <input
                                    type='text'
                                    name='subCode'
                                    placeholder='enter subject code'
                                    value={subjectDetails.subCode}
                                    onChange={(e) => {
                                        setFormEdit(true);
                                        if (formEdit === true) {
                                            setEditSubjectDetails(
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
                                        setSubjectDetails((prevState) => {
                                            return {
                                                ...prevState,
                                                [e.target.name]: e.target.value,
                                            };
                                        });
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor='rollNo'>Subject Name: </label>
                                <input
                                    type='text'
                                    name='subName'
                                    placeholder='enter a roll number'
                                    value={subjectDetails.subName}
                                    onChange={(e) => {
                                        setFormEdit(true);
                                        if (formEdit === true) {
                                            setEditSubjectDetails(
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
                                        setSubjectDetails((prevState) => {
                                            return {
                                                ...prevState,
                                                [e.target.name]: e.target.value,
                                            };
                                        });
                                        console.log(editSubjectDetails);
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor='name'>Year : </label>
                                <input
                                    type='text'
                                    name='year'
                                    placeholder='enter a year'
                                    value={subjectDetails.year}
                                    onChange={(e) => {
                                        setFormEdit(true);
                                        if (formEdit === true) {
                                            setEditSubjectDetails(
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
                                        setSubjectDetails((prevState) => {
                                            return {
                                                ...prevState,
                                                [e.target.name]: e.target.value,
                                            };
                                        });
                                    }}
                                />
                            </div>

                            <button
                                className='admin-submit-subject'
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

export default AdminSubjectForm;
