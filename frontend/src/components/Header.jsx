import logo from '../assets/logo-cnc.png';

function Header() {
  return(
    <div className="absolute w-full flex justify-center h-28 bg-[#EFA73C] shadow-sm shadow-black">
      <img
        className='w-20 h-24 pt-4' 
        src={logo} 
        alt="logo chaves na chapa" 
      />
    </div>
  );
}

export default Header;