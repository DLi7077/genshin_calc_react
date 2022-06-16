import React from "react";
import DamageCalculator from "./views";
// import GridDisplay from "./views/GridDisplay";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
  },
  typography: {
    fontFamily: "genshinFont",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DamageCalculator />
      {/* <GridDisplay /> */}
    </ThemeProvider>
  );
}

export default App;
