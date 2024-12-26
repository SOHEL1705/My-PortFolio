import guyimage from "../assets/images/guyWithlaptop.png";
import Gmail from "../components/Gmail"
import Socials from "./Socials";


const FrontImage = () => {
  return (
    <section className="" >
    <div className="flex items-center">
    <Socials/>
    <img
      src={guyimage}
      alt="Hero"
      className="w-full max-w-sm  m-4 md:max-w-md "
    />
    </div>
      <Gmail />
  </section>
  )
}

export default FrontImage