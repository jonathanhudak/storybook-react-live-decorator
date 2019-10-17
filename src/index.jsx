import React, { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import light from "./light";
import dark from "./dark";

const defaultReactElementToJSXStringOptions = {
  showDefaultProps: true,
  showFunctions: true
};

const preference = localStorage.getItem("editor-theme-light");

export default function withLiveEdit(
  providedScope,
  {
    code,
    jsxStringOptions = {},
    noInline = false,
    lightTheme = light,
    darkTheme = dark
  } = {}
) {
  const scope = {
    React,
    ...providedScope
  };

  const editorCodeOptions = {
    ...jsxStringOptions,
    ...defaultReactElementToJSXStringOptions
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
    const editorCode =
      code || reactElementToJSXString(storyFn(), editorCodeOptions);
    return (
      <LiveProvider code={editorCode} scope={scope} noInline={noInline}>
        <LivePreview />
        <LiveError />
        <LiveEditor theme={lightEnabled ? lightTheme : darkTheme} />
        <div>
          <button onClick={toggleTheme}>
            {lightEnabled ? "Dark theme" : "Light theme"}
          </button>
        </div>
      </LiveProvider>
    );
  };
}
