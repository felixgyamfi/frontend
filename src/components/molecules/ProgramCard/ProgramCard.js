import HeartLink from '../../atoms/Links/HeartLink/HeartLink';
import {
  Wrapper,
  ProgramTitleWrap,
  ProgramTitle,
  CardNotification,
} from './ProgramCardElements';

const ProgramCard = ({ program }) => {
  const { title, type, _id } = program;
  console.log(program);
  return (
    <Wrapper to={`program/${_id}`}>
      <HeartLink />
      <ProgramTitleWrap>
        <ProgramTitle>{title}</ProgramTitle>
      </ProgramTitleWrap>
      <CardNotification>{type}</CardNotification>
    </Wrapper>
  );
};

export default ProgramCard;
