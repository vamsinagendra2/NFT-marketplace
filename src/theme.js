const theme = {
  breakpoints: {
    values: {
      sm: 375,
      md: 834,
      lg: 1280,
    },
  },
  palette: {
    common: {
      white: "#FFFFFF",
      black: "#000",
      gray: "#CCCCCC"
    },
    primary: {
      main: "#54bfcf"
    },
    secondary: {
      main: '#24424D'
    },
    background: {
      default: "#2B2B2B",
      secondary: "#3B3B3B",
      tertiary: "#A259FF",
    },
    text: {
      primary: "#fff"
    },
    fontColor: {
      default:"#FFFFFF",
    }
  },
  typography: {
    default: "Work Sans",
    secondary: "Space Mono",
    tertiary: [ "Work Sans", "sans-serif" ].join(","),
    h1: {
      fontSize: 67
    },
    h2: {
      fontSize: 51
    },
    h3: {
      fontSize: 38
    },
    h4: {
      fontSize: 28
    },
    h5: {
      fontSize: 21,
      fontWeight: 600
    },
    body1: {
      fontSize: 16,
    },
    caption: {
      fontSize: 12
    }
  },
}

export default theme;
