import { getRoutePath } from '../../utils/getRoutePath';
import './DataList.css';
const DataList = ({
    icon,
    name,
    additional,
    btnValue,
    email,
    dept,
    isAdmin,
}) => {
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
                        } ${
                            getRoutePath() == '/admin/subjects'
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
                {isAdmin ? (
                    <>
                        <div className='admin-btns'>
                            {btnValue === 'View' ? (
                                <button className='admin-btn view-btn'>
                                    {btnValue}
                                </button>
                            ) : btnValue === 'Download' ? (
                                <button className='admin-btn view-btn'>
                                    {btnValue}
                                </button>
                            ) : null}
                            <button className='admin-btn edit-btn'>edit</button>
                            <button className='admin-btn delete-btn'>
                                delete
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {btnValue === 'View' ? (
                            <button className='admin-btn view-btn'>
                                {btnValue}
                            </button>
                        ) : btnValue === 'Download' ? (
                            <button className='admin-btn view-btn'>
                                {btnValue}
                            </button>
                        ) : null}
                    </>
                )}
            </div>
        </li>
    );
};

export default DataList;
