const ProjectCard = () => {
  const projects = [
    {
      uid: 1,
      title: "Weather App",
      description: "A weather forecasting application with real-time updates.",
      tech: ["React", "API", "Tailwind"],
      date: ["2023-01-01", "2023-03-01"],
    },
    {
      uid: 2,
      title: "Task Manager",
      description: "A task management app with drag-and-drop functionality.",
      tech: ["Vue", "Pinia", "CSS"],
      date: ["2023-02-01", "2023-04-01"],
    },
    {
      uid: 3,
      title: "E-commerce Platform",
      description:
        "An online store with a custom shopping cart and payment integration.",
      tech: ["Next.js", "Redux", "Node.js"],
      date: ["2023-03-01", "2023-05-01"],
    },
  ];

  return (
    <div className="grid gap-6 p-4">
      {projects.map(({ uid, title, description, tech, date }, index) => (
        <div
          key={uid}
          className="min-w-lg my-4 p-4 shadow-md rounded-md dark:bg-slate-800 bg-white text-gray-900 dark:text-white"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
            {index % 2 === 0 ? (
              <>
                {/* Image on the left */}
                <div className="w-full md:w-1/2">
                  <img
                    src="https://source.unsplash.com/random/480x360/?4"
                    alt={`${title} thumbnail`}
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                  {/* Date */}
                  <div className="flex items-center text-xs mt-2">
                    <span className="text-gray-700 dark:text-gray-300">
                      {`Start Date: ${date[0]}`}
                    </span>
                    <span className="ml-4 text-gray-700 dark:text-gray-300">
                      {`End Date: ${date[1]}`}
                    </span>
                  </div>
                </div>
                {/* Description on the right */}
                <div className="w-full md:w-1/2 md:pl-4">
                  <h3 className="text-lg font-bold capitalize text-blue-500 dark:text-red-500">
                    {title}
                  </h3>
                  <p className="leading-snug dark:text-gray-400 mt-2">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-semibold text-gray-900 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Description on the left */}
                <div className="w-full md:w-1/2 md:pr-4">
                  <h3 className="text-lg font-bold capitalize text-blue-500 dark:text-red-500">
                    {title}
                  </h3>
                  <p className="leading-snug dark:text-gray-400 mt-2">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-semibold text-gray-900 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Image on the right */}
                <div className="w-full md:w-1/2">
                  <img
                    src="https://source.unsplash.com/random/480x360/?4"
                    alt={`${title} thumbnail`}
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                  {/* Date */}
                  <div className="flex items-center text-xs mt-2">
                    <span className="text-gray-700 dark:text-gray-300">
                      {`Start Date: ${date[0]}`}
                    </span>
                    <span className="ml-4 text-gray-700 dark:text-gray-300">
                      {`End Date: ${date[1]}`}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
