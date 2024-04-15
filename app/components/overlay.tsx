import { Link } from "@remix-run/react";

const Overlay = () => {
  return (
    <div className=" hidden h-full w-full fixed z-[60] top-0 right-0 bg-black overflow-hidden  ease-out duration-300 md:flex text-white" id="myNav">
      <div className="relative top-[17%] w-auto  p-10 rounded-md   flex flex-col gap-4">
    
          <Link  to="/features">Features</Link>
          <Link to="/log-in">Login</Link>
          <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default Overlay;
