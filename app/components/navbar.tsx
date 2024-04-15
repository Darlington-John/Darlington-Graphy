import { Link } from '@remix-run/react';
import graphyLogoImg from '~/assets/images/Graphy.svg'
import Button from './buttons';
import BarsIcon from '~/assets/icons/Bars.svg';
import XmarkIcon from '~/assets/icons/Xmark.svg';
import { useState } from 'react';

const  Navbar = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [icon, setIcon] = useState(BarsIcon);

  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? BarsIcon : XmarkIcon);
  };
    return (<nav className="w-[1200px] rounded-full sm:rounded-none sm:top-0  flex px-4 py-2 items-center justify-between bg-black text-white text-base xl:w-full mx-auto my-auto fixed top-6  left-2/4 right-2/4 translate-x-[-50%] z-[70] ">
   
        <Link to="/">
        <img src={graphyLogoImg} alt="logo"/>
        </Link>
        <div className='flex gap-5  items-center'>
            <div className='flex gap-5  items-center md:hidden'>
            <Link to="/features">
            Features
            </Link>
            <Link to="#">
         Pricing
            </Link>
            <Link to="#">
            Log in
            </Link>
            </div>
            <div className='md:hidden'>
            <Button classic=" "  link="#" classicName="Sign up"/>
            </div>
            <div className="BarsIcon hidden md:flex">
          <div  onClick={handleToggleNav}>
            <img id="barsIcon" src={icon}  className='w-6' alt=""/>
          </div>
        </div>
        </div>
    </nav>  );
}
export const toggleNav = () => {
    const navElement = document.getElementById('myNav');
  
    if (navElement.style.height === '40%') {
      navElement.style.height = '0%';
    } else {
      navElement.style.height = '40%';
    }
  };

  
export default  Navbar;