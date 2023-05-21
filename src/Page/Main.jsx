/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { MusicBox } from "../Component";

const Background = styled.div`
  background-color: #000;
  height: 100vh;
`;

const GameStartText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50vw;
  transform: translateX(-50%);
  bottom: 12vh;
`;
const ButtonText = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #000, rgba(255, 255, 255, 0.5), #000);
  width: 10em;
  color: #fff;
  font-size: 2em;
  margin-top: 20px;
`;

const Main = () => {
  return (
    <Background>
      <GameStartText>
        <Link to={"/story"}>
          <ButtonText>새로 시작</ButtonText>
        </Link>
        <Link to={"/story"}>
          <ButtonText>이어하기</ButtonText>
        </Link>
        <Link to={"/savelist"}>
          <ButtonText>불러오기</ButtonText>
        </Link>
        <Link to={"/endingcollection"}>
          <ButtonText>엔딩 컬렉션</ButtonText>
        </Link>
      </GameStartText>
      <MusicBox videoKey={"wOxi8rT8L-s?autoplay=1&mute=1"} blink={true} />
    </Background>
  );
};

export default Main;
