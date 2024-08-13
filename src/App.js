import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const texts = useMemo(
    () => [
      "I am a Full Stack Developer.",
      "Working at Country Delight As Senior Software Developer!",
      "Competitive Coder!",
    ],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < currentText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Adjust the speed by changing the delay (100ms here)

      return () => clearTimeout(typingTimeout);
    } else {
      const nextTextTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 1000); // Pause before typing the next text

      return () => clearTimeout(nextTextTimeout);
    }
  }, [charIndex, currentText, texts.length]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex, texts]);

  const onClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/vishopvishwa/");
  };

  const onClickDownload = () => {
    window.open(
      "https://drive.google.com/file/d/137ob6M_JfgMDlxKBeULiizMPlkfLQ6_R/view?usp=sharing"
    );
  };

  const onClickContact = () => {
    window.open("https://t.me/vishop_vishwa");
  };
  return (
    <div className="container">
      <h1>Hi! I am Deepak</h1>
      <div className="typing-container">
        <span className="typewriter">{displayedText}</span>
      </div>
      <div className="socials">
        <button className="button" onClick={onClickLinkedin}>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.14-341C24.3 107 0 82.7 0 51.5S24.3-4 54.14-4s54.14 24.3 54.14 55.5-24.28 54.1-54 54.1zM447.9 448h-92.6V302.4c0-34.7-12.2-58.4-42.7-58.4-23.3 0-37.1 15.7-43.2 30.8-2.2 5.3-2.8 12.8-2.8 20.3V448h-92.6s1.2-269.5 0-297.2h92.6v42.1c12.3-19 34.4-46.3 83.7-46.3 61.1 0 106.9 39.8 106.9 125.4V448z" />
            </svg>
          </span>
          Linkedin
        </button>
        <button className="button" onClick={onClickDownload}>
          <span className="icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V15M12 15L8 11M12 15L16 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Resume
        </button>
        <button className="button" onClick={onClickContact}>
          <span className="icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 12L22 2L16 22L10.5 14L2 12Z" fill="currentColor" />
            </svg>
          </span>
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default App;
