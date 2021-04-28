import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 3.3em;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
export const HeadingWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const Type = styled.p`
  font;
`;
export const Workout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImgWrapper = styled.img`
  margin: 1em 0;
  object-fit: contain;
`;
export const WInfo = styled.div`
  color: ${(props) => props.theme.midnightBlue};
`;
export const WInfoTitle = styled.p`
  font-size: 1.6em;
`;
export const WInfoStats = styled.p`
  font-size: 1em;
`;
