/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
  background: linear-gradient(90deg, #000, rgba(255, 255, 255, 0.5), #000);
  width: 10em;
  font-size: 2em;
  color: #fff;
  animation: blink-effect 3s ease-in-out infinite;
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

const Home = () => {
  return (
    <Background>
      <Link to={"/main"}>
        <GameStartText>게임 시작</GameStartText>
      </Link>
    </Background>
  );
};

export default Home;
