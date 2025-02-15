// src/constants/data/main_title/IntroduceHiarcTop.ts
import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const IntroduceHiarcTop: TopLayerGridItemData[] = [
  { position: [1, 1], type: CellType.CIRCLE, backgroundColor: Color.gray },
  {
    position: [2, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    backgroundColor: Color.yellow,
    contentColor: Color.primary,
    text: "학회 소개",
  },
  { position: [1, 2], type: CellType.CIRCLE, backgroundColor: Color.yellow },
  { position: [2, 2], type: CellType.CIRCLE, backgroundColor: Color.gray },
  { position: [3, 2], type: CellType.CIRCLE, backgroundColor: Color.gray },
];

export default IntroduceHiarcTop;
