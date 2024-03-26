import './AuthendicationForm.css';
const AuthendicationForm = ({ isFaculty }) => {
    console.log(isFaculty);
    return isFaculty ? (
        <form action='#'>
            <input type='email' name='email' placeholder='Enter your Email' />

            <input type='text' name='password' placeholder='Password' />
            <button type='submit' className='submit-btn'>
                Login In
            </button>
        </form>
    ) : (
        <form action='#'>
            <input
                type='number'
                name='roll_number'
                placeholder='Enter your Roll No'
            />

            <input type='date' name='password' />
            <button type='submit' className='submit-btn'>
                Login In
            </button>
        </form>
    );
};

export default AuthendicationForm;
