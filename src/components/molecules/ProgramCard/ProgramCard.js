import HeartLink from '../../atoms/Links/HeartLink/HeartLink';
import {
  Wrapper,
  ProgramTitleWrap,
  ProgramTitle,
  CardNotification,
} from './ProgramCardElements';

const ProgramCard = ({ program }) => {
  const { title, type, slug } = program;
  console.log(program);
  return (
    <Wrapper to={`program/${slug.current}`}>
      <HeartLink />
      <ProgramTitleWrap>
        <ProgramTitle>{title}</ProgramTitle>
      </ProgramTitleWrap>
      <CardNotification>{type}</CardNotification>
    </Wrapper>
  );
};

export default ProgramCard;
