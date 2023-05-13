/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
const jsonData = require("../example.json");

let arr = [];
for (let i = 0; jsonData.section.length >= i + 1; i++) {
  for (let j = 0; jsonData.section[i].script.length >= j + 1; j++) {
    for (let k = 0; jsonData.section[i].script[j].speech.length >= k + 1; k++) {
      if (jsonData.section[i].script[j].type == "word") {
        arr.push({
          script: jsonData.section[i].script[j].speech[k],
          character: jsonData.section[i].script[j].character,
        });
      }
    }
  }
}

const Main = () => {
  return (
    <>
      {arr.map((a) => (
        <div>
          <span>{a.character}: </span>
          <span>{a.script}</span>
        </div>
      ))}
    </>
  );
};

export default Main;
