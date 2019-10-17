# `react-live` decorator for @storybook/react

## Prerequisites

Install storybook: https://storybook.js.org/docs/guides/guide-react/

1 liner:

```
npx -p @storybook/cli sb init --type react
```

## Install

```bash
npm i @jmhudak/storybook-react-live-decorator --save-dev
```

## Usage

```jsx
// Button.stories.jsx
import React from "react";
import { Button } from "@storybook/react/demo";
import withLiveEdit from "../index.esm.js";

export default {
  title: "Button"
};

export const defaultStory = () => <Button>Hello I am a Button</Button>;

defaultStory.story = {
  name: "default",
  decorators: [withLiveEdit({ Button })]
};
```

- [See demo](https://github.com/jonathanhudak/storybook-react-live-decorator)

## References

- https://storybook.js.org/docs/guides/guide-react/
- https://storybook.js.org/docs/basics/writing-stories/#decorators
- https://github.com/FormidableLabs/react-live
- https://github.com/FormidableLabs/prism-react-renderer/tree/master/tools/themeFromVsCode
