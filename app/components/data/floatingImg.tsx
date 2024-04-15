import BarImg from '~/assets/images/bar.png'
import spinAngleImg from '~/assets/images/spinAngle.png'
import docsImg from '~/assets/images/docs.png'
import metaImg from '~/assets/images/meta.png'
import connectImg from '~/assets/images/connect.png'
import superImg from '~/assets/images/super.png'
import linkedImg from '~/assets/images/linked.png'
const floatingImgData =[
    {id: 1,
        className: 'absolute z-10 w-[100px] right-[35%] top-[-35%] -rotate-6 md:w-[50px] md:top-[-10%]',
        float: BarImg
    },
    {id: 2,
        className: 'absolute z-10 w-[200px] right-[15%] top-[-20%] rotate-45 md:w-[100px] md:top-[-10%]',
        float: spinAngleImg
    },
    {id: 3,
        className: 'absolute z-10 w-[80px] right-[55%] top-[-20%] rotate-6 md:w-[40px] md:top-[0%]',
        float: docsImg
    },
    {id: 4,
        className: 'absolute z-10 w-[100px] right-[30%] top-[30%] -rotate-6 md:w-[50px] md:top-[40%]',
        float: metaImg
    },
    {id: 5,
        className: 'absolute z-10 w-[80px] right-[15%] top-[30%] rotate-6 md:w-[40px] md:top-[40%]',
        float: connectImg
    },
    {id: 6,
        className: 'absolute z-10 w-[100px] right-[40%] top-[70%] rotate-6 md:w-[50px] md:top-[70%]',
        float: superImg
    },
    {id: 6,
        className: 'absolute z-10 w-[80px] right-[20%] top-[70%] rotate-6 md:w-[40px] md:top-[70%]',
        float: linkedImg
    },
]

export default floatingImgData;

