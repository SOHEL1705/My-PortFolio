import Wrapper from "../components/Wrapper";
import Btn from "../components/Btn";
import FrontImage from "../components/FrontImage";
import PropTypes from "prop-types";

// const Hero = () => {
//   return (
//     <Wrapper>
//       <div
//         id="home"
//         className="flex flex-col-reverse md:flex-row items-center h-screen px-4 sm:px-8 md:px-16 pt-16 md:pt-20"
//       >
//         <section className="text-center md:text-left md:mr-8">
//           <div className="font-Oswald py-2 text-xl sm:text-2xl md:text-3xl">
//             Hi, There
//           </div>
//           <div className="font-Oswald font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
//             I&apos;m
//             <span className="px-2 text-red-500">Mohammad Sohel</span>
//           </div>
//           <div className="font-Oswald py-2 text-2xl sm:text-4xl md:text-5xl">
//             I&apos;m a
//             <span className="px-2 sm:px-4 text-blue-500">Web Developer</span>
//           </div>
//           <div className="flex justify-center md:justify-start gap-4 mt-4">
//             <Btn className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md">
//               Get in Touch
//             </Btn>
//             <Btn className="bg-slate-500 hover:bg-slate-600 px-6 py-2 rounded-md">
//               Contact Me
//             </Btn>
//           </div>
//         </section>
//         <div className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto md:mx-0">
//           <FrontImage />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Hero;

const Hero = ({
  greeting = "Hi,",
  name = "Mohammad",
  surname = "Sohel",
  description = "I am a fresher passionate about web development. This portfolio showcases my skills and projects as I embark on my journey to becoming a proficient developer.",
  onGetInTouch,
  onContactMe,
}) => {
  return (
    <Wrapper>
      <section id="home" className="min-h-screen ">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center lg:max-w-lg lg:text-left">
            <div className="font-Oswald py-2 text-xl sm:text-2xl md:text-3xl">
              <span className="text-blue-500">{greeting}</span> Im
            </div>
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
          {name}
              <span className="text-red-400 ml-2 dark:text-red-600">
                {surname}
              </span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">{description}</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Btn
                onClick={onGetInTouch}
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md"
              >
                Get in Touch
              </Btn>
              <Btn
                onClick={onContactMe}
                className="bg-slate-500 hover:bg-slate-600 px-6 py-2 rounded-md"
              >
                Contact Me
              </Btn>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8">
            <FrontImage />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

Hero.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  description: PropTypes.string,
  onGetInTouch: PropTypes.func,
  onContactMe: PropTypes.func,
};

export default Hero;
