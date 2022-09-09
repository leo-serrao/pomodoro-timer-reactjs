import { CyclesContextProvider } from "./contexts/CyclesContext";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
