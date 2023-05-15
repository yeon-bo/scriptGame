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

const SaveStory = () => {
  return (
    <Background>
      <GameStartText>이어하기</GameStartText>
    </Background>
  );
};

export default SaveStory;
