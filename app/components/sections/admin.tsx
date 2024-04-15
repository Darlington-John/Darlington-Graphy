import Card from "../cards";
import withoutGarphy from '~/assets/images/withoutGarphy.png'
import withGraphy from '~/assets/images/withGraphy.png'
import JoeImg from '~/assets/images/Joe.png'
import ChromeImg from '~/assets/images/chrome.png'
import { useState, useRef } from 'react';
import { useInView } from "framer-motion";

function AdminSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });
    
    const zoom= {
        transform: isInView ? "scale(1)" : "scale(0.7)",
            opacity: isInView ? 1 : 0,
            transition: "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }
    const [image, setImage] = useState(withGraphy);

    
    return (<section className="flex   flex-col gap-32 sm:gap-10 px-36 py-20 xl:px-20 md:pt-32 xs:px-4 items-center bg-black rounded-b-[28px] relative">

        <Card adminCard=" " adminSpeech="Incredibly powerful tool. Create stunning charts from disparate sources with the context and commentary your stakeholders need to better understand the numbers. Most other dashboarding tools are passive and leave it up to the stakeholders to interpret the numbers." admin=" " adminImg={JoeImg} adminName="Joe Edwards" adminPost="
Senior Growth Marketing Manager at

Venafi" adminFloat=" " floatImg={ChromeImg}/>
        <div className="flex items-center  w-full flex-col text-white"  style={zoom}  ref={ref}>
<img src={image} alt="graphy" className="w-[900px]"/>


<div className="flex gap-2 items-center  rounded-md text-grey text-lg mx-auto absolute bottom-[-17%]  text-nowrap bg-black border border-grey md:text-base">
<button className={ ` p-2 rounded-md ease-in duration-300 hover:text-white  ${image === withGraphy ? 'bg-grey text-white' : 'bg-transparent'}`}
          onClick={() => setImage(withGraphy)}>With Graphy</button>
          <button className={ ` p-2 rounded-md ease-in duration-300 hover:text-white ${image === withoutGarphy ? 'bg-grey text-white' : 'bg-transparent'}`}
          onClick={() => setImage(withoutGarphy)}>Without Graphy </button>
</div>
        </div>
    </section>  );
}

export default AdminSection;