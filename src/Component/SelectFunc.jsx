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
  width: 40vw;
  z-index: 10;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 17vh;
  min-height: 10vh;
  width: 100%;
  font-size: 1.5em;
  background-color: #75a175;
  + div {
    margin-top: 2vh;
  }
  &:hover {
    filter: brightness(150%);
  }
`;

const SelectFunc = ({
  selectType,
  selectData,
  setSelectData,
  setScriptType,
  script,
  setScript,
  setSpeech,
  selectNum,
  setSelectNum,
  setTrust,
  setConfidence,
  setItem,
  setSelectDance,
  setPresent,
  setHidden,
  data,
  indexArr,
  selectedSet,
  setCurrentPlace,
  setSection,
  setPlace,
  setCharacter,
  setLeftImage,
  setRightImage,
  setText,
}) => {
  const selectSwitch = (num) => {
    switch (num) {
      case "nomal":
        return (
          <SelectBoxCont>
            {selectData.map((e, index) => (
              <SelectBox
                key={index}
                onClick={() => {
                  setSelectData(null);
                  setScriptType(["select", false]);
                  setScript(script + 1);
                  setSpeech(0);
                  setSelectNum(index + 1);
                  setTrust((prev) => prev + e.trust);
                  setConfidence((prev) => prev + e.confidence);
                  setItem((prev) => prev + e.item);
                  setSelectDance(() => e.selectDance);
                  setPresent((prev) => [...prev, e.present]);
                  setHidden(() => e.hidden);
                }}
              >
                {e.option}
              </SelectBox>
            ))}
          </SelectBoxCont>
        );
      case "place":
        return (
          <SelectBoxCont>
            {selectData.map((e, index) => (
              <SelectBox
                key={index}
                onClick={() => {
                  setSelectData(null);
                  setSection(index + indexArr + 1);
                  setCurrentPlace([false, index + indexArr + 1]);
                  setPlace(data.section[index + indexArr + 1].placeImage);
                  setCharacter(
                    !selectedSet.has(index + indexArr + 1)
                      ? data.section[index + indexArr + 1].script[0].character
                      : "휴"
                  );
                  setLeftImage(
                    data.section[index + indexArr + 1].script[0].leftImage
                  );
                  setRightImage(
                    data.section[index + indexArr + 1].script[0].rightImage
                  );
                  setText(
                    !selectedSet.has(index + indexArr + 1)
                      ? data.section[index + indexArr + 1].script[0].speech[0]
                      : "여긴 살펴본 것 같다."
                  );
                }}
              >
                {e}
              </SelectBox>
            ))}
            {indexArr === 0 ? null : (
              <SelectBox
                onClick={() => {
                  setSelectData(null);
                  setSection(0);
                  setCurrentPlace([false, 0]);
                  setPlace(data.section[0].placeImage);
                  setCharacter(data.section[0].script[0].character);
                  setLeftImage(data.section[0].script[0].leftImage);
                  setRightImage(data.section[0].script[0].rightImage);
                  setText(data.section[0].script[0].speech[0]);
                }}
              >
                나가기
              </SelectBox>
            )}
          </SelectBoxCont>
        );
      default:
        return null;
    }
  };

  return <Position>{selectSwitch(selectType)}</Position>;
};

export default SelectFunc;
