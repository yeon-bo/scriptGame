/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import "./App.css";

import { Main } from "./Page/";

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);

const Button = styled.button`
  color: hotpink;
`;

function App() {
  return (
    <div className="App">
      <SomeComponent>
        <AnotherComponent />
        <Button>This is a hotpink button.</Button>
        <Main />
      </SomeComponent>
    </div>
  );
}

export default App;
