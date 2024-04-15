
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Overlay from "~/components/overlay";
import DataInsightsSection from "~/components/sections/dataToInsights";
import SaveToGraphySection from "~/components/sections/saveToGraphy";
import SingleViewSection from "~/components/sections/singleView";
import UseCasesSection from "~/components/sections/useCases";


import VisualizeDataSection from "~/components/sections/visualizeData";

function Features() {
    return ( <div className="bg-black ">
      <Navbar/>
      <Overlay/>
<VisualizeDataSection/>

<DataInsightsSection/>
<SingleViewSection/>
<UseCasesSection useCases=" "/>
<SaveToGraphySection/>
<Footer/>
    </div> );
}

export default Features;