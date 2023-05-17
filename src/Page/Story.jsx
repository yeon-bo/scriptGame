/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { MusicBox, SelectFunc, TypingEffect } from "../Component";

const Background = styled.div`
  background-color: #000;
  height: 100vh;
`;

const CharacterCont = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
`;

const CharacterLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 6vw;
  background-color: red;
  width: 300px;
  height: 600px;
`;

const CharacterRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 6vw;
  background-color: blue;
  width: 300px;
  height: 600px;
`;

const ScriptBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 30vh;
  padding: 6vh 3vw;
  text-align: start;
  box-sizing: border-box;
`;

const NameBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: yellow;
  transform: translateY(-50%);
  width: 20%;
  min-width: 250px;
  height: 7vh;
`;

const NameText = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

// 대사 최대 4줄
const ScriptText = styled.span`
  font-size: 1.5em;
  line-height: 1.8em;
`;

const Story = () => {
  return (
    <Background>
      {/* 최대 7개 선택지 */}
      <SelectFunc
        box={[
          { text: "1" },
          { text: "2" },
          { text: "3" },
          { text: "2" },
          { text: "3" },
          { text: "3" },
          { text: "3" },
        ]}
      />
      <CharacterCont>
        <CharacterLeft></CharacterLeft>
        <CharacterRight></CharacterRight>
      </CharacterCont>
      <MusicBox videoKey={"oycOQJyl-ok?autoplay=1&mute=1"} blink={false} />
      <ScriptBox>
        <NameBox>
          <NameText>이름</NameText>
        </NameBox>
        <ScriptText>
          <TypingEffect text="안녕하세요!" />
        </ScriptText>
      </ScriptBox>
    </Background>
  );
};

export default Story;
