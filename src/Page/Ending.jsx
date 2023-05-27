import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom } from "jotai";
import { EndingView, MusicBox } from "../Component";
// const jsonData10 = require("../ScriptJson/Story/10.json");
const jsonData125 = require("../ScriptJson/End/125.json");
const jsonData923 = require("../ScriptJson/End/923.json");
const jsonData400 = require("../ScriptJson/End/400.json");
// const jsonData12 = require("../ScriptJson/Story/12.json");

const Story = () => {
  const DataSwitch = (num) => {
    switch (num) {
      // 진 엔딩
      case 125:
        return jsonData125;
      // 굿 엔딩
      // case 77:
      //   return jsonData77;
      // 해피 엔딩1
      // case 97:
      //   return jsonData97;
      // 해피 엔딩2
      // case 2013:
      //   return jsonData2013;
      // 해피 엔딩3
      // case 100:
      //   return jsonData100;
      // 노멀 엔딩1
      case 923:
        return jsonData923;
      // 노멀 엔딩2
      // case 401:
      //   return jsonData401;
      // 노멀 엔딩3
      // case 824:
      //   return jsonData824;
      // 노멀 엔딩4
      // case 616:
      //   return jsonData616;
      // 새드 엔딩1
      // case 99:
      //   return jsonData99;
      // 새드 엔딩2
      // case 66:
      //   return jsonData66;
      // 새드 엔딩3
      // case 444:
      //   return jsonData444;
      // 배드 엔딩1
      case 400:
        return jsonData400;
      // 배드 엔딩2
      // case 415:
      //   return jsonData415;
      // 배드 엔딩3
      // case 404:
      //   return jsonData404;
      // 배드 엔딩4
      // case 405:
      //   return jsonData405;
      // 배드 엔딩5
      // case 500:
      //   return jsonData500;
      // 어나더 엔딩1
      // case 1789:
      //   return jsonData1789;
      // 어나더 엔딩2
      // case 626:
      //   return jsonData626;
      // 어나더 엔딩3
      // case 1501:
      //   return jsonData1051;
      // 히든 엔딩
      // case 8181:
      //   return jsonData8181;
      default:
        return null;
    }
  };

  const MemoizedMainView = React.memo(EndingView);
  const MemoizedMusicBox = React.memo(MusicBox);
  // const [count, setCount] = useAtom(JSON.parse(localStorage.getItem("count")));
  // const [importData, setImportData] = useAtom(DataSwitch(localStorage.getItem("count")));
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const [importData, setImportData] = useState(DataSwitch(count));

  const navigate = useNavigate();

  useEffect(() => {
    if (count !== 10) {
      if (count <= 50) {
        localStorage.removeItem("count");
        navigate("/main");
        window.location.reload();
      }
      const link = DataSwitch(count);
      setImportData(link);
    }
  }, [count, setCount, navigate]);
  return (
    <>
      {count <= 50 ? null : (
        <>
          <MemoizedMainView jsonData={importData} setCount={setCount} />
          <MemoizedMusicBox
            videoKey={"oycOQJyl-ok?autoplay=1&mute=1"}
            blink={false}
          />
        </>
      )}
    </>
  );
};

export default Story;
