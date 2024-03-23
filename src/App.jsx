import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import leetcodeLogo from "./resources/leetcode-svgrepo-com.svg";
import gmailLogo from "./resources/Gmail-Icon-Vector.jpg";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  const [showBubbleLinkedIn, setShowBubbleLinkedIn] = useState(false);
  const [showBubbleGithub, setShowBubbleGithub] = useState(false);
  const [showBubbleLeetcode, setShowBubbleLeetcode] = useState(false);
  const [showBubbleGmail, setShowBubbleGmail] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <div className="social_container">
        <a
          onMouseEnter={() => {
            setShowBubbleLinkedIn(true);
          }}
          onMouseLeave={() => {
            setShowBubbleLinkedIn(false);
          }}
          href="https://www.linkedin.com/in/ritish-srivastava/"
          target="_blank"
        >
          <img
            style={{ height: "31px", width: "31px" }}
            src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
            alt=""
          />
          {showBubbleLinkedIn && <div className="text_bubble">LinkedIn</div>}
        </a>
        <a
          onMouseEnter={() => {
            setShowBubbleGithub(true);
          }}
          onMouseLeave={() => {
            setShowBubbleGithub(false);
          }}
          href="https://github.com/ritish1912"
          target="_blank"
        >
          <img
            style={{ height: "31px", width: "31px" }}
            src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
            alt=""
          />
          {showBubbleGithub && <div className="text_bubble">Github</div>}
        </a>
        <a
          onMouseEnter={() => {
            setShowBubbleLeetcode(true);
          }}
          onMouseLeave={() => {
            setShowBubbleLeetcode(false);
          }}
          href="https://leetcode.com/ritish007/"
          target="_blank"
        >
          <img
            style={{ height: "31px", width: "31px" }}
            src={leetcodeLogo}
            alt=""
          />
          {showBubbleLeetcode && <div className="text_bubble">Leetcode</div>}
        </a>
        <a
          onMouseEnter={() => {
            setShowBubbleGmail(true);
          }}
          onMouseLeave={() => {
            setShowBubbleGmail(false);
          }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ritish1912@gmail.com"
          target="_blank"
        >
          <img
            style={{ height: "45px", width: "45px" }}
            src={gmailLogo}
            alt=""
          />
          {showBubbleGmail && <div className="text_bubble">Gmail</div>}
        </a>
      </div>
      <HomePage />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
