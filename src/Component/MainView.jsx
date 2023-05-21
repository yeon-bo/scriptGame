/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { SelectFunc, TypingEffect } from "./index";
const jsonData = require("../example.json");

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
  background-image: ${(props) => `url("img/${props.leftImage}.png")`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 300px;
`;

const CharacterRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 6vw;
  background-image: ${(props) => `url("img/${props.rightImage}.png")`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 300px;
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

const MainView = () => {
  // 타이핑 이벡트 유무 체크
  const [typingE, setTypingE] = useState(true);
  // import 데이터
  const [data] = useState(jsonData);
  // 스크립트 또는 선택지 타입
  const [scriptType, setScriptType] = useState(["word"]);
  // 선택지 데이터
  const [selectData, setSelectData] = useState([]);
  const [selectBoolean, setSelectBoolean] = useState(null);
  const [selectScript, setSelectScript] = useState(0);
  const [selectSpeech, setSelectSpeech] = useState(0);
  // 장소 section
  const [section, setSection] = useState(0);
  // const [place, setPlace] = useState(0);
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

  // console.log(section, script, speech, text);
  // 대사 클릭 이벤트(대사 넘기기)
  const clickFunk = () => {
    console.log(section, script, speech, text);

    const currentSection = data.section[section];
    if (!currentSection) return null;

    const currentScript = currentSection.script[script];
    if (!currentScript) return null;

    const nextScript = currentSection.script[script + 1];

    // 해당 speech(대사)를 모두 출력했는가? no면 다음 speech로
    if (currentScript.speech.length !== speech + 1) {
      setTypingE(true);
      setText(currentScript.speech[speech + 1]);
      setSpeech(speech + 1);
      return null;
    }

    // 해당 script(캐릭터대사)를 모두 출력했는가? no면 다음 script로
    if (nextScript) {
      if (nextScript.type === "select") {
        setScriptType(["select", true]);
        setSelectData(nextScript);
        return null;
      }

      setTypingE(true);
      setScriptType(["word"]);
      setCharacter(nextScript.character);
      setLeftImage(nextScript.leftImage);
      setRightImage(nextScript.rightImage);
      setScript(script + 1);
      setText(nextScript.speech[0]);
      setSpeech(0);
      return null;
    }

    // 해당 speech(장소)를 모두 출력했는가? no면 다음 speech로
    const nextSection = data.section[section + 1];
    if (nextSection) {
      setCharacter(nextSection.script[0].character);
      setLeftImage(nextSection.script[0].leftImage);
      setRightImage(nextSection.script[0].rightImage);
      setText(nextSection.script[0].speech[0]);
      setSection(section + 1);
      setScript(0);
      setSpeech(0);
      return null;
    } else {
      setTypingE(true);
      return null;
    }
  };

  // select 대사 클릭 이벤트(대사 넘기기)
  const selectClickFunk = () => {
    console.log(selectScript, selectSpeech, text);

    const currentScriptSelect =
      data.section[section].script[script].selectOption[selectBoolean - 1]
        .script[selectScript];
    if (!currentScriptSelect) return null;

    // 해당 speech(대사)를 모두 출력했는가? no면 다음 speech로
    console.log(currentScriptSelect.speech.length);
    console.log(selectSpeech);
    console.log(currentScriptSelect.speech.length !== selectSpeech);
    if (currentScriptSelect.speech.length !== selectSpeech) {
      // if (scriptType[0] === "select") {
      setTypingE(true);
      setCharacter(currentScriptSelect.character);
      setLeftImage(currentScriptSelect.leftImage);
      setRightImage(currentScriptSelect.rightImage);
      setText(currentScriptSelect.speech[selectSpeech]);
      setSelectSpeech(selectSpeech + 1);
      console.log("해치웠나?");
      console.log("해치웠나?");

      if (selectScript === 0 && selectSpeech === 0) {
        setText(currentScriptSelect.speech[0]);
        setSelectSpeech(1);
      }
      return null;
    }

    const nextScriptSelect =
      data.section[section].script[script].selectOption[selectBoolean - 1]
        .script[selectScript + 1];
    const nextScript = data.section[section].script[script + 1];
    // 해당 script(캐릭터대사)를 모두 출력했는가? no면 다음 script로
    if (nextScriptSelect) {
      console.log("해치웠나???????");
      setTypingE(true);
      setCharacter(nextScriptSelect.character);
      setLeftImage(nextScriptSelect.leftImage);
      setRightImage(nextScriptSelect.rightImage);
      setSelectScript(selectScript + 1);
      setText(nextScriptSelect.speech[0]);
      setSelectSpeech(1);
      return null;
    } else {
      setTypingE(true);
      setSelectBoolean(null);
      setScript(script + 1);
      setTypingE(true);
      setScriptType(["word"]);
      setCharacter(nextScript.character);
      setLeftImage(nextScript.leftImage);
      setRightImage(nextScript.rightImage);
      setScript(script + 1);
      setText(nextScript.speech[0]);
      setSpeech(0);
      return null;
    }
  };

  useEffect(() => {
    if (scriptType[0] === "select" && scriptType[1] === false) {
      console.log("useEffect");
      selectClickFunk();
      setScriptType(["word"]);
    }
  }, [selectData, scriptType]);

  return (
    <Background>
      {/* 최대 7개 선택지 */}
      {scriptType.length > 0 &&
      scriptType[0] === "select" &&
      scriptType[1] === true ? (
        <SelectFunc
          selectData={selectData}
          setSelectData={(e) => setSelectData(e)}
          setScriptType={(e) => setScriptType(e)}
          script={script}
          setScript={(e) => setScript(e)}
          setSpeech={(e) => setSpeech(e)}
          selectBoolean={selectBoolean}
          setSelectBoolean={(e) => setSelectBoolean(e)}
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
      <ScriptBox
        onClick={() => {
          if (typingE) {
            setTypingE(!typingE);
          } else {
            selectBoolean ? selectClickFunk() : clickFunk();
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
    </Background>
  );
};

export default MainView;
