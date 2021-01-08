import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyles";
import User from "./features/User";
import Footer from "./components/Footer";
import Home from "./features/Home";
import { darkTheme, lightTheme } from "./themes/themes";
import { useDarkMode } from "./state";

function App() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:login" component={User} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
