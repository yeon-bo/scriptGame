/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { SelectFunc, TypingEffect } from "./index";
import { ScriptClick, SelectClick } from "../Util/index";

const Background = styled.div`
  background-image: ${(props) => `url("img/background/${props.place}.jpg")`};
  background-position: center;
  background-size: ${(props) =>
    props.backgroundType !== "illustration" ? "cover" : "contain"};
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
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
  background-image: ${(props) => `url("img/character/${props.leftImage}.png")`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 360px;
`;

const CharacterRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 6vw;
  background-image: ${(props) =>
    `url("img/character/${props.rightImage}.png")`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 360px;
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
  background-color: #000;
  transform: translateY(-50%);
  width: 20%;
  min-width: 250px;
  height: 7vh;
`;

const NameText = styled.span`
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
`;

// 대사 최대 4줄
const ScriptText = styled.span`
  font-size: 1.5em;
  line-height: 1.8em;
`;

const MainView = ({
  jsonData,
  setCount,
  trust,
  Confidence,
  item,
  selectDance,
  present,
  hidden,
  setTrust,
  setConfidence,
  setItem,
  setSelectDance,
  setPresent,
  setHidden,
}) => {
  // 타이핑 이벡트 유무 체크
  const [typingE, setTypingE] = useState(true);
  // import 데이터
  const [data, setData] = useState(jsonData);
  // 스크립트 또는 선택지 타입
  const [scriptType, setScriptType] = useState(["word"]);
  // 선택지 데이터
  const [selectData, setSelectData] = useState([]);
  const [selectNum, setSelectNum] = useState(null);
  const [selectScript, setSelectScript] = useState(0);
  const [selectSpeech, setSelectSpeech] = useState(0);
  // 장소 section
  const [section, setSection] = useState(0);
  const [place, setPlace] = useState(data.section[section].placeImage);
  // 백그라운드 타입
  const [backgroundType, setBackgroundType] = useState(
    data.section[section].type
  );
  // 캐릭터 이름 script
  const [script, setScript] = useState(0);
  const [character, setCharacter] = useState(
    data.section[section].script[script].character
  );
  // 왼쪽 이미지
  const [leftImage, setLeftImage] = useState(
    data.section[section].script[script].leftImage
  );
  // 오른쪽 이미지
  const [rightImage, setRightImage] = useState(
    data.section[section].script[script].rightImage
  );
  // 대사 speech
  const [speech, setSpeech] = useState(0);
  const [text, setText] = useState(
    data.section[section].script[script].speech[speech]
  );

  const sectionType = "story";

  useEffect(() => {
    if (scriptType[0] === "select" && scriptType[1] === false) {
      SelectClick(
        data,
        section,
        script,
        selectNum,
        selectScript,
        selectSpeech,
        setTypingE,
        setCharacter,
        setLeftImage,
        setRightImage,
        setText,
        setSelectSpeech,
        setSelectScript,
        setSelectNum,
        setScript,
        setScriptType,
        setSpeech
      );
      setScriptType(["word"]);
    }
  }, [selectData, scriptType]);

  useEffect(() => {
    if (jsonData !== data) {
      setBackgroundType(jsonData.section[0].type);
      setPlace(jsonData.section[0].placeImage);
      setCharacter(jsonData.section[0].script[0].character);
      setLeftImage(jsonData.section[0].script[0].leftImage);
      setRightImage(jsonData.section[0].script[0].rightImage);
      setText(jsonData.section[0].script[0].speech[0]);
      setData(jsonData);
    }
  }, [jsonData]);

  return (
    <Background
      place={place}
      backgroundType={backgroundType}
      onClick={() =>
        backgroundType === "illustration"
          ? ScriptClick(
              sectionType,
              data,
              section,
              script,
              speech,
              trust,
              Confidence,
              item,
              selectDance,
              present,
              hidden,
              setCount,
              setTypingE,
              setText,
              setSpeech,
              setCharacter,
              setLeftImage,
              setRightImage,
              setBackgroundType,
              setPlace,
              setScript,
              setSection,
              setSelectData,
              setScriptType
            )
          : null
      }
    >
      {/* 최대 7개 선택지 */}
      {scriptType.length > 0 &&
      scriptType[0] === "select" &&
      scriptType[1] === true ? (
        <SelectFunc
          selectType={"nomal"}
          selectData={selectData.selectOption}
          setSelectData={(e) => setSelectData(e)}
          setScriptType={(e) => setScriptType(e)}
          script={script}
          setScript={(e) => setScript(e)}
          setSpeech={(e) => setSpeech(e)}
          selectNum={selectNum}
          setSelectNum={(e) => setSelectNum(e)}
          setTrust={setTrust}
          setConfidence={setConfidence}
          setItem={setItem}
          setSelectDance={setSelectDance}
          setPresent={setPresent}
          setHidden={setHidden}
        />
      ) : null}
      {/* 캐릭터 이미지 */}
      <CharacterCont>
        {leftImage && leftImage !== "" ? (
          <CharacterLeft leftImage={leftImage} />
        ) : null}
        {rightImage && rightImage !== "" ? (
          <CharacterRight rightImage={rightImage} />
        ) : null}
      </CharacterCont>
      {backgroundType === "illustration" ? null : (
        <ScriptBox
          onClick={() => {
            if (typingE) {
              setTypingE(!typingE);
            } else {
              selectNum
                ? SelectClick(
                    data,
                    section,
                    script,
                    selectNum,
                    selectScript,
                    selectSpeech,
                    setTypingE,
                    setCharacter,
                    setLeftImage,
                    setRightImage,
                    setText,
                    setSelectSpeech,
                    setSelectScript,
                    setSelectNum,
                    setScript,
                    setScriptType,
                    setSpeech
                  )
                : ScriptClick(
                    sectionType,
                    data,
                    section,
                    script,
                    speech,
                    trust,
                    Confidence,
                    item,
                    selectDance,
                    present,
                    hidden,
                    setCount,
                    setTypingE,
                    setText,
                    setSpeech,
                    setCharacter,
                    setLeftImage,
                    setRightImage,
                    setBackgroundType,
                    setPlace,
                    setScript,
                    setSection,
                    setSelectData,
                    setScriptType
                  );
            }
          }}
        >
          <NameBox>
            <NameText>
              {character && character !== "" ? character : null}
            </NameText>
          </NameBox>
          <ScriptText>
            {text && typingE ? (
              <TypingEffect
                text={text && text !== "" ? text : null}
                typingE={typingE}
                setTypingE={(e) => setTypingE(e)}
              />
            ) : (
              <span>{text && text !== "" ? text : null}</span>
            )}
          </ScriptText>
        </ScriptBox>
      )}
    </Background>
  );
};

export default MainView;
