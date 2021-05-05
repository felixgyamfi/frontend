import HeartLink from '../../atoms/Links/HeartLink/HeartLink';
import {
  Wrapper,
  ProgramTitleWrap,
  ProgramTitle,
  CardNotification,
} from './ProgramCardElements';

function ProgramCard({ title, type, id }) {
  return (
    <Wrapper to={`program/${id}`}>
      <HeartLink />
      <ProgramTitleWrap>
        <ProgramTitle>{title}</ProgramTitle>
      </ProgramTitleWrap>
      <CardNotification>{type}</CardNotification>
    </Wrapper>
  );
}

export default ProgramCard;
