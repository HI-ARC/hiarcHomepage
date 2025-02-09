// src/ui/font.ts

export const FontStyles = {
  display2Heavy: {
    fontSize: "12rem",
    letterSpacing: "10px",
    lineHeight: "12rem",
    fontWeight: "700",
    fontFamily: '"NanumSquareNeoHeavy"',
  },
  display1Heavy: {
    fontSize: "2.8rem",
    lineHeight: 1,
    fontWeight: "700",
    fontFamily: '"NanumSquareNeoHeavy"',
  },
  display1Medium: {
    fontSize: "2.8rem",
    lineHeight: 1,
    fontWeight: "500",
    fontFamily: '"NanumSquareNeo"',
  },
  display1ExtraBold: {
    fontSize: "2.8rem",
    lineHeight: 1,
    fontWeight: "700",
    fontFamily: '"NanumSquareNeoExtraBold"',
  },
  display3Bold: {
    fontSize: "3.2rem",
    lineHeight: 1,
    fontWeight: "700",
    fontFamily: '"NanumSquareNeo"',
  },
  display3SemiBold: {
    fontSize: "3.2rem",
    lineHeight: 1,
    fontWeight: "600",
    fontFamily: '"NanumSquareNeo"',
  },
  display2Bold: {
    fontSize: "2.8rem",
    lineHeight: 1,
    fontWeight: "700",
    fontFamily: '"NanumSquareNeo"',
  },
  display2SemiBold: {
    fontSize: "2.8rem",
    lineHeight: 1,
    fontWeight: "600",
    fontFamily: '"NanumSquareNeo"',
  },
  display1Bold: {
    fontSize: "2.4rem",
    lineHeight: 1,
    fontWeight: "700",
    fontFamily: '"NanumSquareNeo"',
  },
  display1SemiBold: {
    fontSize: "2.4rem",
    lineHeight: 1,
    fontWeight: "600",
    fontFamily: '"NanumSquareNeo"',
  },
  headlineBold: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: '"NanumSquareNeo"',
  },
  headlineSemiBold: {
    fontSize: "2rem",
    fontWeight: "600",
    fontFamily: '"NanumSquareNeo"',
  },
  subhead3Bold: {
    fontSize: "1.6rem",
    fontWeight: "700",
    fontFamily: '"NanumSquareNeo"',
  },
  subhead3ExtraBold: {
    fontSize: "1.6rem",
    fontWeight: "800",
    fontFamily: '"NanumSquareNeoExtraBold"',
  },
  subhead3SemiBold: {
    fontSize: "1.6rem",
    fontWeight: "600",
    fontFamily: '"NanumSquareNeo"',
  },
  subhead2Bold: {
    fontSize: "1.4rem",
    fontWeight: "700",
    fontFamily: '"NanumSquareNeo"',
  },
  subhead2SemiBold: {
    fontSize: "1.4rem",
    fontWeight: "600",
    fontFamily: '"NanumSquareNeo"',
  },
  subhead1Bold: {
    fontSize: "1.2rem",
    fontWeight: "700",
    fontFamily: '"NanumSquareNeo"',
  },
  subhead1SemiBold: {
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: '"NanumSquareNeo"',
  },
  subhead1ExtraBold: {
    fontSize: "1.2rem",
    fontWeight: "800",
    fontFamily: '"NanumSquareNeoExtraBold"',
  },
  body3Medium: {
    fontSize: "1.8rem",
    fontWeight: "500",
    fontFamily: '"NanumSquareNeo"',
  },
  body3Regular: {
    fontSize: "1.8rem",
    fontWeight: "400",
    fontFamily: '"NanumSquareNeo"',
  },
  body2Medium: {
    fontSize: "1.6rem",
    fontWeight: "500",
    fontFamily: '"NanumSquareNeo"',
  },
  body2Regular: {
    fontSize: "1.6rem",
    fontWeight: "400",
    fontFamily: '"NanumSquareNeo"',
  },
  body1Medium: {
    fontSize: "1.4rem",
    fontWeight: "500",
    fontFamily: '"NanumSquareNeo"',
  },
  body1Regular: {
    fontSize: "1.4rem",
    fontWeight: "400",
    fontFamily: '"NanumSquareNeo"',
  },
  captionMedium: {
    fontSize: "1.2rem",
    fontWeight: "500",
    fontFamily: '"NanumSquareNeo"',
  },
  captionRegular: {
    fontSize: "1.2rem",
    fontWeight: "400",
    fontFamily: '"NanumSquareNeo"',
  },
  descriptionMedium: {
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: '"NanumSquareNeo"',
  },
  descriptionBold: {
    fontSize: "0.8rem",
    fontWeight: "700",
    fontFamily: '"NanumSquareNeo"',
  },
  descriptionRegular: {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: '"NanumSquareNeo"',
  },
} as const;

// FontStyle 객체의 키들을 유니온 타입으로 추출합니다.
export type FontStyleKey = keyof typeof FontStyles;

// 기본적으로 FontStyle 객체를 export 합니다.
export default FontStyles;
