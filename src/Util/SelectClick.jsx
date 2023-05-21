const SelectClick = (
  data,
  section,
  script,
  selectBoolean,
  selectScript,
  selectSpeech,
  setTypingE,
  setCharacter,
  setLeftImage,
  setRightImage,
  setText,
  setSelectSpeech,
  setSelectScript,
  setSelectBoolean,
  setScript,
  setScriptType,
  setSpeech
) => {
  const currentScriptSelect =
    data.section[section].script[script].selectOption[selectBoolean - 1].script[
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
    data.section[section].script[script].selectOption[selectBoolean - 1].script[
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

export default SelectClick;
