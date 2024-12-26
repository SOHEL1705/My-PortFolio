import Wrapper from "./Wrapper";
import { FaReact, FaAngular, FaHtml5, FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const States = () => {
  const states = [
    {
      uid: 1,
      title: "React",
      icon: <FaReact size={48} />,
    },
    {
      uid: 2,
      title: "HTML",
      icon: <FaHtml5 size={48} />,
    },
    {
      uid: 3,
      title: "CSS",
      icon: <FaCss3 size={48} />,
    },
    {
      uid: 4,
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill size={48} />,
    },
    {
      uid: 5,
      title: "Angular",
      icon: <FaAngular size={48} />,
    },
    {
      uid: 6,
      title: "JavaScript",
      icon: <DiJavascript size={48} />,
    },
  ];

  return (
    <Wrapper>
      <section className="mt-24 text-gray-100 dark:text-gray-300">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-3xl font-bold">Fully compatible with</h2>
          <div className="flex flex-wrap justify-center lg:justify-between">
            {states.map(({uid,icon,title}) => (
              <div key={uid} className="flex items-center justify-center p-6">
                <div className="mx-10 my-6 md:mx-12 lg:m-0">
                  {icon}
                </div>
                <span className="text-xl ml-2 text-gray-400 dark:text-gray-600">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default States;
