import Button from "../buttons";
import Card from "../cards";
import floatingImgData from "../data/floatingImg";
import dashboardImg from  '~/assets/images/dashboard.png';
import { useInView } from "framer-motion";

import { useRef} from 'react';
import vectorImg from '~/assets/images/vector.png'    
import chromeImg from '~/assets/images/chrome.svg'
import pinImg from '~/assets/images/pin.png'
import starIcon from '~/assets/icons/star.svg'
const GetStarted = () => {
const ref = useRef(null);
    const isInView = useInView(ref, { once:false });
    const float= {
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }
    const Background = {
        background: `url("${vectorImg}")`,
        backgroundRepeat: 'no-Repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom bottom'
      };
    return (  <section ref={ref} className="flex   flex-col gap-32 sm:gap-10 px-36 py-20 pt-56 xl:px-20 md:pt-32 xs:px-4" style={Background}>
        <div className="flex  text-white flex-col gap-5  justify-center relative">
        <h1 className="text-[60px] font-extrabold w-[840px] leading-tight tracking-wide z-40 lg:text-[40px] lg:w-auto sm:text-2xl sm:leading-none xs:text-2xl" style={float} >
Marketing reports in minutes.
<h1 className="text-aquaBlue">
Data from all your tools in one 
beautiful, shareable view.
</h1>
</h1>
<h1 className="text-[20px] xs:text-base z-40" style={float} >
As simple as taking a screenshot. As powerful as a dashboard.
</h1>
<div className="flex flex-col gap-4 items-start z-40" style={float} >
<Button classic=" "  link="#" classicName="Get started now"/>
<h1 className="text-[18px] xs:text-base">
No credit card. Just beautiful graphs.
</h1>
</div>
{floatingImgData.map((data, index) => (
            <Card floatingImg=" "  key={index}
            {...data} data={data}   />
                    ))}
        </div>
<div className="w-full flex items-center justify-center flex-col gap-10">
<img src={dashboardImg} alt="dashboard" className="w-full"/>
<div className="flex items-center gap-6">
<div className="flex flex-col gap-2 items-center">
    <img src={chromeImg} alt="chrome" className="w-12 sm:w-8"/>
<div className="flex gap-2 items-center">
<img src={starIcon} alt="star" className="sm:w-3"/>
<h1 className="text-white text-sm sm:text-xs ">5.0</h1>
</div>
</div>
<div className="flex flex-col gap-2 items-center">
    <img src={pinImg} alt="chrome" className="w-12 sm:w-8"/>
<div className="flex gap-2 items-center">
<img src={starIcon} alt="star" className="sm:w-3"/>
<h1 className="text-white text-sm sm:text-xs">5.0</h1>
</div>
</div>
</div>
</div>
    </section>);
}
 
export default GetStarted;