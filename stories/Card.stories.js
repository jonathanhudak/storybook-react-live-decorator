import React from "react";
import styled from "@emotion/styled";
import withLiveEdit from "..";

const Card = styled.div`
  background: ghostwhite;
  padding: 16px;
  margin: 16px auto;
  font-family: sans-serif;
`;

export default {
  title: "Card"
};

export const defaultStory = () => <Card>Hello I am a card</Card>;

defaultStory.story = {
  name: "default",
  decorators: [withLiveEdit({ Card })]
};
