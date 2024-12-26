import Wrapper from "../components/Wrapper";
import ProjectCard from "../components/projectCard";

const Projects = () => {

  return (
    <Wrapper>
      <section id="projects" className="py-6 mt-28 text-gray-50 dark:text-slate-300">
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
      <h2 className="text-3xl font-bold">My Projects</h2>
          <ProjectCard />
        </div>
      </section>
    </Wrapper>
  );
};

export default Projects;
