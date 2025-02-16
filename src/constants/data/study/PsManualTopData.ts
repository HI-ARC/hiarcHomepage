import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const PsManualTopData: TopLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.BORDERED_LONG_HORIZONTAL_RECTANGLE,
    backgroundColor: Color.transparent,
    contentColor: Color.orange,
    text: "PS 사용설명서",
  },
];

export default PsManualTopData;
