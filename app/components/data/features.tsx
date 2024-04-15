import diskImg from '~/assets/images/disk.svg'
import flashImg from '~/assets/images/flash.svg'
import  cpuImg from '~/assets/images/cpu.svg'
import clockImg from '~/assets/images/clock.svg'
const featuresData = [
    {
        id: 1,
        featureImg:diskImg ,
        feature: "Build a dashboard in <2 minutes, refresh on demand. "  ,
        bgColor: " bg-[#e800a419]",
    },
    {
        id: 2,
        featureImg:flashImg ,
        feature: "Wow your stakeholders with beautiful, interactive reports."  ,
        bgColor: " bg-[#a81ae919]",
    },
    {
        id: 3,
        featureImg:cpuImg ,
        feature: "Powered by AI for increased productivity.  "  ,
        bgColor: " bg-[#ffc70019]",
    },
    {
        id: 4,
        featureImg:clockImg ,
        feature: "Cut time spent creating reports by 80%. "  ,
        bgColor: " bg-[#3b72ff19]",
    }
]
export  default featuresData;