import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import CurvedCornerType from "@/enum/CurevedCornerType";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";

const HiarcActivityBottom: BottomLayerGridItemData[] = [
  {
    position: [4, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.gray,
  },
  {
    position: [8, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.gray,
  },
  {
    position: [9, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.gray,
  },
  {
    position: [10, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.gray,
  },
];

export default HiarcActivityBottom;
