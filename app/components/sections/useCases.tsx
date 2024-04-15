import Card from "../cards";
import { useCasesData, useDescData } from "../data/useCases";
import gridImg from "~/assets/images/grid.png"
import cindyImg from "~/assets/images/cindy.png"
import threeImg from "~/assets/images/three.png"
const UseCasesSection = (props: useCasesProps) => {
    return (
    <>
    {props.cindy && (
    <section className="flex   flex-col gap-32 sm:gap-10 px-36 py-20 xl:px-20 md:pt-32 xs:px-4 items-center " >
    <div className="flex items-center gap-3 flex-col ">
    <div className="flex items-center rounded-3xl text-blue bg-lightGrey p-2">
    <h1>
        Click to save
    </h1>
    </div>
    <h1 className='text-[40px] font-semibold md:text-[26px] md:text-center'>
    How marketers use Graphy
    </h1>
    <p className='text-base w-[450px] md:w-full text-center'>
    A painkiller for all your reporting headaches, Graphy is for data-driven marketers who want to save time, up their game and ensure everyone understands the value their work delivers.
    </p>
    </div>
    <div className="flex flex-col gap-6 items-center relative">
    {useCasesData.map((data, index) => (
                <Card adminCard=" "  key={index}
                {...data} data={data}     />
                        ))}
                        <img src={gridImg} alt="" className="absolute left-2/4 right-2/4 translate-x-[0%] overflow-hidden  lg:w-full lg:translate-x-[-50%]"/>
                        <img src={gridImg} alt="" className="absolute left-2/4 right-2/4 translate-x-[-100%] overflow-hidden lg:hidden"/>
                        <Card adminCard=" " adminSpeech="
    Thanks to Graphy 5 days of reporting were done in 4 hours. My team were in love! They were like, oh my God, what is this, this is the future!" admin=" " adminImg={cindyImg} adminName="Cindy Ibanez" adminPost="
    Head of Marketing at
    Wynwood House
    Venafi" adminFloat=" "
    floatImg={threeImg}/>
    </div>
    
        </section>
    )}
    {props.useCases && (
        <section className="px-[250px] bg-black py-20 divide-y divide-dashed divide-grey 2xl:px-20 lg:px-4" >
{useDescData.map((data, index)=>(
    <Card useCasesCard=" " key={index} data={data} {...data}/>
))}
        </section>
    )}
    </>
  );
}
 

export default UseCasesSection;
export interface useCasesProps {
    cindy: string;
    useCases: string;
}