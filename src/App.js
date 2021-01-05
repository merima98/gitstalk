import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./features/Home";
import User from "./features/User";
import Footer from "./features/Footer";
import { darkTheme, lightTheme } from "./themes/themes";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  console.log(isDarkMode);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/:login"
            component={() => <User isDarkMode={setIsDarkMode} />}
          />
        </Switch>
        <Footer setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
