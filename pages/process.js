import ProcessBanner from "../components/process/ProcessBanner";
import ProcessCard from "../components/process/ProcessCard";
import Layout from "../components/shared/Layout";

const Process = () => (
  <Layout>
    <ProcessBanner />
    <ProcessCard id={1} title="Inquiry" />
    <ProcessCard id={2} title="Budget & Quote" />
    <ProcessCard id={3} title="Design" />
    <ProcessCard id={4} title="Schedule" />
    <ProcessCard id={5} title="Work" />
  </Layout>
);

export default Process;
