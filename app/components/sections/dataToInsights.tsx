import Button from "../buttons";
import  graphVid from '~/assets/videos/graphVid.mp4'
import { dataInsightsFloat } from "../data/floatingImgFeatures";
import Card from "../cards";
import Slideshow from "../slideshow";
import buttonFamGraphImg from '~/assets/images/buttonFamGraph.png'
import lineGraphImg from '~/assets/images/lineGraph.png'
import pieGraphImg from '~/assets/images/pieGraph.png'
import blueGImg from '~/assets/images/blueG.png'
import maroonGImg from '~/assets/images/maroonG.png'
import lemonGImg from '~/assets/images/lemonG.png'
import SimpleLineChart, { CisLineChart } from "../graphs/lineChart";
import BarGraph, { ColorPicker } from "../graphs/barChart";
import { useGraph } from "../graphContext";
function DataInsightsSection() {
    const images = [
        buttonFamGraphImg,
       lineGraphImg,
        pieGraphImg,
      ];
      const secImages =[
        blueGImg,
        lemonGImg,
         maroonGImg,
      ]
      const { fillColor} = useGraph();
    return (  <section className="px-10 flex-col flex gap-20

      py-40 bg-gradient-to-b from-white from-20% t0-black  to-30%  md:py-10 md:gap-10 md:px-4">

<div className="w-[1000px]  lg:w-full text-[40px] lg:text-[30px] flex flex-col items-center justify-center mx-auto  leading-normal font-[550] relative md:text-[20px] px-8 sm:px-2 sm:text-base">
    {dataInsightsFloat.map((data, index)=>(
       <Card key={index} data={data} {...data} floatingImg=" " />
    ))}
<h1>
We get it. Turning <span className=" bg-clip-text text-transparent bg-gradient-to-r from-lightBlue to-blue">data into insights</span> is a nightmare.
<br/>
 Not anymore.

 <br/>
  Seamlessly pull data from disparate sources <span className=" bg-clip-text text-transparent bg-gradient-to-r from-green to-lightGreen">into a single view.</span>  Create interactive reports in seconds, not hours. Share with <span className=" bg-clip-text text-transparent bg-gradient-to-r from-lightMagenta to-magenta">all your team</span> the instant they need them.
</h1>
</div>
<div className="bg-black w-full rounded-3xl flex flex-col items-center py-32 lg:py-10 px-4">
<div className="flex flex-col gap-6 items-center text-white">
<h1 className="font-semibold text-[56px] text-center lg:text-4xl md:text-[26px]">
The easiest way to get data in
</h1>
<p className=" text-[20px] text-center text-lightGrey md:text-base">
Pull all your data into a single place with our one-click Chrome extension.
<br/>
No code, no hassle, just magic.
</p>
<div className="flex flex-col items-center gap-3">
<Button classic=" "  link="#" classicName="Sign up"/>
<p className=" text-sm text-center text-lightGrey">
100 early access spots, public release in Jan 2024
</p>
</div>
</div>
<div className="w-full">
<video

 src={graphVid}
 autoPlay
 loop
 muted 
 className='w-full'
      />
</div>
</div>
<div className="flex flex-col items-center text-white gap-12 ">
<h1 className="font-semibold text-[56px] text-center lg:text-4xl md:text-[26px]">
Clarity for your data
</h1>
<div className=" grid grid-cols-3 gap-3 w-full grid-rows-4 lg:grid-rows-6  lg:grid-cols-4">
<div className="col-span-2 lg:col-span-4 rounded-3xl border border-grey relative overflow-hidden w-full   row-span-2 bg-[#0f0f0f]">
    <div className=" flex flex-col  z-40  gap-4 relative">
<Slideshow  interval={5000}  images={images}/>
<Slideshow  interval={5000}  images={secImages}/>
<div className="absolute bottom-0 py-6 xs:py-2 px-10 w-full -30 bg-[#0f0f0f] xs:py-2 md:px-4">
<h1 className="text-base text-lightGrey md:text-sm ">
Stunning visuals
</h1>
<h1 className="text-2xl  text-white md:text-base ">
Charts you&apos;ll be proud to share.
</h1>
</div>
</div>
</div>
<div className="row-span-2 lg:col-span-2 xs:col-span-4 rounded-3xl border border-grey flex flex-col bg-[#0f0f0f] p-4 justify-between ">
<SimpleLineChart/>
<div className=" py-6 xs:py-2 px-10 w-full -30 bg-[#0f0f0f] md:px-2">
<h1 className="text-base text-lightGrey md:text-sm ">
Power-ups
</h1>
<h1 className="text-2xl  text-white  md:text-base">
One click goals, trend lines and averages.
</h1>
</div>
</div>
<div className="row-span-2 col-span-1 lg:col-span-2  rounded-3xl xs:col-span-4 border border-grey flex flex-col bg-[#0f0f0f] p-4 px-10 justify-between relative overflow-hidden md:px-2"  >
  <div className="absolute bottom-0 blur-[100px] w-full p-6 h-[100px] z-10 ease-out duration-300" style={{  background: `linear-gradient(to bottom, ${fillColor}, #ffffff)`, transition: 'all 2s ease'}}> 

  </div>
  <div className="flex gap-4 flex-col w-full ">
<div className="flex flex-col gap-2 md:gap-0">
<h1 className="text-lightGrey text-sm ">
User growth in H1
</h1>
<h1 className="text-xl font-bold md:text-base">
19,232
</h1>
</div>
  </div>

  <BarGraph/>
  <ColorPicker  />
<div className=" py-6 xs:py-2  w-full -30 "  >
<h1 className="text-base text-lightGrey md:text-sm ">
Themes
</h1>

<h1 className="text-2xl  text-white md:text-base ">
Our gorgeous palettes or your brand colours.
</h1>
</div>
</div>
<div className="row-span-2 col-span-2 lg:col-span-4 rounded-3xl border border-grey flex flex-col bg-[#0f0f0f]  overflow-hidden justify-between">
<CisLineChart/>
<div className=" py-6 xs:py-2 px-10 w-full -30 bg-[#0f0f0f] md:px-2">
<h1 className="text-base text-lightGrey md:text-sm ">
Annotations
</h1>
<h1 className="text-2xl  text-white md:text-base ">
Add annotations, highlight key metrics and celebrate your wins with emojis.
</h1>
</div>
</div>
</div>
</div>
    </section>);
}

export default DataInsightsSection;