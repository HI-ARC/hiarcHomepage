// src/constants/data/main_title/ContestIntroduceTop.ts
import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const ContestIntroduceTop: TopLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.HORIZONTAL_RECTANGLE,
    color: Color.primary,
    text: "대회 주최",
  },
  {
    position: [3, 1],
    type: CellType.CIRCLE,
    color: Color.gray,
  },
  { position: [1, 2], type: CellType.CIRCLE, color: Color.gray },
  { position: [2, 2], type: CellType.CIRCLE, color: Color.gray },
  { position: [3, 2], type: CellType.CIRCLE, color: Color.primary },
  { position: [1, 3], type: CellType.CIRCLE, color: Color.gray },
  { position: [2, 3], type: CellType.CIRCLE, color: Color.gray },
  { position: [3, 3], type: CellType.CIRCLE, color: Color.gray },
];

export default ContestIntroduceTop;
