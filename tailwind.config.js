// tailwind.config.js
import { Colors } from "./src/constants/ui/Colors";
import { FontStyles } from "./src/constants/ui/FontStyles";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // xs 사이즈 (480px)
        sm: "640px", // 기본 sm 사이즈
        md: "768px", // 기본 md 사이즈
        lg: "1024px", // 기본 lg 사이즈
        xl: "1280px", // 기본 xl 사이즈
        "2xl": "1536px", // 기본 2xl 사이즈
      },
      // 공유 모듈의 Colors를 그대로 확장에 넣습니다.
      colors: {
        primary: "#00AAFF",
        background: "#FFFCED",
        gray: "#D9D9D9",
        gray100: "#f9f9e7",
        grayDefault: "#F1F0F0",
        orange: "#FFA800",
        pink: "#FFCDCD",
        yellow: "#FFEC81",
        white: "#FFFFFF",
        black: "#000000",
        orange05: "#FFA8000D",
        transparent: "transparent",
        toggleColor: "#E2F5FF4D",
        toggledButtonColor: "#516EBE",
      },
      fontFamily: {
        NanumSquareNeoHeavy: ['"NanumSquareNeoHeavy"', "sans-serif"],
        NanumSquareNeoExtraBold: ['"NanumSquareNeoExtraBold"', "sans-serif"],
        NanumSquareNeo: ['"NanumSquareNeo"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      // FontStyles 공유 모듈의 각 스타일을 Tailwind 유틸리티 클래스에 매핑합니다.
      const newUtilities = {
        ".display2Heavy": FontStyles.display2Heavy,
        ".display1Heavy": FontStyles.display1Heavy,
        ".display1ExtraBold": FontStyles.display1ExtraBold,
        ".display3Bold": FontStyles.display3Bold,
        ".display3SemiBold": FontStyles.display3SemiBold,
        ".display2Bold": FontStyles.display2Bold,
        ".display2SemiBold": FontStyles.display2SemiBold,
        ".display1Bold": FontStyles.display1Bold,
        ".display1SemiBold": FontStyles.display1SemiBold,
        ".headlineBold": FontStyles.headlineBold,
        ".headlineSemiBold": FontStyles.headlineSemiBold,
        ".subhead3Bold": FontStyles.subhead3Bold,
        ".subhead3ExtraBold": FontStyles.subhead3ExtraBold,
        ".subhead3SemiBold": FontStyles.subhead3SemiBold,
        ".subhead2Bold": FontStyles.subhead2Bold,
        ".subhead2SemiBold": FontStyles.subhead2SemiBold,
        ".subhead1Bold": FontStyles.subhead1Bold,
        ".subhead1SemiBold": FontStyles.subhead1SemiBold,
        ".subhead1ExtraBold": FontStyles.subhead1ExtraBold,
        ".body3Medium": FontStyles.body3Medium,
        ".body3Regular": FontStyles.body3Regular,
        ".body2Medium": FontStyles.body2Medium,
        ".body2Regular": FontStyles.body2Regular,
        ".body1Medium": FontStyles.body1Medium,
        ".body1Regular": FontStyles.body1Regular,
        ".captionMedium": FontStyles.captionMedium,
        ".captionRegular": FontStyles.captionRegular,
        ".descriptionMedium": FontStyles.descriptionMedium,
        ".descriptionBold": FontStyles.descriptionBold,
        ".descriptionRegular": FontStyles.descriptionRegular,
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
