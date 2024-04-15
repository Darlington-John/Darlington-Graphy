import rodImg from '~/assets/images/rod.png'
import halfDoeImg from '~/assets/images/halfDoe.png'
import fullDoeImg from '~/assets/images/fullDoe.png'
import appImg from '~/assets/images/app.png'
import threeRodImg from '~/assets/images/threeRod.png'
import gridDoeImg from '~/assets/images/gridDoe.png'
import hiBarImg from '~/assets/images/hiBar.png'
import purDoeImg from '~/assets/images/purDoe.png'
import rainDoeImg from '~/assets/images/rainDoe.png'
import famBarImg from '~/assets/images/famBar.png'
import strawImg from '~/assets/images/straw.png'
import appoImg from '~/assets/images/appo.png'
import beetleImg from '~/assets/images/beetle.png'
import ahhhImg from '~/assets/images/ahhh.png'
import FanImg from '~/assets/images/Fan.svg'
import roundDoeImg from '~/assets/images/roundDoe.svg'
import tabImg from '~/assets/images/tab.png'
import lindaImg from '~/assets/images/linda.png'
import lexyImg from '~/assets/images/lexy.png'
import jamesImg from '~/assets/images/james.png'
const floatingImgFeaturesData =[
    {id: 1,
        className: 'absolute z-10 w-[100px] left-[-2%] top-[-5%] -rotate-6 lg:w-[50px] lg:top-[-10%] hover:rotate-2  md:opacity-[0.5] ',
        float: rodImg
    },
    {id: 2,
        className: 'absolute z-10 w-[150px] left-[5%] top-[-10%]  lg:w-[100px] lg:top-[-10%] hover:-rotate-2 md:opacity-[0.5] md:hidden ',
        float: halfDoeImg
    },
    {id: 3,
        className: 'absolute z-10 w-[100px] left-[15%] top-[10%]  lg:w-[80px] lg:top-[-10%] hover:-rotate-2 md:opacity-[0.5] ',
        float: fullDoeImg
    },
    {id: 4,
        className: 'absolute z-10 w-[100px] left-[7%] top-[30%] hover:-rotate-1 lg:w-[50px] lg:top-[40%] md:opacity-[0.5] ',
        float: appImg
    },
    {id: 5,
        className: 'absolute z-10 w-[120px] left-[-4%] top-[30%] rotate-6 lg:w-[40px] lg:top-[40%] hover:-rotate-2 md:opacity-[0.5] ',
        float: gridDoeImg
    },
    {id: 7,
        className: 'absolute z-10 w-[100px] left-[15%] top-[35%]  rotate-6 lg:w-[50px] lg:top-[70%] hover:-rotate-2 md:opacity-[0.5] md:hidden'   ,
        float: hiBarImg
    },
    {id: 8,
        className: 'absolute z-10 w-[100px] right-[20%] left-[7%] top-[55%] hover:-rotate-1 rotate-6 lg:w-[40px] lg:top-[70%] md:opacity-[0.5] md:hidden',
        float:purDoeImg
    },
    {id: 9,
        className: 'absolute z-10 w-[120px] left-[-4%] top-[70%] rotate-6 lg:w-[40px] lg:top-[40%] hover:-rotate-2 md:opacity-[0.5] ',
        float: threeRodImg
    },
    {id: 10,
        className: 'absolute z-10 w-[100px] right-[-2%] top-[-5%] -rotate-6 lg:w-[50px] lg:top-[-10%] hover:rotate-2  md:opacity-[0.5] ',
        float: purDoeImg
    },
    {id: 11,
        className: 'absolute z-10 w-[120px] right-[5%] top-[-10%]  lg:w-[100px] lg:top-[-10%] hover:-rotate-2 md:opacity-[0.5] md:hidden',
        float: famBarImg
    },
    {id: 3,
        className: 'absolute z-10 w-[100px] right-[15%] top-[10%]  lg:w-[80px] lg:top-[-10%] hover:-rotate-2 md:opacity-[0.5] ',
        float: rainDoeImg
    },
    {id: 4,
        className: 'absolute z-10 w-[120px] right-[7%] top-[20%] hover:-rotate-1 lg:w-[50px] lg:top-[40%] md:opacity-[0.5] ',
        float: strawImg
    },
    {id: 5,
        className: 'absolute z-10 w-[120px] right-[-4%] top-[30%] rotate-6 lg:w-[40px] lg:top-[40%] hover:-rotate-2 md:opacity-[0.5] ',
        float: threeRodImg
    },
    {id: 7,
        className: 'absolute z-10 w-[150px] right-[15%] top-[35%]  rotate-6 lg:w-[50px] lg:top-[70%] hover:-rotate-2 md:opacity-[0.5] md:hidden ' ,
        float: appoImg
    },
    {id: 8,
        className: 'absolute z-10 w-[170px] right-[20%] right-[7%] top-[55%] hover:-rotate-1 rotate-6 lg:w-[40px] lg:top-[70%] md:opacity-[0.5] md:hidden',
        float:beetleImg
    },
    {id: 9,
        className: 'absolute z-10 w-[120px] right-[-4%] top-[70%] rotate-6 lg:w-[40px] lg:top-[40%] hover:-rotate-2 md:opacity-[0.5] ',
        float: ahhhImg
    },
]
export const dataInsightsFloat = [
    {id: 1,
        className: 'absolute z-10 w-[100px] right-[40%] top-[-25%] rotate-6 lg:w-[40px] lg:top-[40%] hover:-rotate-2 md:opacity-[0.5] lg:hidden',
        float: roundDoeImg
    },
    {id: 2,
        className: 'absolute z-10 w-[100px] right-[50%] top-[-15%] rotate-6 lg:w-[40px] lg:top-[40%] hover:-rotate-2 md:opacity-[0.5] lg:hidden ',
        float: FanImg
    },
    {id: 3,
        className: 'absolute z-10 w-[120px] left-[-14%] top-[50%] rotate-6 lg:w-[40px] lg:top-[40%] hover:translate-y-6 md:opacity-[0.5] lg:hidden',
        float: tabImg
    },
    {id: 4,
        className: 'absolute z-10 w-[50px] right-[40%] top-[90%] rotate-6 lg:w-[40px] lg:top-[40%] hover:scale-110  md:opacity-[0.5] lg:hidden',
        float: lindaImg
    },
    {id: 5,
        className: 'absolute z-10 w-[50px] right-[30%] top-[90%]  rotate-6 lg:w-[40px] lg:top-[40%] hover:scale-110  md:opacity-[0.5] lg:hidden',
        float: lexyImg
    },
    {id: 6,
        className: 'absolute z-10 w-[50px] right-[20%] top-[90%]  rotate-6 lg:w-[40px] lg:top-[40%] hover:scale-110  md:opacity-[0.5] lg:hidden',
        float: jamesImg
    },
]

export default floatingImgFeaturesData;

