import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import CurvedCornerType from "@/enum/CurevedCornerType";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";

const IntroduceHiarcBottom: BottomLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.yellow,
  },
];

export default IntroduceHiarcBottom;
