import { Link } from "@remix-run/react";
import { footerCardData } from "./data/footerLinks";

const Footer = () => {
    return (  <section className="grid grid-cols-5 items-start  px-8 bg-white rounded-t-lg py-10 gap-5 md:flex flex-wrap">
{footerCardData.map((data, index) => (
            <FooterCard   key={index}
            {...data} data={data}  />
                    ))}
    </section>);
}
 
const FooterCard = (props) => {
    return (        <div className={`flex flex-col gap-4 items-start md:gap-2 md:items-center ${props.className}`}>
    <h1 className="text-base font-semibold ">
    {props.footerHeader}
    </h1>
    <div className="flex flex-col gap-2 md:gap-2">
    {props.footerLinksData.map((data, index) => (
            <FooterLinks  key={index} data={data} {...data} />
          ))}
    </div>
    <div>
    
    </div>
                </div>);
}
 
const FooterLinks = (props) => {
    return (
        <div className="flex flex-col ">
        <h1 className="text-base text-black ">
            <Link to={props.link}>
            {props.footerLink}
            </Link>
        </h1>
                    </div>
      );
}
 

export default Footer;