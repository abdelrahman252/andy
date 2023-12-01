import { TypeAnimation } from "react-type-animation";
import "./App.css";
import Modall from "./Modall";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";
function App() {
  const [mod, setMod] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMod(true);
    }, 30000);
  }, []);

  return (
    <div className="app">
      <div className="header">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "pop animate__animated animate__slideInDown" : "pop"
              }
            >
              <h3>
                <span style={{ color: "#7EA1CE" }}>Abdelrahman</span>{" "}
                <span style={{ color: "#d01515" }}> 𓆩♡𓆪</span>
                <span style={{ color: "purple" }}> Andrea</span>
              </h3>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "pop animate__animated animate__slideInUp" : "pop"
              }
            >
              <h3>
                <span style={{ color: "purple" }}> Andy </span>is the heart of{" "}
                <span style={{ color: "#7EA1CE" }}>Abdelrahman</span>
              </h3>
            </div>
          )}
        </TrackVisibility>
      </div>

      <div style={{ width: "500px", margin: "20px 0" }}>
        <TypeAnimation
          sequence={[
            "hi my cutie andy babygirl , im bodi , talking to u from far , you might be wondering how is that working but its okay , i made it for u and for us, i got that idea while i was looking at u while sleeping , u look so pretty and inspired me to make that for u , i think your beauty ate my eyes , u look incredibly gorgeous , and i love to spend time with you ,i love to see you , i love to look at you , i want u to know that u are awesome and everyday u get better , dont worry about ur college u do good , u will be better , u do good , everyday i will be here always to bother u and annoy u ,im here always , i will support u and do my best for uuuu , and bec u were reading all that here is a gift for u ",
            '1000',
          ]}
          wrapper="span"
          speed={30}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      {mod && <Modall />}
    </div>
  );
}

export default App;
