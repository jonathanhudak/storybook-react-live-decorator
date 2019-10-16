import React, { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import light from "./light";
import dark from "./dark";

const jsxStringOptions = {
  showDefaultProps: true,
  showFunctions: true
};

const preference = localStorage.getItem("editor-theme-light");

export default function withLiveEdit(providedScope, { noInline = false } = {}) {
  const scope = {
    React,
    ...providedScope
  };

  return function LiveEditComponent(storyFn) {
    const [lightEnabled, setLightEnabled] = useState(preference !== "false");
    const toggleTheme = () => {
      setLightEnabled(state => {
        const nextValue = !state;
        localStorage.setItem("editor-theme-light", nextValue);
        return nextValue;
      });
    };
    const code = reactElementToJSXString(storyFn(), jsxStringOptions);
    return (
      <LiveProvider code={code} scope={scope} noInline={noInline}>
        <LivePreview />
        <LiveError />
        <LiveEditor theme={lightEnabled ? light : dark} />
        <div>
          <button onClick={toggleTheme}>
            {lightEnabled ? "Dark theme" : "Light theme"}
          </button>
        </div>
      </LiveProvider>
    );
  };
}
