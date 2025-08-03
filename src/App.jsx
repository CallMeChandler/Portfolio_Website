import { useState } from "react";
import IntroSequence from "./components/IntroSequence";
import LoginScreen from "./components/LoginScreen";
import Desktop from "./components/Desktop"; // ✅ Replace this
import Taskbar from "./components/Taskbar";

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!introFinished) {
    return (
      <IntroSequence
        onLoginSuccess={() => {
          setIsLoggedIn(true);
          setIntroFinished(true);
        }}
      />
    );
  }

  return isLoggedIn ? (
    <>
      <Desktop />
      <Taskbar />
    </>
  ) : (
    <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />
  );

}

export default App;
