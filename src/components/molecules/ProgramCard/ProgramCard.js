import HeartLink from '../../atoms/Links/HeartLink/HeartLink';
import {
  Wrapper,
  ProgramTitleWrap,
  ProgramTitle,
  CardNotification,
} from './ProgramCardElements';

function ProgramCard({ title, type }) {
  return (
    <Wrapper>
      <HeartLink />
      <ProgramTitleWrap>
        <ProgramTitle>{title}</ProgramTitle>
      </ProgramTitleWrap>
      <CardNotification>{type}</CardNotification>
    </Wrapper>
  );
}

export default ProgramCard;
