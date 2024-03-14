import './PersonalDetails.css';
import { personalDetailS } from '../../data/data';

const PersonalDetails = () => {
    return (
        <div className='personal-details'>
            <div>
                {personalDetailS.l.map((details) => {
                    return (
                        <div className='personal-data' key={details.id}>
                            <div className='title'>{details.title} :&nbsp;</div>
                            <div className='data'>{details.data}</div>
                        </div>
                    );
                })}
            </div>
            <div>
                {personalDetailS.r.map((details) => {
                    if (details.id === 8) {
                        return (
                            <div className='personal-data' key={details.id}>
                                <div className='title'>
                                    {details.title} :&nbsp;
                                </div>
                                <div className='data address'>
                                    {details.data.map((data, i) => (
                                        <div key={i}>{data}</div>
                                    ))}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div className='personal-data' key={details.id}>
                                <div className='title'>
                                    {details.title} :&nbsp;
                                </div>
                                <div className='data'>{details.data}</div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default PersonalDetails;
