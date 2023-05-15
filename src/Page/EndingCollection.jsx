/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Background = styled.div`
  background-color: #000;
  height: 100vh;
`;

const GameStartText = styled.span`
  position: absolute;
  display: block;
  left: 50vw;
  transform: translateX(-50%);
  bottom: 20vh;
  width: 10em;
  font-size: 2em;
  color: #fff;
`;

const EndingCollection = () => {
  return (
    <Background>
      <GameStartText>엔딩 컬렉션</GameStartText>
    </Background>
  );
};

export default EndingCollection;
