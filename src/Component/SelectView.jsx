/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { SelectFunc, TypingEffect } from "./index";
// import { SelectClick } from "../Util/index";

const Background = styled.div`
  background-image: ${(props) => `url("img/background/${props.place}.jpg")`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
  width: 300px;
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

const EndBox = styled.div`
  position: absolute;
  right: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: red;
  transform: translateY(-50%);
  width: 7%;
  height: 7vh;
  border-radius: 30px;
  word-break: keep-all;
  text-align: center;
  cursor: pointer;
`;

const NEndText = styled.span`
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
`;

// 대사 최대 4줄
const ScriptText = styled.span`
  font-size: 1.5em;
  line-height: 1.8em;
`;

const SelectView = ({
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
  // 백그라운드 타입
  const [placeArr] = useState(data.placeArr);
  const [currentPlace, setCurrentPlace] = useState([false, 0]);
  // 장소 section
  const [section, setSection] = useState(0);
  const [place, setPlace] = useState(data.section[section].placeImage);
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
  const ScriptClick = () => {
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
      if (sectionType === "story") setScriptType(["word"]);
      setCharacter(nextScript.character);
      setLeftImage(nextScript.leftImage);
      setRightImage(nextScript.rightImage);
      setScript(script + 1);
      setText(nextScript.speech[0]);
      setSpeech(0);
      return null;
    }

    // 중분류 script가 끝났다면
    if (currentPlace[1] > 5) {
      //만약 중분류가 아니라면(5은 대분류 갯수)
      if (5 < currentPlace[1] && currentPlace[1] < 11) {
        // 중분류 선택지를 보여주기
        setCurrentPlace([true, 1]);
      }
      if (10 < currentPlace[1] && currentPlace[1] < 16) {
        setCurrentPlace([true, 2]);
      }
      if (15 < currentPlace[1] && currentPlace[1] < 21) {
        setCurrentPlace([true, 3]);
      }
      if (20 < currentPlace[1] && currentPlace[1] < 26) {
        setCurrentPlace([true, 4]);
      }
      if (25 < currentPlace[1] && currentPlace[1] < 31) {
        setCurrentPlace([true, 5]);
      }
      setTypingE(true);
      setScript(0);
      setSpeech(0);
      return null;
    }

    // 해당 section(장소)를 모두 출력했는가? no면 다음 section로
    setCurrentPlace([true, currentPlace[1]]);
    setTypingE(true);
    setScript(0);
    setSpeech(0);
  };

  const SelectClick = () => {
    const currentScriptSelect =
      data.section[section].script[script].selectOption[selectNum - 1].script[
        selectScript
      ];
    if (!currentScriptSelect) return null;

    // 해당 speech(대사)를 모두 출력했는가? no면 다음 speech로
    if (currentScriptSelect.speech.length !== selectSpeech) {
      setTypingE(true);
      setCharacter(currentScriptSelect.character);
      setLeftImage(currentScriptSelect.leftImage);
      setRightImage(currentScriptSelect.rightImage);
      setText(currentScriptSelect.speech[selectSpeech]);
      setSelectSpeech(selectSpeech + 1);

      if (selectScript === 0 && selectSpeech === 0) {
        setText(currentScriptSelect.speech[0]);
        setSelectSpeech(1);
      }
      return null;
    }

    const nextScriptSelect =
      data.section[section].script[script].selectOption[selectNum - 1].script[
        selectScript + 1
      ];

    const nextScript = data.section[section].script[script + 1];

    // 해당 script(캐릭터대사)를 모두 출력했는가? no면 다음 script로
    if (nextScriptSelect) {
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
      setSelectNum(null);
      setSelectScript(0);
      setSelectSpeech(0);
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

  const endBtn = () => {
    const scriptBranch = (e) => {
      if (sectionType === "ending" && e > 50) {
        localStorage.removeItem("count");
        window.location.href = "/main";
      }
      if (e === 16) return 20;
      if (e === 24) return 30;
      // if (e > 11) {
      //   if (trust < 50) return 400;
      //   if (trust < 100) return 923;
      //   if (trust >= 100) return 125;
      // }
      return e + 1;
    };
    // 기존 count 변경
    setCount((e) => scriptBranch(e));
    return null;
  };

  // select
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
      // setBackgroundType(jsonData.section[0].type);
      setPlace(jsonData.section[0].placeImage);
      setCharacter(jsonData.section[0].script[0].character);
      setLeftImage(jsonData.section[0].script[0].leftImage);
      setRightImage(jsonData.section[0].script[0].rightImage);
      setText(jsonData.section[0].script[0].speech[0]);
      setData(jsonData);
    }
  }, [jsonData]);

  const currentPlaceFunc = (e) => {
    if (5 < e && e < 11) {
      return 1;
    }
    if (10 < e && e < 16) {
      return 2;
    }
    if (15 < e && e < 21) {
      return 3;
    }
    if (20 < e && e < 26) {
      return 4;
    }
    if (25 < e && e < 31) {
      return 5;
    }
    console.log(e);
    return e;
  };

  return (
    <Background place={place}>
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
      {currentPlace[0] ? (
        <SelectFunc
          selectType={"place"}
          selectData={placeArr[currentPlaceFunc(currentPlace[1])]}
          setSelectData={(e) => setSelectData(e)}
          setSection={setSection}
          setCurrentPlace={(e) => setCurrentPlace(e)}
          setPlace={(e) => setPlace(e)}
          setCharacter={(e) => setCharacter(e)}
          setLeftImage={(e) => setLeftImage(e)}
          setRightImage={(e) => setRightImage(e)}
          setText={(e) => setText(e)}
          data={data}
          indexArr={data.section[section].indexArr}
        />
      ) : null}
      {}
      {/* 캐릭터 이미지 */}
      <CharacterCont>
        {leftImage && leftImage !== "" ? (
          <CharacterLeft leftImage={leftImage} />
        ) : null}
        {rightImage && rightImage !== "" ? (
          <CharacterRight rightImage={rightImage} />
        ) : null}
      </CharacterCont>
      {/* {backgroundType === "illustration" ? null : ( */}
      <ScriptBox
        onClick={() => {
          if (typingE) {
            setTypingE(!typingE);
          } else {
            selectNum ? SelectClick() : ScriptClick();
          }
        }}
      >
        <NameBox>
          <NameText>
            {character && character !== "" ? character : null}
          </NameText>
        </NameBox>
        <EndBox>
          <NEndText onClick={() => endBtn()}>탐사 끝내기</NEndText>
        </EndBox>
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

export default SelectView;
