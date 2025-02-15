import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import CurvedCornerType from "@/enum/CurevedCornerType";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";

const ContestIntroduceBottom: BottomLayerGridItemData[] = [
  {
    position: [2, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.primary,
  },
  {
    position: [2, 2],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.gray,
  },
  {
    position: [1, 2],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.gray,
  },
];

export default ContestIntroduceBottom;
