import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const InterMediateStudy2025HeaderData: TopLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.orange,
    contentColor: Color.white,
    text: "2025",
  },
  {
    position: [3, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.orange,
    contentColor: Color.white,
    text: "1학기",
  },
  {
    position: [5, 1],
    type: CellType.BORDERED_LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.transparent,
    contentColor: Color.orange,
    text: "중급 스터디",
  },
];

export default InterMediateStudy2025HeaderData;
