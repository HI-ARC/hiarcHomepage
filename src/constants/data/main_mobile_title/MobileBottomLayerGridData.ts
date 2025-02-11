import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import CurvedCornerType from "@/enum/CurevedCornerType";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";

const MobileBottomLayerGridData: BottomLayerGridItemData[] = [
  {
    position: [2, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.gray,
  },
  {
    position: [5, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.orange,
  },
  {
    position: [3, 3],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.orange,
  },
  {
    position: [4, 3],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.gray,
  },
  {
    position: [5, 3],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.gray,
  },
  {
    position: [1, 5],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.gray,
  },
  {
    position: [2, 5],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.pink,
  },
  {
    position: [2, 5],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.pink,
  },
  {
    position: [3, 4],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.yellow,
  },
  {
    position: [3, 5],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.primary,
  },
  {
    position: [5, 7],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.orange,
  },
  {
    position: [5, 9],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.pink,
  },
];

export default MobileBottomLayerGridData;
