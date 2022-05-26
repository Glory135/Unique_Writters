import { Avatar, Container } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useCallback, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LeftBar } from "./Components/LeftBar/LeftBar";
import LoginModal from "./Components/Register/LoginModal";
import SignUpModal from "./Components/Register/SignUpModal";
import { RightBar } from "./Components/RightBar/RightBar";
import ScrollToTop from "./Components/ScrollToTop";
import { TopBar } from "./Components/TopBar/TopBar";
import { Context } from "./Context/Context";
import NotFound from "./Pages/404/NotFound";
import { About } from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

function App() {
  const { theme } = useContext(Context);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  return (
    <main
      style={{ backgroundColor: theme.bg, color: theme.text }}
      className='App'
    >
      <ScrollToTop />
      <div id='top' className='top-container'>
        <TopBar setOpenLoginModal={setOpenLoginModal} />
      </div>
      <LoginModal
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
        setOpenSignUpModal={setOpenSignUpModal}
      />
      <SignUpModal
        openSignUpModal={openSignUpModal}
        setOpenSignUpModal={setOpenSignUpModal}
        setOpenLoginModal={setOpenLoginModal}
      />
      <div className='app-body'>
        <Container
          style={{ backgroundColor: theme.bg }}
          className='left-container'
        >
          <LeftBar />
        </Container>

        <div className='right-body-container'>
          <div className='body-container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              {/* 404 */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>

          <div className='right-container'>
            <RightBar />
          </div>
        </div>
      </div>{" "}
      <Avatar
        title='Write'
        style={{ backgroundColor: theme.secondary }}
        className='add-circle-btn'
      >
        <Add />
      </Avatar>
    </main>
  );
}

export default App;
