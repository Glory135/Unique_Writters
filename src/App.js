import { Container } from "@material-ui/core";
import { useContext } from "react";
import "./App.css";
import { LeftBar } from "./Components/LeftBar/LeftBar";
import { RightBar } from "./Components/RightBar/RightBar";
import { TopBar } from "./Components/TopBar/TopBar";
import { Context } from "./Context/Context";
import Home from "./Pages/Home/Home";

function App() {
  const { theme } = useContext(Context);

  return (
    <main
      style={{ backgroundColor: theme.bg, color: theme.text }}
      className='App'
    >
      <TopBar />
      <div className='app-body'>
        <Container
          style={{ backgroundColor: theme.bg }}
          className='left-container'
        >
          <LeftBar />
        </Container>

        <div className='right-body-container'>
          <div className='body-container'>
            <Home />
          </div>

          <div className='right-container'>
            <RightBar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
