module.exports = {
  plain: {
    color: "#abb2bf",
    backgroundColor: "#282c34"
  },
  styles: [
    {
      types: ["punctuation", "constant", "deleted", "tag"],
      style: {
        color: "rgb(239, 89, 111)"
      }
    },
    {
      types: ["variable", "keyword", "selector"],
      style: {
        color: "rgb(213, 95, 222)"
      }
    },
    {
      types: ["builtin", "changed", "namespace", "class-name"],
      style: {
        color: "rgb(229, 192, 123)"
      }
    },
    {
      types: ["operator", "symbol"],
      style: {
        color: "rgb(43, 186, 197)"
      }
    },
    {
      types: ["inserted", "string"],
      style: {
        color: "rgb(137, 202, 120)"
      }
    },
    {
      types: ["attr-name", "comment"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["char", "number"],
      style: {
        color: "rgb(209, 154, 102)"
      }
    },
    {
      types: ["function"],
      style: {
        color: "rgb(97, 175, 239)"
      }
    }
  ]
};
