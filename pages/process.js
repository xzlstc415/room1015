import ProcessBanner from '../components/process/ProcessBanner';
import ProcessCard from '../components/process/ProcessCard';
import Layout from '../components/shared/Layout';
import useProcesses from '../utils/useProcesses';

const Process = () => {
  const { getProcesses } = useProcesses();
  const processes = getProcesses();
  console.log(processes);
  return (
    <Layout>
      <ProcessBanner />
      <ProcessCard
        id={1}
        title="Inquiry"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <ProcessCard
        id={2}
        title="Budget & Quote"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <ProcessCard
        id={3}
        title="Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <ProcessCard
        id={4}
        title="Schedule"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <ProcessCard
        id={5}
        title="Work"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </Layout>
  );
};

export default Process;
