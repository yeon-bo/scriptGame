import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { MainView, MusicBox } from "../Component";
const jsonData10 = require("../ScriptJson/Story/10.json");
// const jsonData11 = require("../ScriptJson/Story/11.json");
// const jsonData12 = require("../ScriptJson/Story/12.json");

const DataSwitch = (num) => {
  switch (num) {
    case 10:
      return jsonData10;
    // case 11:
    //   return jsonData11;
    // case 12:
    //   return jsonData12;
    // case 13:
    //   return jsonData13;
    // case 14:
    //   return jsonData14;
    // case 15:
    //   return jsonData15;
    // case 16:
    //   return jsonData16;
    // case 20:
    //   return jsonData20;
    // case 21:
    //   return jsonData21;
    // case 22:
    //   return jsonData22;
    // case 23:
    //   return jsonData23;
    // case 24:
    //   return jsonData24;
    // case 30:
    //   return jsonData30;
    // case 31:
    //   return jsonData31;
    // case 32:
    //   return jsonData32;
    // case 33:
    //   return jsonData33;
    // case 34:
    //   return jsonData34;
    // case 35:
    //   return jsonData35;
    default:
      // return "/ending";
      return "/ending";
  }
};

const basicAtom = atom(JSON.parse(localStorage.getItem("count")) || 10);
const importDataAtom = atom(jsonData10);
export const trustAtom = atom(0); // 신뢰도
// const ConfidenceAtom = atom(0); // 자존감
// const itemAtom = atom(0); // 소원, 풍등 각각 5점
// const selectDanceAtom = atom(false); // 춤 선택지
// const presentAtom = atom([]); // 선물
// const hiddenAtom = atom(false); // 히든 알약

const MemoizedMainView = React.memo(MainView);
const MemoizedMusicBox = React.memo(MusicBox);

const Story = () => {
  const [count, setCount] = useAtom(basicAtom);
  const [importData, setImportData] = useAtom(importDataAtom);
  const [trust, setTrust] = useAtom(trustAtom);
  // const [Confidence, setConfidence] = useAtom(ConfidenceAtom);
  // const [item, setItem] = useAtom(itemAtom);
  // const [selectDance, setSelectDance] = useAtom(selectDanceAtom);
  // const [present, setPresent] = useAtom(presentAtom);
  // const [hidden, setHidden] = useAtom(hiddenAtom);

  const navigate = useNavigate();

  // console.log(
  //   count,
  //   importData,
  //   trust,
  //   Confidence,
  //   item,
  //   selectDance,
  //   present,
  //   hidden
  // );
  useEffect(() => {
    if (count !== 10) {
      const link = DataSwitch(count);
      setImportData(link);
      localStorage.setItem("count", JSON.stringify(count));
      // 완성에서는 13지우고 50으로 수정
      if (count >= 13) {
        navigate(link); // 링크로 이동
      }
    }
  }, [count, setCount, navigate]);
  useEffect(() => {
    localStorage.setItem("trust", JSON.stringify(trust));
    console.log(trust);
  }, [count, setTrust]);
  return (
    <>
      <MemoizedMainView
        jsonData={importData}
        setCount={setCount}
        trust={trust}
        setTrust={setTrust}
        // setConfidence={setConfidence}
        // setItem={setItem}
        // setSelectDance={setSelectDance}
        // setPresent={setPresent}
        // setHidden={setHidden}
      />
      {/* <MemoizedMusicBox
        videoKey={"oycOQJyl-ok?autoplay=1&mute=1"}
        blink={false}
      /> */}
    </>
  );
};

export default Story;
