import { sortOptions } from "../components/projects/sortOptions";
import { cityOptions } from "../components/projects/cityOptions";
import InputDropdown from "../components/projects/InputDropdown";
import ProjectCard from "../components/projects/ProjectCard";
import Layout from "../components/shared/Layout";
import useProjects from "../utils/useProjects";
import { statusOptions } from "../components/projects/statusOptions";
import Image from "next/image";
import Pagination from "../components/shared/Pagination";

const Projects = () => {
  const { getProjects } = useProjects();

  const { data: projects, total } = getProjects();

  console.log(projects);

  return (
    <Layout>
      <div className="relative flex justify-center w-screen full-bleed min-h-300 ">
        <Image
          priority={true}
          src="/temp-picture4.jpg"
          width={2500}
          height={500}
          layout="intrinsic"
          objectFit="cover"
          quality={50}
          objectPosition="50% 75%"
          className="opacity-60 -z-100"
        />
        <div className="absolute bottom-0 flex-col bg-beige-1 px-5 py-5 md:py-10 w-full md:w-auto">
          <h2 className="text-4xl text-white mb-5">Find your Dream home</h2>
          <div className="flex flex-row justify-evenly md:justify-center md:flex md:space-x-10 flex-wrap">
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
      </div>

      <div className="w-full my-8">
        <h2 className="px-3 mb-4 text-center md:text-left">Recently Added</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 justify-items-center w-full">
          {projects
            ? projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))
            : null}
        </div>
      </div>
      <Pagination />
    </Layout>
  );
};

export default Projects;
