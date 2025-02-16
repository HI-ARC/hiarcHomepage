import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import HiarcLogo from "@/assets/image/hiarc_logo.png";
import PythonIcon from "@/assets/image/python_icon.png";
import CppIcon from "@/assets/image/cpp_icon.png";

const Study2024HeaderTopData: TopLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.ICON,
    backgroundColor: Color.transparent,
    contentColor: Color.transparent,
    image: HiarcLogo,
  },
  {
    position: [2, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.orange,
    contentColor: Color.white,
    text: "2024",
  },
  {
    position: [4, 1],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [5, 1],
    type: CellType.LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.gray,
  },
  {
    position: [8, 1],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [9, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.gray,
  },
  {
    position: [11, 1],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [12, 1],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [1, 2],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.orange,
    contentColor: Color.white,
    text: "2학기",
  },
  {
    position: [3, 2],
    type: CellType.BORDERED_LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.transparent,
    contentColor: Color.orange,
    text: "기초 스터디",
  },

  {
    position: [6, 2],
    type: CellType.ICON,
    backgroundColor: Color.transparent,
    image: PythonIcon,
  },
  {
    position: [7, 2],
    type: CellType.BORDERED_LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.transparent,
    contentColor: Color.orange,
    text: "초급 스터디",
  },
  {
    position: [10, 2],
    type: CellType.ICON,
    backgroundColor: Color.transparent,
    image: CppIcon,
  },
  {
    position: [11, 2],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
  {
    position: [12, 2],
    type: CellType.CIRCLE,
    backgroundColor: Color.gray,
  },
];

export default Study2024HeaderTopData;
