import React from "react";
import styled from "@emotion/styled";
import withLiveEdit from "../index.esm.js";

export default {
  title: "Live Editor"
};

export const defaultStory = () => <div />;

const code = `
const Box = styled.div\`
  background: darkblue;
  color: magenta;
  padding: 16px;
  margin: 32px 0;
  font-size: 32px;
  font-family: monospace;
\`;

function App() {
  return (
    <Box>Amazing!</Box>
  );
}

render(
  <App />
);
`;

defaultStory.story = {
  name: "default",
  decorators: [withLiveEdit({ styled }, { code, noInline: true })]
};
