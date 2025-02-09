import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import CurvedCornerType from "@/enum/CurevedCornerType";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";

const BottomLayerGridData: BottomLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.orange,
  },
  {
    position: [6, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.gray,
  },
  {
    position: [9, 1],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.orange,
  },
  {
    position: [1, 2],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.orange,
  },
  {
    position: [3, 2],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.pink,
  },
  {
    position: [4, 2],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.pink,
  },
  {
    position: [7, 3],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.orange,
  },
  {
    position: [8, 3],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.gray,
  },
  {
    position: [9, 3],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.gray,
  },
  {
    position: [7, 4],
    type: CellType.CURVE,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.yellow,
  },
  {
    position: [5, 5],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.gray,
  },
  {
    position: [6, 5],
    type: CellType.CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.pink,
  },

  {
    position: [3, 1],
    type: CellType.ANIMATE_CURVE,
    direction: CurvedCornerType.TOP_RIGHT,
    backgroundColor: Color.primary,
    index: 0,
  },
  {
    position: [9, 2],
    type: CellType.ANIMATE_CURVE,
    direction: CurvedCornerType.BOTTOM_RIGHT,
    backgroundColor: Color.primary,
    index: 1,
  },
  {
    position: [4, 3],
    type: CellType.ANIMATE_CURVE,
    direction: CurvedCornerType.BOTTOM_LEFT,
    backgroundColor: Color.primary,
    index: 2,
  },
  {
    position: [8, 5],
    type: CellType.ANIMATE_CURVE_WITH_DELAY,
    direction: CurvedCornerType.BOTTOM_LEFT,
    backgroundColor: Color.primary,
    index: 3,
    sequence: 1,
  },
  {
    position: [7, 5],
    type: CellType.ANIMATE_CURVE_WITH_DELAY,
    direction: CurvedCornerType.TOP_LEFT,
    backgroundColor: Color.primary,
    index: 3,
    sequence: 2,
  },
];

export default BottomLayerGridData;
