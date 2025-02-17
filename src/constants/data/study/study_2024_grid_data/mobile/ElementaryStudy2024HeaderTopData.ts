import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import CppIcon from "@/assets/image/cpp_icon.png";

const ElementaryStudy2024HeaderTopData: TopLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.orange,
    contentColor: Color.white,
    text: "2024",
  },
  {
    position: [3, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.orange,
    contentColor: Color.white,
    text: "2학기",
  },
  {
    position: [5, 1],
    type: CellType.BORDERED_LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.transparent,
    contentColor: Color.orange,
    text: "중급 스터디",
  },
  {
    position: [8, 1],
    type: CellType.ICON,
    backgroundColor: Color.transparent,
    image: CppIcon,
  },
];

export default ElementaryStudy2024HeaderTopData;
