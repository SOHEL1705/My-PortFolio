import { FaInstagram, FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const social = [
    {
      id: 1,
      url: "#",
      title: "Facebook",
      icon: <FaFacebookF className="w-4 h-4" />,
    },
    {
      id: 2,
      url: "#",
      title: "Instagram",
      icon: <FaInstagram className="w-4 h-4" />,
    },
    {
      id: 3,
      url: "#",
      title: "Google",
      icon: <FaGoogle className="w-4 h-4" />,
    },
    {
      id: 4,
      url: "#",
      title: "GitHub",
      icon: <FaGithub className="w-4 h-4" />,
    },
    {
      id: 5,
      url: "#",
      title: "X (Twitter)",
      icon: <FaXTwitter className="w-4 h-4" />,
    },
  ];

  return (
    <div>
      <footer className="w-full z-50 p-2 text-gray-100 dark:text-gray-100 
        bg-gradient-to-r from-slate-950/10 via-slate-900/50 to-slate-950/90 backdrop-blur-md shadow-md">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400 dark:divide-gray-600">
          <div className="self-center py-4 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <div>Email | <span className="font-bold">sohel170596@gmail</span></div>
          </div>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              {social.map((item) => (
                <a
                  key={item.id}
                  rel="noopener noreferrer"
                  href={item.url}
                  title={item.title}
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 via-red-700/50 to-red-500 text-gray-900 dark:text-gray-50"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
