import { sortOptions } from "../components/projects/sortOptions";
import { cityOptions } from "../components/projects/cityOptions";
import InputDropdown from "../components/projects/InputDropdown";
import ProjectCard from "../components/projects/ProjectCard";
import Layout from "../components/shared/Layout";
import useProjects from "../utils/useProjects";
import { statusOptions } from "../components/projects/statusOptions";

const Projects = () => {
  const { getProjects } = useProjects();

  const projects = getProjects();

  return (
    <Layout>
      <div className="flex-col bg-beige-1 px-5 py-10 w-full">
        <h2 className="text-4xl text-white mb-5">Find your Dream home</h2>
        <div className="flex-row flex space-x-10">
          <InputDropdown
            label="Sort By"
            options={sortOptions}
            queryKey="sort"
          />
          <InputDropdown
            label="Status"
            options={statusOptions}
            queryKey="status"
          />
          <InputDropdown label="City" queryKey="city" options={cityOptions} />
        </div>
      </div>

      <div className="w-full">
        <h2>Recently Added</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 justify-items-center w-full">
          {projects
            ? projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))
            : null}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
