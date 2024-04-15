import Card from "../cards";
import featuresData from "../data/features";
import trustedUsersData from "../data/trustedUsers";


function TrustedUsersSection() {
    return ( 
        <section className="flex   flex-col gap-32 sm:gap-10 px-36 py-20 xl:px-20  xs:px-4 items-center md:py-10 ">

<div className="flex  flex-col gap-10 items-center">
        <h1 className="text-[40px] font-semibold md:text-[26px] md:text-center">
        Trusted by 30,000+ users from data-driven teams
        </h1>
        <div className="flex gap-3 items-center flex-wrap justify-center"> 
        {trustedUsersData.map(( data, index) => (
        <Card trustCard=" " key={index}  {...data} data={data} />
        ))}
      
        </div>
                    </div>
            <div className="flex  flex-col gap-10 items-center text-center ">

<div className="flex  flex-col items-center  ">
<h1 className="text-[40px] font-semibold md:text-[26px] md:text-center">
Your reporting nightmares are over
</h1>
<h1 className="text-base w-[450px]  xs:w-full">
Say goodbye to scattered data, inconsistent screenshots, endless waiting on data analysts, dashboards that take forever to load and people guessing what the data actually means.
</h1>
</div>
<div className="flex  items-center flex-wrap divide-x divide-dashed text-start border-y  border-dashed justify-center"> 
{featuresData.map((data, index) =>(
    <Card featuresCard=" " key={index} {...data} data={data}/>
))}
</div>
            </div>
        </section>
     );
}

export default TrustedUsersSection;