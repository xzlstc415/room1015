import ProcessBanner from '../components/process/ProcessBanner';
import ProcessCard from '../components/process/ProcessCard';
import Layout from '../components/shared/Layout';
import useProcesses from '../utils/useProcesses';

const Process = () => {
  const { getProcesses } = useProcesses();
  const processes = getProcesses();
  return (
    <Layout>
      <ProcessBanner />
      {processes.map(
        (process, key) =>
          process.fields && (
            <ProcessCard
              id={process.fields.step}
              title={process.fields.title}
              description={process.fields.description}
              key={key}
            />
          )
      )}
    </Layout>
  );
};

export default Process;
