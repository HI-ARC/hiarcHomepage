import { useState, useEffect } from "react";
import Layout from "../templates/PageTemplate";
import MainTitle from "../organisms/main_title/MainTitle";
import HiArcGridView from "../organisms/section/SectionGridView";
import BottomLayerGridData from "@/constants/data/main_title/BottomLayerGridData";
import TopLayerGridData from "@/constants/data/main_title/TopLayerGridData";
import IntroduceHiarc from "@/constants/data/introduce_hiarc/IntroduceHiarcBottom";
import IntroduceHiarcTop from "@/constants/data/introduce_hiarc/IntroduceHiarcTop";

const HomePage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [text, setText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  // rem 단위를 px로 변환하는 함수
  const remToPx = (rem: number) => {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  const getMainTitleWidth = () => {
    const remValue = remToPx(6.0);
    return Math.min(1000, Math.max(200, window.innerWidth - remValue));
  };

  const [mainTitleWidth, setMainTitleWidth] = useState(getMainTitleWidth());

  const fullText = "HI-ARC";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setMainTitleWidth(getMainTitleWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();
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
    <Layout align="center">
      <MainTitle />
    </Layout>
  );
};

export default HomePage;
