import { useEffect, useState } from 'react';
import './PersonalDetails.css';
import {
    personalDetails,
    studentPersonalDetails,
    teacherPersonalDetails,
} from '../../data/data';
import { getRoutePath } from '../../utils/getRoutePath';
import { useSelector, useDispatch } from 'react-redux';
import { setHomeData } from '../../store/Slices/homeDataSlice';

const PersonalDetails = () => {
    const { personalDetails } = useSelector((state) => {
        return state.homeData;
    });
    return (
        <div className='personal-details'>
            {personalDetails.map((details) => {
                return (
                    <div className='personal-data' key={details.id}>
                        <div className='title'>{details.title} :&nbsp;</div>
                        <div className='data'>{details.data}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default PersonalDetails;
