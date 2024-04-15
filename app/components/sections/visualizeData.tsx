import Card from "../cards";

import floatingImgFeaturesData from "../data/floatingImgFeatures";

import borderImg from '~/assets/images/border.png'

import { useState } from 'react';
import featureGraphImg from '~/assets/images/featureGraph.png'
import visualizeImg from '~/assets/images/visualize.png'
import shareImg from '~/assets/images/share.png'
import { trustedUsersFeaturesData } from "../data/trustedUsers";
const VisualizeDataSection = () => {
    const [image, setImage] = useState(featureGraphImg);
    return ( <section className="flex items-center flex-col gap-40 bg-black py-36 text-white xs:px-4 sm:pt-36 sm:pb-10 sm:gap-20 overflow-x-hidden">
<div className=" relative w-full items-center justify-center flex   ">
{floatingImgFeaturesData.map((data, index) => (
            <Card floatingImg=" "  key={index}
            {...data} data={data}   />
                    ))}
    <div className="flex items-center justify-center  gap-8 w-[700px] text-center flex-col md:w-full">

<h1 className="text-[68px] font-bold leading-[1.1] lg:text-[52px] md:text-[32px] z-50">
The fastest way to  visualize and share <br className="xs:hidden"/>
  your data.
</h1>
<h1 className="text-[20px] text-lightGrey lg:text-[18px] md:text-base z-50">
Create beautiful, interactive graphs and dashboards, instantly.<br className="xs:hidden"/>
One click to get your data in. One click to share with your audience.
</h1>
<div className="flex flex-col gap-2 items-center">
<button className="glow-on-hover border-2 border-[#48ff00] text-lg md:text-base z-50" type="button">Create a graph now</button>
<h1 className="text-base text-lightGrey md:text-sm z-50">
No credit card. Just beautiful graphs.
</h1>
</div>
</div>
</div>
<div className="w-full px-20 relative sm:px-0 flex flex-col items-center gap-10 ">

<div className="w-full relative flex items-center justify-center flex-col">
<img src={borderImg} alt="" className="absolute left-[-22%] top-[-32%] w-[600px] md:max-w-full z-10 "/>
<img src={image} alt="" className="w-full relative z-20 rounded-2xl"/>
<div className="flex gap-2 items-center  rounded-md text-grey text-lg mx-auto absolute bottom-[-1%]  text-nowrap bg-black border border-grey md:text-base z-20 md:static">
<button className={ ` p-2 rounded-md ease-in duration-300 hover:text-white  ${image === featureGraphImg ? 'bg-grey text-white' : 'bg-transparent'}`}
          onClick={() => setImage(featureGraphImg)}>Data In</button>
          <button className={ ` p-2 rounded-md ease-in duration-300 hover:text-white ${image === visualizeImg ? 'bg-grey text-white' : 'bg-transparent'}`}
          onClick={() => setImage(visualizeImg)}>visualize </button>
                    <button className={ ` p-2 rounded-md ease-in duration-300 hover:text-white ${image === shareImg ? 'bg-grey text-white' : 'bg-transparent'}`}
          onClick={() => setImage(shareImg)}>Share</button>
</div>
</div>


<div className="flex  flex-col gap-10 items-center">
        <h1 className="text-[40px] font-semibold md:text-[26px] md:text-center">
        Trusted by 30,000+ users from data-driven teams
        </h1>
        <div className="flex gap-3 items-center flex-wrap justify-center"> 
        {trustedUsersFeaturesData.map(( data, index) => (
        <Card trustCard=" " key={index}  {...data} data={data} />
        ))}
      
        </div>
                    </div>
</div>
    </section> );
}
 
export default VisualizeDataSection;