import { Avatar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { LeftBar } from "./Components/LeftBar/LeftBar";
import Notifications from "./Components/Notifications/Notifications";
import LoginModal from "./Components/Register/LoginModal";
import SignUpModal from "./Components/Register/SignUpModal";
import { RightBar } from "./Components/RightBar/RightBar";
import ScrollToTop from "./Components/ScrollToTop";
import { TopBar } from "./Components/TopBar/TopBar";
import { Context } from "./Context/Context";
import NotFound from "./Pages/404/NotFound";
import { About } from "./Pages/About/About";
import WriterApplication from "./Pages/Application/WriterApplication";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { SinglePost } from "./Pages/Singles/SinglePost";
import { Thread } from "./Pages/Thread/Thread";
import { Write } from "./Pages/Write/Write";
import AllWriters from "./Pages/Writers/AllWriters";

function App() {
  const { theme } = useContext(Context);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openLeftBar, setOpenLeftBar] = useState(false);
  const mobileScreen = 550;
	let screenWidth = window.screen.availWidth;

  return (
    <main
      style={{ backgroundColor: theme.bg, color: theme.text }}
      className='App'
    >

      <ScrollToTop />

      <div id='top' className='top-container'>
        <TopBar openLeftBar={openLeftBar} setOpenLeftBar={setOpenLeftBar} setOpenNotifications={setOpenNotifications} setOpenLoginModal={setOpenLoginModal} />
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

      <Notifications
        openNotifications={openNotifications}
        setOpenNotifications={setOpenNotifications}
      />

      <div className='app-body'>

        <LeftBar open={openLeftBar} setOpen={setOpenLeftBar} />

        <div className='right-body-container' style={{
          width: screenWidth < mobileScreen ? '100%' : '95%'
        }}>
          <div className='body-container'>
            <Routes>
              {/* home */}
              <Route exact path='/' element={<Home />} />
              {/* about */}
              <Route path='/about' element={<About />} />
              {/* contact */}
              <Route path='/contact' element={<Contact />} />
              {/* Writer application */}
              <Route
                path='/writerApplication'
                element={<WriterApplication />}
              />
              {/* All writers */}
              <Route path='/writers' element={<AllWriters />} />
              {/*  Post */}
              <Route path='/post' element={<Write />} />
              {/*  singlePost */}
              <Route path='/singlePost' element={<SinglePost />} />
              {/*  thread */}
              <Route path='/thread' element={<Thread />} />
              {/* 404 */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>

          <div className='right-container'>
            <RightBar />
          </div>
        </div>
      </div>
      {" "}
      <Link to='/post' className='Link'>
        <Avatar
          title='Write'
          style={{ backgroundColor: theme.secondary }}
          className='add-circle-btn'
        >
          <Add />
        </Avatar>
      </Link>
    </main>
  );
}

export default App;
