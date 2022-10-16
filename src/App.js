import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes/Themes";
import GlobalStyle from "./globalStyles";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import SoundBar from "./subComponents/SoundBar/SoundBar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar theme={lightTheme} />

        <AnimatePresence exitBeforeEnter>
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
