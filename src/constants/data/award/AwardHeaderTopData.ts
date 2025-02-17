import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const AwardHeaderTopData: TopLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.yellow,
    contentColor: Color.primary,
    text: "수상경력",
  },
];

export default AwardHeaderTopData;
