import Data from '../../atoms/Data/ProgramData';
import ProgramCard from '../../molecules/ProgramCard/index';

const mapProgram = () => {
  const a = Data.map(({ type, title }) => (
    <>
      <ProgramCard type={type} title={title} />
    </>
  ));
  return <div>{a}</div>;
};

export default mapProgram;
