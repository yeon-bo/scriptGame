export const ScriptClick = (
  data,
  section,
  script,
  speech,
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
  setSelectBoolean,
  setScriptType
) => {
  const currentSection = data.section[section];
  if (!currentSection) return null;

  const currentScript = currentSection.script[script];
  if (!currentScript) return null;

  const nextScript = currentSection.script[script + 1];

  // Check if all speeches have been displayed for the current script
  if (currentScript.speech.length !== speech + 1) {
    setTypingE(true);
    setText(currentScript.speech[speech + 1]);
    setSpeech(speech + 1);
    return null;
  }

  // Check if all scripts have been displayed for the current section
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
    if (e === 16) return 20;
    if (e === 24) return 30;
    return e + 1;
  };

  // Check if all speeches have been displayed for the current section
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
    setCount((prev) => scriptBranch(prev));
    return null;
  }
};
