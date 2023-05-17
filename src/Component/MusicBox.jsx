/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import YouTube from "react-youtube";

const Main = ({ videoKey, blink }) => {
  const MusicBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    background: #fff;
    border-radius: 0 0 20px 20px;
    transition: all 0.5s ease-in-out;
    transform: translateY(-100%);
    &::after {
      content: "music";
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: -50px;
      right: 50px;
      background-color: #fff;
      border-radius: 0 0 10px 10px;
      width: 50px;
      height: 50px;
      animation: ${(props) =>
        props.blink ? "blink-effect 3s ease-in-out infinite" : "none"};
      @keyframes blink-effect {
        50% {
          color: #fff;
        }
      }
    }
    &:hover {
      transform: translateY(0%);
    }
  `;
  return (
    <MusicBox blink={blink}>
      <YouTube
        videoId={videoKey}
        // https://kangdanne.tistory.com/25
        opts={{
          width: "300",
          height: "300",
          playerVars: {
            autoplay: 1, //자동재생 O
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </MusicBox>
  );
};

export default Main;
