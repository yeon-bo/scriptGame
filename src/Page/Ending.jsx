import React from "react";
import { useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { MainView, MusicBox } from "../Component";
const jsonData10 = require("../ScriptJson/Story/10.json");
const jsonData11 = require("../ScriptJson/Story/11.json");
// const jsonData12 = require("../ScriptJson/Story/12.json");

const Story = () => {
  const DataSwitch = (num) => {
    const navigate = useNavigate();

    switch (num) {
      case 125:
        return jsonData11;
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
        navigate("/story");
    }
  };

  const basicAtom = atom(JSON.parse(localStorage.getItem("count")) || 10);
  const importDataAtom = atom(DataSwitch(basicAtom));

  const MemoizedMainView = React.memo(MainView);
  const MemoizedMusicBox = React.memo(MusicBox);
  const [count, setCount] = useAtom(basicAtom);
  const [importData, setImportData] = useAtom(importDataAtom);
  console.log(basicAtom);
  return (
    <>
      <MemoizedMainView jsonData={importData} setCount={setCount} />
      <MemoizedMusicBox
        videoKey={"oycOQJyl-ok?autoplay=1&mute=1"}
        blink={false}
      />
    </>
  );
};

export default Story;
