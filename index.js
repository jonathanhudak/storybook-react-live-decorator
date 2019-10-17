'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactElementToJSXString = _interopDefault(require('react-element-to-jsx-string'));
var reactLive = require('react-live');

var light = {
  plain: {
    color: "#24292e",
    backgroundColor: "#ffffff"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(106, 115, 125)"
    }
  }, {
    types: ["string"],
    style: {
      color: "rgb(3, 47, 98)"
    }
  }, {
    types: ["number", "builtin", "variable", "constant"],
    style: {
      color: "rgb(0, 92, 197)"
    }
  }, {
    types: ["attr-name", "function"],
    style: {
      color: "rgb(111, 66, 193)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(34, 134, 58)"
    }
  }]
};

var dark = {
  plain: {
    color: "#abb2bf",
    backgroundColor: "#282c34"
  },
  styles: [{
    types: ["punctuation", "constant", "deleted", "tag"],
    style: {
      color: "rgb(239, 89, 111)"
    }
  }, {
    types: ["variable", "keyword", "selector"],
    style: {
      color: "rgb(213, 95, 222)"
    }
  }, {
    types: ["builtin", "changed", "namespace", "class-name"],
    style: {
      color: "rgb(229, 192, 123)"
    }
  }, {
    types: ["operator", "symbol"],
    style: {
      color: "rgb(43, 186, 197)"
    }
  }, {
    types: ["inserted", "string"],
    style: {
      color: "rgb(137, 202, 120)"
    }
  }, {
    types: ["attr-name", "comment"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["char", "number"],
    style: {
      color: "rgb(209, 154, 102)"
    }
  }, {
    types: ["function"],
    style: {
      color: "rgb(97, 175, 239)"
    }
  }]
};

const defaultReactElementToJSXStringOptions = {
  showDefaultProps: true,
  showFunctions: true
};
const preference = localStorage.getItem("editor-theme-light");
function withLiveEdit(providedScope, {
  code,
  jsxStringOptions = {},
  noInline = false,
  lightTheme = light,
  darkTheme = dark
} = {}) {
  const scope = {
    React: React__default,
    ...providedScope
  };
  const editorCodeOptions = { ...jsxStringOptions,
    ...defaultReactElementToJSXStringOptions
  };
  return function LiveEditComponent(storyFn) {
    const [lightEnabled, setLightEnabled] = React.useState(preference !== "false");

    const toggleTheme = () => {
      setLightEnabled(state => {
        const nextValue = !state;
        localStorage.setItem("editor-theme-light", nextValue);
        return nextValue;
      });
    };

    const editorCode = code || reactElementToJSXString(storyFn(), editorCodeOptions);
    return React__default.createElement(reactLive.LiveProvider, {
      code: editorCode,
      scope: scope,
      noInline: noInline
    }, React__default.createElement(reactLive.LivePreview, null), React__default.createElement(reactLive.LiveError, null), React__default.createElement(reactLive.LiveEditor, {
      theme: lightEnabled ? lightTheme : darkTheme
    }), React__default.createElement("div", null, React__default.createElement("button", {
      onClick: toggleTheme
    }, lightEnabled ? "Dark theme" : "Light theme")));
  };
}

module.exports = withLiveEdit;
