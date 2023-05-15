/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Background = styled.div`
  background-color: #000;
  height: 100vh;
`;

const NotFoundText = styled.span`
  position: absolute;
  left: 50vw;
  transform: translateX(-50%);
  bottom: 50vh;
  font-size: 2em;
  color: red;
`;

const NotFound = () => {
  return (
    <Background>
      <NotFoundText>NotFound</NotFoundText>
    </Background>
  );
};

export default NotFound;
