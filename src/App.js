/** @jsxImportSource @emotion/react */
// import { css, jsx } from "@emotion/react";
// import styled from "@emotion/styled";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // Link
import {
  Home,
  Main,
  Story,
  Ending,
  SaveStory,
  EndingCollection,
  NotFound,
} from "./Page/";

// const style = css`
//   color: hotpink;
// `;

// const SomeComponent = ({ children }) => (
//   <div css={style}>
//     Some hotpink text.
//     {children}
//   </div>
// );

// const anotherStyle = css({
//   textDecoration: "underline",
// });

// const AnotherComponent = () => (
//   <div css={anotherStyle}>Some text with an underline.</div>
// );

function App() {
  return (
    <div className="App">
      {/* <SomeComponent>
        <AnotherComponent />
        <Button>This is a hotpink button.</Button>
      </SomeComponent> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/story" element={<Story />} />
        <Route path="/ending" element={<Ending />} />
        <Route path="/savelist" element={<SaveStory />} />
        <Route path="/endingcollection" element={<EndingCollection />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
