export const ScriptClick = (
  sectionType,
  data,
  section,
  script,
  speech,
  trust,
  setCount,
  setTypingE,
  setText,
  setSpeech,
  setCharacter,
  setLeftImage,
  setRightImage,
  setPlace,
  setScript,
  setSection,
  setSelectData,
  setScriptType
) => {
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

  const scriptBranch = (e) => {
    if (sectionType === "ending" && e > 50) {
      localStorage.removeItem("count");
      window.location.href = "/main";
    }
    if (e === 16) return 20;
    if (e === 24) return 30;
    if (trust < 50) return 400;
    if (trust < 100) return 923;
    if (trust >= 100) return 125;
    return e + 1;
  };

  // 해당 section(장소)를 모두 출력했는가? no면 다음 section로
  const nextSection = data.section[section + 1];
  if (nextSection) {
    setPlace(data.section[section + 1].placeImage);
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
    setSection(0);
    setScript(0);
    setSpeech(0);
    // 기존 count 변경
    setCount((e) => scriptBranch(e));
    return null;
  }
};
