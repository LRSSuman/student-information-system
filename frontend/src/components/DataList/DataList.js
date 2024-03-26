import { getRoutePath } from '../../utils/getRoutePath';
import './DataList.css';
const DataList = ({ icon, name, additional, btnValue, email, dept }) => {
    console.log(getRoutePath());
    return (
        <li>
            <div className='data-list-data'>
                <div className='data-list-data-name'>
                    <div
                        className={`data-list-data-profile-image ${
                            getRoutePath() == '/student/subjects'
                                ? 'no-bd-rs'
                                : null
                        } ${
                            getRoutePath() == '/teacher/subjects'
                                ? 'no-bd-rs'
                                : null
                        }`}
                    >
                        <img src={icon} alt='profile' />
                    </div>
                    <div>
                        <div className='data-list-data-txt'>{name}</div>
                        <div className='data-list-data-txt'>{email}</div>
                    </div>
                </div>

                <div className='data-list-data-txt'>{dept}</div>
                <div className='data-list-data-txt'>{additional}</div>
                <button className='view-btn'>{btnValue}</button>
            </div>
        </li>
    );
};

export default DataList;
