import mGraphImg from '~/assets/images/mGraph.png'
import buttonGraphImg from '~/assets/images/buttonGraph.png'
import barShawImg from '~/assets/images/barShaw.png'
import lightGraphImg from '~/assets/images/lightGraph.png'
import wigglyGraphImg from '~/assets/images/wigglyGraph.png'
import colorGraphImg from '~/assets/images/colorGraph.png'
import logoImg from '~/assets/images/logo.svg'
import logoWhiteImg from '~/assets/images/logoWhite.svg'
import { useInView } from "framer-motion";
import vectorBackground from '~/assets/images/vector.svg'
import bgImg from '~/assets/images/bg.svg'
import playImg from '~/assets/images/play.svg'
import { useRef} from 'react';
function SaveToGraphySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (  <section className="bg-black relative">
        <div className='flex gap-4 items-center justify-between bg-gradient-to-b from-darkGrey t0-black  w-[300px] rounded-full text-white text-[30px] font-semibold  px-5 py-4 border border-darkGrey sticky   top-2/4 bottom-2/4 translate-y-[-50%] z-30 bg-black left-2/4 right-2/4 translate-x-[-50%] sm:w-[170px] sm:px-3 sm:py-2 sm:gap-2'>
<img src={logoImg} alt="logo" className='sm:w-6 '/>
<h1 className='sm:text-base sm:font-thin'>Save to Graphy</h1>
</div>
        <div className=" grid grid-cols-2 py-20 overflow-hidden gap-y-20  gap-x-20 relative sm:gap-y-4  2xs:grid-cols-1" ref={ref}>
        <div className="pl-8 sm:p-4"    >
<img src={mGraphImg} alt="feat"/>
</div>
<div  className="relative sm:p-4">
<img src={buttonGraphImg} alt="feat" className={`hover:opacity-100 ease-out duration-300 cursor-pointer   ${isInView ? 'opacity-70' : "opacity-0"}`}/>
</div>
<div className='sm:p-4'>
<img src={barShawImg} alt="feat"  className={`hover:opacity-100 ease-out duration-300 cursor-pointer  ${isInView ? 'opacity-70' : "opacity-0"}`}/>
</div>
<div className="sm:p-4">
<img src={lightGraphImg} alt="feat"/>
</div>
<div>
<img src={wigglyGraphImg} alt="feat"  className={`hover:opacity-100 ease-out duration-300 cursor-pointer  ${isInView ? 'opacity-70' : "opacity-0"}`}/>
</div>
<div className="pr-20 ">
<img src={colorGraphImg} alt="feat"/>
</div>
        </div>

<div className='w-full absolute bottom-0  bg-black z-40 vector text-white flex flex-col ' >
        <div className='relative'>
<div className='w-full absolute vector-gradient sm:hidden'>
</div>
        </div>
<img src={vectorBackground} alt='vector '  className='absolute w-full h-full fit-cover vector-img'/>
<div className='z-50 relative text-white flex flex-col  items-center pt-40 mx-auto gap-8  h-full w-full'>
        <img src={playImg} alt="" className='absolute bottom-0 w-full'/>
<div className='relative  flex items-center justify-center flex-col w-[600px] gap-6 pb-40 md:w-[400px] xs:px-2 xs:w-full sm:pb-20'>
<img src={bgImg} alt="logo" className=' absolute top-0 blur-2xl w-36'/>
<div className='bg-black p-4 rounded-3xl z-20 relative'>
<img src={logoWhiteImg} alt="logo" className='w-16  '/>
</div>
<div className='flex flex-col gap-4'>
<h1 className='text-[40px] font-semibold md:text-[26px] md:text-center'>
Create your first Board
</h1>
<h1 className='text-base w-[450px] md:w-full text-center'>
        Unlimited graphs, unlimited data, unlimited viewers. All for free. What are you waiting for?
        </h1>
</div>
<button className='bg-white rounded-lg  text-black py-2 px-3'>
Sign Up
</button>
</div>
</div>
</div>
    </section>);
}

export default SaveToGraphySection;