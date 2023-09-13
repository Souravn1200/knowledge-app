import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='md:flex justify-between mt-4 px-5'>
            
             <h1 className='text-3xl'>Knowledge Cafe!</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;