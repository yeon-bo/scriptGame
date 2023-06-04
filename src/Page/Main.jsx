/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { MusicBox } from "../Component";

const Background = styled.div`
  background-image: url("img/main.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  height: 100vh;
`;
const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("img/main.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 100vh;
  width: 100%;
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
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #777;
  width: 10em;
  color: #fff;
  font-size: 2em;
  padding: 10px 0;
  margin-top: 20px;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const Main = () => {
  const handleRemoveCount = (event) => {
    event.stopPropagation();
    localStorage.removeItem("count");
    localStorage.removeItem("trust");
    localStorage.removeItem("Confidence");
    localStorage.removeItem("item");
    localStorage.removeItem("selectDance");
    localStorage.removeItem("present");
    localStorage.removeItem("hidden");
  };

  const MemoizedGameStartText = React.memo(GameStartText);
  const MemoizedMusicBox = React.memo(MusicBox);

  return (
    <>
      <Background></Background>
      <BackgroundImg>
        <MemoizedGameStartText>
          <Link to={"/story"}>
            <ButtonText onClick={handleRemoveCount}>새로 시작</ButtonText>
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
        </MemoizedGameStartText>
        <MemoizedMusicBox
          videoKey={"wOxi8rT8L-s?autoplay=1&mute=1"}
          blink={true}
        />
      </BackgroundImg>
    </>
  );
};

export default Main;
