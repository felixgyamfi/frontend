import Data from '../../atoms/Data/ProgramData';
import HeartLink from '../../atoms/Links/HeartLink/HeartLink';
import {
  Wrapper,
  ProgramTitleWrap,
  ProgramTitle,
  CardNotification,
} from '../../molecules/ProgramCard/ProgramCardElements';

const mapProgram = () => {
  const a = Data.map(({ type, title }) => (
    <>
      <Wrapper>
        <HeartLink />
        <ProgramTitleWrap>
          <ProgramTitle>{title}</ProgramTitle>
        </ProgramTitleWrap>
        <CardNotification>{type}</CardNotification>
      </Wrapper>
    </>
  ));
  return <div>{a}</div>;
};

export default mapProgram;
