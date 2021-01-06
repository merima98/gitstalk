import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyles";
import User from "./features/User";
import Footer from "./features/Footer";
import Home from "./features/Home";
import { darkTheme, lightTheme } from "./themes/themes";

function getItem(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key) || "");
  } catch (err) {
    return false;
  }
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getItem("darkMode"));
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/:login"
            component={() => (
              <User setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
