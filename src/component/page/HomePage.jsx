import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../ui/Layout";
import MainTitle from "../block/MainTitle";
import FontStyle from "../ui/FontStyle";
import Color from "../ui/Color";
import reallogo from "./../../assets/hiarc-reallogo.png";

const HiarcContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  width: 60%;
  align-self: center;
`;

const HiarcTitle = styled.span`
  ${FontStyle.display2Heavy}
  color: ${Color.primary};
  white-space: nowrap;
  border-right: 3px solid black;
  padding-right: 5px;
  animation: ${(props) =>
    props.isComplete ? "none" : "blink 0.6s step-end infinite"};

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
`;

const HomePage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 800);
  const [text, setText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const fullText = "HI-ARC";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isSmallScreen]);

  return (
    <Layout>
      {isSmallScreen ? (
        <HiarcContainer>
          <LogoImage src={reallogo} alt="HI-ARC Logo" />
          {/* <HiarcTitle isComplete={isTypingDone}>{text}</HiarcTitle> */}
        </HiarcContainer>
      ) : (
        <MainTitle width={800} />
      )}
    </Layout>
  );
};

export default HomePage;
