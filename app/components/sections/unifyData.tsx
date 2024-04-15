import chromeIcon from '~/assets/icons/chrome.svg'
import { useState, useRef , useEffect} from 'react';
import chromeVid from '~/assets/videos/chrome.mp4';
import saveGraphyVid from '~/assets/videos/saveGraphy.mp4';
import refreshDataVid from '~/assets/videos/refreshData.mp4';
import layoutImg from '~/assets/images/layout.png'
import insightsImg from '~/assets/images/insights.png'
import shareLinkImg from '~/assets/images/shareLink.png'
import { useInView } from "framer-motion";

const UnifyDataSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const float= {
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }
  const videos = [
    chromeVid,
    saveGraphyVid,
    refreshDataVid
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play().catch(error => {
      // Autoplay was prevented, let's handle it
      console.error('Autoplay was prevented:', error);
    });

    // Add event listener for ended to move to the next video
    const handleVideoEnded = () => {
      if (currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      } else {
        setCurrentVideoIndex(0); // Loop back to the first video
      }
    };

    videoRef.current.addEventListener('ended', handleVideoEnded);

    // Cleanup the event listener on unmount
    return () => {
      videoRef.current.removeEventListener('ended', handleVideoEnded);
    };
  }, [currentVideoIndex, videos.length]);
    return (<section className="flex   flex-col gap-32 sm:gap-10 px-36 py-20 xl:px-20 md:pt-32 xs:px-4 items-center " >
<div className="grid grid-cols-2 w-full gap-10 
 xl:grid-cols-1"  >
<div className="flex items-start  gap-10 flex-col">
<div className="flex items-start  gap-5 flex-col">
<div className="flex gap-2 items-center rounded-3xl text-blue bg-lightGrey p-2">
<img src={chromeIcon} alt="chrome"/>
<h1>
    Click to save
</h1>

</div>
<h1 className='text-[40px] font-semibold md:text-[26px] md:text-center'>
Unify your data
</h1>
<p className='text-base xl:w-[600px] md:w-full'>
One-click to import data from Hubspot, Google Analytics, Google Search Console, LinkedIn Ads, Meta Ads, Google Sheets, and more into a single, interactive view. No complex integrations, no data analysts, no learning curve, just magic.
</p>
</div>
<div className='text-[20px] text-[#909090] flex flex-col gap-2'>
<p className={currentVideoIndex === 0 ? 'text-black' : ''}><span className={currentVideoIndex === 0 ? 'text-blue' : ''}>1.</span> Install Chrome Extension.
</p>
        <p className={currentVideoIndex === 1 ? 'text-black' : ''}><span className={currentVideoIndex === 1 ? 'text-blue' : ''}>2.</span> Explore data. Click to save.
</p>
        <p className={currentVideoIndex === 2 ? 'text-black' : ''}><span className={currentVideoIndex === 2 ? 'text-blue' : ''}>3.</span> Refresh weekly reports in a single click.
</p>
</div>
</div>

      <div className='w-[660px] h-[500px] 2xl:w-[560px] 2xl:w-[400px] xl:w-full xl:h-full'>
      <video
 ref={videoRef}
 src={videos[currentVideoIndex]}
 autoPlay
 muted 
 className='w-full'
      />
      </div>

</div>
<div className=' bg-black rounded-[32px] w-full grid grid-cols-2 gap-16 text-white overflow-hidden lg:grid-cols-1 lg:items-center lg:text-center' ref={ref}  style={float}>
    <div className='flex items-start gap-5 flex-col py-8 px-16 xs:px-4 justify-center lg:order-5 lg:items-center xs:px-4' style={float} >
<h1 className='text-[40px] font-semibold md:text-[26px] lg:text-center'>
Make your data shine.
</h1>
<p className='text-[20px]  lg:text-base lg:text-center'>
Your data deserves better than slide decks with static screenshots or dashboards that take forever to load. Say hello to stunning interactive boards that will wow your audience.
</p>
    </div>
    <div className='py-8 layout-container lg:order-4 '>
        <img src={layoutImg} className='mx-auto' alt="layout"/>
    </div>
    <div className='py-8 insights-container lg:order-5' >
        <img src={insightsImg} alt="insights" className='mx-auto'/>
    </div>
    <div className='flex items-start gap-5 flex-col py-8 px-16 xs:px-4 justify-center lg:order-6 lg:items-center'>
<h1 className='text-[40px] font-semibold md:text-[26px] lg:text-center '>
Explore. Explain.

</h1>
<p className='text-[20px]  lg:text-base lg:text-center'>
Explore data in the tools you’ve already mastered, then save it in Graphy to tell your data story with AI Insights, comments, annotations, goals, trend lines, and even emojis.
</p>
    </div>
    <div className='flex items-start gap-5 flex-col py-8 px-16 xs:px-4 justify-center lg:order-9 lg:items-center'>
<h1 className='text-[40px] font-semibold md:text-[26px] lg:text-center'>
Share.
</h1>
<p className='text-[20px]  lg:text-base lg:text-center'>
Built for your existing workflow.
Share interactive boards via email, Slack or Teams, embed in Notion, Canva or Tome, or drop consistent, high-quality images into Slides or PowerPoint.

</p>
    </div>
    <div className='py-8 share-container lg:order-8'>
        <img src={shareLinkImg} alt="insights" className='mx-auto'/>
    </div>
 
</div>
    </section>  );
}
 
export default UnifyDataSection;