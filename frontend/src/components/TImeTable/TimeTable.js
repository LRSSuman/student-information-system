import './TimeTable.css';
const TimeTable = () => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Day/Period</th>
                        <th>
                            I<br />
                            9:30-10:30
                        </th>
                        <th>10:30-10:45</th>
                        <th>
                            II
                            <br />
                            10:45-11:45
                        </th>

                        <th>
                            III
                            <br />
                            11:45-12:45
                        </th>
                        <th>12:45-1:15</th>
                        <th>
                            IV
                            <br />
                            1:15-2:15
                        </th>
                        <th>
                            V
                            <br />
                            2:15-3:15
                        </th>
                        <th>3:15-3:30</th>
                        <th>
                            VII
                            <br />
                            3:30-4:00
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='special'>Monday</td>
                        <td>Eng</td>
                        <td rowSpan='5' className='special'>
                            Break
                        </td>
                        <td>Phy</td>
                        <td>chem</td>
                        <td rowSpan='5' className='special'>
                            Lunch
                        </td>
                        <td>Tamil</td>
                        <td>Mat</td>
                        <td rowSpan='5' className='special'>
                            Break
                        </td>
                        <td>Com</td>
                    </tr>
                    <tr>
                        <td className='special'>Tuesday</td>
                        <td>Eng</td>
                        <td>Phy</td>
                        <td>chem</td>
                        <td>Tamil</td>
                        <td>Mat</td>
                        <td>Com</td>
                    </tr>
                    <tr>
                        <td className='special'>Wednesday</td>
                        <td>Eng</td>
                        <td>Phy</td>
                        <td>chem</td>
                        <td>Tamil</td>
                        <td>Mat</td>
                        <td>Com</td>
                    </tr>
                    <tr>
                        <td className='special'>Thursday</td>
                        <td>Eng</td>
                        <td>Phy</td>
                        <td>chem</td>
                        <td>Tamil</td>
                        <td>Mat</td>
                        <td>Com</td>
                    </tr>
                    <tr>
                        <td className='special'>Friday</td>
                        <td>Eng</td>
                        <td>Phy</td>
                        <td>chem</td>
                        <td>Tamil</td>
                        <td>Mat</td>
                        <td>Com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TimeTable;
