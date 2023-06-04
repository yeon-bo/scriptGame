/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Background = styled.div`
  background-image: url("img/home.jpg");
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
  background-image: url("img/home.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 100vh;
  width: 100%;
`;

const GameStartText = styled.span`
  position: absolute;
  display: block;
  left: 50vw;
  transform: translateX(-50%);
  bottom: 20vh;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #777;
  width: 10em;
  font-size: 2em;
  color: #fff;
  animation: blink-effect 3s ease-in-out infinite;
  padding: 10px 0;
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Background></Background>
      <BackgroundImg>
        <Link to={"/main"}>
          <GameStartText>게임 시작</GameStartText>
        </Link>
      </BackgroundImg>
    </>
  );
};

export default Home;
