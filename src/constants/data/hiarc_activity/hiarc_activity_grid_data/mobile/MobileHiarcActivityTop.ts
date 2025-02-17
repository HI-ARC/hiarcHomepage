import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import HiarcLogo from "@/assets/image/hiarc_logo.png";
import HiConnectImage1 from "@/assets/image/hi_connect_1.png";
import HiConnectImage2 from "@/assets/image/hi_connect_2.png";
import IcpcImage from "@/assets/image/icpc.png";

const MobileHiarcActivityTop: TopLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.ICON,
    backgroundColor: Color.transparent,
    contentColor: Color.transparent,
    image: HiarcLogo,
  },
  {
    position: [2, 1],
    type: CellType.LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.yellow,
    contentColor: Color.primary,
    text: "학회 활동",
  },
  {
    position: [5, 1],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [6, 1],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },

  {
    position: [1, 2],
    type: CellType.LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.primary,
    contentColor: Color.white,
    text: "HI-CONNECT",
  },
  {
    position: [4, 2],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.gray,
  },
  {
    position: [6, 2],
    type: CellType.CIRCLE,
    backgroundColor: Color.yellow,
  },
  {
    position: [1, 3],
    type: CellType.IMAGE,
    backgroundColor: Color.primary,
    contentColor: Color.white,
    image: HiConnectImage1,
    caption: "@제 3회 HI-CONNECT",
  },

  {
    position: [5, 3],
    type: CellType.CIRCLE,
    backgroundColor: Color.yellow,
  },
  {
    position: [6, 3],
    type: CellType.CIRCLE,
    backgroundColor: Color.primary,
  },
  {
    position: [5, 4],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.gray,
  },
  {
    position: [1, 5],
    type: CellType.VERTICAL_RECTANGLE,
    backgroundColor: Color.gray,
  },
  {
    position: [2, 5],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.primary,
    contentColor: Color.white,
    text: "ICPC",
  },
  {
    position: [4, 5],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.primary,
    contentColor: Color.white,
    text: "하이팅",
  },
  {
    position: [6, 5],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [6, 6],
    type: CellType.VERTICAL_RECTANGLE,
    backgroundColor: Color.gray,
  },
  {
    position: [1, 7],
    type: CellType.CIRCLE,
    backgroundColor: Color.yellow,
  },

  {
    position: [1, 8],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [2, 8],
    type: CellType.CIRCLE,
    backgroundColor: Color.yellow,
  },
  {
    position: [3, 8],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.gray,
  },
  {
    position: [5, 8],
    type: CellType.BUTTON_WITH_ICON,
    backgroundColor: Color.primary,
    contentColor: Color.white,
    buttonText: "스터디",
    url: "/study",
  },
  {
    position: [1, 9],
    type: CellType.CIRCLE,
    backgroundColor: Color.yellow,
  },
  {
    position: [2, 9],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [1, 10],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.gray,
  },

  {
    position: [2, 6],
    type: CellType.IMAGE,
    backgroundColor: Color.primary,
    contentColor: Color.white,
    image: IcpcImage,
    caption: "@2024 ICPC예선",
  },
  {
    position: [3, 9],
    type: CellType.IMAGE,
    backgroundColor: Color.primary,
    image: HiConnectImage2,
    caption: "@제 2회 HI-CONNECT",
  },
];

export default MobileHiarcActivityTop;
