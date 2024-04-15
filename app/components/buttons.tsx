import { Link } from "@remix-run/react";

const Button = (props) => {
    return (<>
    {props.classic && (
<Link to={props.link}>
        <button className="bg-white text-center text-black px-5 py-3 rounded-[12px]" >
{props.classicName}
        </button>
        </Link>
    )}
    </>  );
}
 
export default Button;