import Icons from "../components/Icons";
import { FaLinkedinIn, FaGithub, FaGoogle } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4">
      <div className="h-16 w-1 rounded-lg bg-slate-400"></div>

      <div className="flex flex-col gap-6">
        
        <Icons
          url="https://www.linkedin.com/in/sohel-ansari-a27212183"
          ariaLabel="LinkedIn Profile"
        >
          <FaLinkedinIn className="text-slate-400 text-2xl" />
        </Icons>
        <Icons url="https://github.com/SOHEL1705" ariaLabel="Github Profile">
          <FaGithub className="text-slate-400 text-2xl" />
        </Icons>
        <Icons url="sohel170596@gmail.com" ariaLabel="Gmail">
          <FaGoogle className="text-slate-400 text-2xl" />
        </Icons>
      </div>
      <div className="h-52 w-1 bg-slate-400 rounded-lg"></div>
    </div>
  );
};

export default Socials;
