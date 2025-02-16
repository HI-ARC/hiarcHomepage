import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import CurvedCornerType from "@/enum/CurevedCornerType";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";

const StudyHeaderBottomData: BottomLayerGridItemData[] = [
  {
    position: [10, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.gray,
  },
  {
    position: [11, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.gray,
  },
];

export default StudyHeaderBottomData;
