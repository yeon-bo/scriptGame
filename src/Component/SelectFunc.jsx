/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Position = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const SelectBoxCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 75vh;
  width: 50vw;
  z-index: 10;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 15vh;
  min-height: 10vh;
  width: 100%;
  font-size: 1.5em;
  background-color: #75a175;
  + div {
    margin-top: 3vh;
  }
  &:hover {
    filter: brightness(150%);
  }
`;

const SelectFunc = ({ box }) => {
  return (
    <Position>
      <SelectBoxCont>
        {box.map((e, index) => (
          <SelectBox key={index}>{e.text}</SelectBox>
        ))}
      </SelectBoxCont>
    </Position>
  );
};

export default SelectFunc;
