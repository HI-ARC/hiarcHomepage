import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import HiarcLogo from "@/assets/image/hiarc_logo.png";
import PythonIcon from "@/assets/image/python_icon.png";

const BasicStudy2024HeaderTopData: TopLayerGridItemData[] = [
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
    text: "학회 스터디",
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
    position: [7, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.gray,
  },
  {
    position: [1, 2],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.orange,
    contentColor: Color.white,
    text: "2024",
  },
  {
    position: [3, 2],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.orange,
    contentColor: Color.white,
    text: "2학기",
  },
  {
    position: [5, 2],
    type: CellType.BORDERED_LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.transparent,
    contentColor: Color.orange,
    text: "기초 스터디",
  },
  {
    position: [8, 2],
    type: CellType.ICON,
    backgroundColor: Color.transparent,
    image: PythonIcon,
  },
];

export default BasicStudy2024HeaderTopData;
