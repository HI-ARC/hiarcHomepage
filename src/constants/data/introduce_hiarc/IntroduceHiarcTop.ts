// src/constants/data/main_title/IntroduceHiarcTop.ts
import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const IntroduceHiarcTop: TopLayerGridItemData[] = [
  { position: [1, 1], type: CellType.CIRCLE, color: Color.gray },
  {
    position: [2, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    color: Color.yellow,
    text: "학회 소개",
  },
  { position: [1, 2], type: CellType.CIRCLE, color: Color.yellow },
  { position: [2, 2], type: CellType.CIRCLE, color: Color.gray },
  { position: [3, 2], type: CellType.CIRCLE, color: Color.gray },
];

export default IntroduceHiarcTop;
