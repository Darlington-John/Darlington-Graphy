import { useInView } from "framer-motion";
import { useRef} from 'react';
  const  Card= (props: CardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (<>
      {props.floatingImg  && (
<img src={props.float} alt="float"  ref={ref}   className={`ease-out duration-[1s] z-20  ${props.className}  ${isInView ? 'rotate-[360deg] opacity-100 ' : " opacity-0"}`}/>
      )}
      {props.adminCard && (
        <div className="relative w-[600px] sm:w-full ">
          {props.adminFloat && (    <img src={props.floatImg}alt="admin" className=" rounded-full absolute w-40 top-[-25%] left-[-15%] z-10 sm:left-[0px]"/>)}
      
      
        <div className="bg-white p-8 flex flex-col items-start rounded-3xl w-full gap-8 relative z-40 border border-lightGrey">
          {props.admin && (
            <div className="flex items-start gap-3">
<img src={props.adminImg}alt="admin" className="w-16 rounded-full  xs:w-12"/>

<div className="flex items-start gap-0 flex-col">
  <h1 className="text-[24px] font-bold md:text-[20px]">
{props.adminName}
</h1>
  <h1 className="text-[20px] md:text-base">
{props.adminPost}
</h1>
</div>
</div>
          )}
          <div className="flex flex-col gap-1">
  <h1 className="text-[24px] font-semibold md:text-[20px]">
{props.adminReports}
</h1>
<h1 className="text-[20px] md:text-base">
{props.adminSpeech}
</h1>
</div>
        </div>
        </div>
      )}
      {props.trustCard && (
        <div className={props.className}>
<img src={props.partner} alt="partners" className="w-[140px] md:w-[80px]"/>
        </div>
      )}
      {props.featuresCard && (
         <div className="flex flex-col gap-3 px-6 py-8 items-start w-[300px] 2xs:w-full">
          <div className={`rounded-lg p-2  ${props.bgColor}`} >
<img src={props.featureImg} alt="feature" />
</div>
<h1 className="font-base">
{props.feature}
</h1>
         </div>
      )}
      {props.useCasesCard && (
        <div className="grid grid-cols-4 gap-6 items-center  text-white py-12">
<div className="col-span-1"><img src={props.useImg}  alt="" className="w-36 lg:w-20"/></div>
<div className="col-span-1 xs:col-span-3">
  <h1 className="text-[40px] font-bold lg:text-xl">
{props.uses}
  </h1>
</div>
<div className="col-span-2  xs:col-span-4">
<h1 className="text-[20px]  text-lightGrey lg:text-base">
{props.desc}
  </h1>
</div>
        </div>
      )}
      </>
    );
  }
     
  export interface CardProps {
    floatingImg: string;
    float: string;
    className: string;
    adminCard: string;
    trustCard: string;
    partner: string;
    feature: string;
    featureImg: string;
    featuresCard: string;
    bgColor: string;
    adminPost: string;
    adminName: string;
    adminImg: string;
    admin: string;
    adminFloat: string;
    adminSpeech: string;
    adminReports: string;
    floatImg: string;
    useCasesCard: string;
    useImg: string;
    uses: string;
    desc: string;
  }
  export default Card ;