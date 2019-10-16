module.exports = {
  plain: {
    color: "#24292e",
    backgroundColor: "#ffffff"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(106, 115, 125)"
      }
    },
    {
      types: ["string"],
      style: {
        color: "rgb(3, 47, 98)"
      }
    },
    {
      types: ["number", "builtin", "variable", "constant"],
      style: {
        color: "rgb(0, 92, 197)"
      }
    },
    {
      types: ["attr-name", "function"],
      style: {
        color: "rgb(111, 66, 193)"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(34, 134, 58)"
      }
    }
  ]
};
