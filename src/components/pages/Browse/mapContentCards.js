import Data from '../../atoms/Data/ProgramData';
import ProgramCard from '../../molecules/ProgramCard/index';

const mapProgram = () => {
  const a = Data.map(({ type, title, id }) => (
    <>
      <ProgramCard type={type} title={title} id={id} />
    </>
  ));
  return <div>{a}</div>;
};

export default mapProgram;
