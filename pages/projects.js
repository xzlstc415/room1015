import InputDropdown from "../components/projects/InputDropdown";
import Layout from "../components/shared/Layout";

const Projects = () => (
  <Layout>
    <div className="flex-col bg-beige-1 px-5 py-10">
      <h2 className="text-4xl text-white mb-5">Find your Dream home</h2>
      <div className="flex-row flex justify-between">
        <InputDropdown placeholder="Sort By" />
        <InputDropdown placeholder="Status" />
        <InputDropdown placeholder="Beds" />
        <InputDropdown placeholder="Baths" />
        <InputDropdown placeholder="Terms" />
      </div>
    </div>

    <div>
      <h2>Recently Added</h2>
    </div>
  </Layout>
);

export default Projects;
