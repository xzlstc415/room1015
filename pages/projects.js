import InputDropdown from "../components/projects/InputDropdown";
import ProjectCard from "../components/projects/ProjectCard";
import Layout from "../components/shared/Layout";
import useProjects from "../utils/useProjects";

const bedroomOptions = [
  {
    label: "1+",
    value: 1,
  },
  {
    label: "1+",
    value: 2,
  },
  {
    label: "3+",
    value: 3,
  },
];

const Projects = () => {
  const { getProjects } = useProjects();

  const projects = getProjects();

  return (
    <Layout>
      <div className="flex-col bg-beige-1 px-5 py-10 w-full">
        <h2 className="text-4xl text-white mb-5">Find your Dream home</h2>
        <div className="flex-row flex justify-between">
          <InputDropdown label="Sort By" />
          <InputDropdown label="Status" />
          <InputDropdown label="Beds" options={bedroomOptions} />
          <InputDropdown label="Baths" />
          <InputDropdown label="Terms" />
        </div>
      </div>

      <div className="w-full">
        <h2>Recently Added</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 justify-items-center w-full">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
