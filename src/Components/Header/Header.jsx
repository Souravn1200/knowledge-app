import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='md:flex justify-between mt-4 px-5 max-w-4xl mx-auto'>
            
             <h1 className='text-4xl'>Knowledge Cafe!</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;