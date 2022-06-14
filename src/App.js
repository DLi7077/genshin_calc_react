import React from "react";
import CharacterBuild from "./views/CharacterBuild";
import GridDisplay from "./views/GridDisplay";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9"
    },
  },
  typography: {
    fontFamily: "genshinFont"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CharacterBuild />
      <GridDisplay />
    </ThemeProvider>
  );
}

export default App;
