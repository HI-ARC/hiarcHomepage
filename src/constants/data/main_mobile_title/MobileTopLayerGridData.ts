// src/constants/data/main_title/MobileTopLayerGridData.ts
import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const MobileTopLayerGridData: TopLayerGridItemData[] = [
  { position: [1, 1], type: CellType.CIRCLE, color: Color.pink },
  { position: [2, 1], type: CellType.CIRCLE, color: Color.gray },
  { position: [3, 1], type: CellType.HORIZONTAL_RECTANGLE, color: Color.gray },
  { position: [5, 1], type: CellType.CIRCLE, color: Color.orange },
  { position: [6, 1], type: CellType.CIRCLE, color: Color.orange },

  { position: [1, 2], type: CellType.CIRCLE, color: Color.pink },
  { position: [2, 2], type: CellType.CIRCLE, color: Color.gray },
  { position: [3, 2], type: CellType.VERTICAL_RECTANGLE, color: Color.orange },
  { position: [6, 2], type: CellType.CIRCLE, color: Color.orange },

  { position: [4, 3], type: CellType.CIRCLE, color: Color.gray },
  { position: [5, 3], type: CellType.CIRCLE, color: Color.gray },
  { position: [6, 3], type: CellType.CIRCLE, color: Color.primary },

  {
    position: [1, 4],
    type: CellType.LONG_HORIZONTAL_RECTANGLE,
    color: Color.yellow,
    text: "Solve with",
  },
  { position: [4, 4], type: CellType.CIRCLE, color: Color.orange },
  { position: [5, 4], type: CellType.CIRCLE, color: Color.gray },
  { position: [6, 4], type: CellType.CIRCLE, color: Color.gray },

  { position: [1, 5], type: CellType.CIRCLE, color: Color.gray },
  { position: [2, 5], type: CellType.CIRCLE, color: Color.pink },
  { position: [3, 5], type: CellType.CIRCLE, color: Color.primary },
  {
    position: [4, 5],
    type: CellType.CIRCLE_WITH_TEXT,
    color: Color.yellow,
    text: "us",
  },

  { position: [1, 6], type: CellType.CIRCLE, color: Color.gray },
  { position: [2, 6], type: CellType.CIRCLE, color: Color.gray },
  { position: [3, 6], type: CellType.CIRCLE, color: Color.pink },
  { position: [4, 6], type: CellType.CIRCLE, color: Color.primary },
  { position: [5, 6], type: CellType.CIRCLE, color: Color.pink },
  { position: [6, 6], type: CellType.CIRCLE, color: Color.gray },

  { position: [1, 7], type: CellType.CIRCLE, color: Color.gray },
  { position: [2, 7], type: CellType.CIRCLE, color: Color.gray },
  { position: [3, 7], type: CellType.CIRCLE, color: Color.gray },
  { position: [6, 7], type: CellType.CIRCLE, color: Color.orange },

  {
    position: [1, 8],
    type: CellType.TEXT,
    color: Color.primary,
    text: "HI-ARC",
  },
  { position: [4, 8], type: CellType.CIRCLE, color: Color.gray },
  { position: [5, 8], type: CellType.CIRCLE, color: Color.orange },
  { position: [6, 8], type: CellType.CIRCLE, color: Color.gray },

  { position: [5, 9], type: CellType.CIRCLE, color: Color.pink },
  { position: [6, 9], type: CellType.CIRCLE, color: Color.gray },

  { position: [5, 10], type: CellType.CIRCLE, color: Color.gray },
  { position: [6, 10], type: CellType.CIRCLE, color: Color.pink },
  // { position: [1, 1], type: CellType.CIRCLE, color: Color.gray, delay: 1 },
  // { position: [3, 1], type: CellType.CIRCLE, color: Color.gray, delay: 2 },
  // { position: [5, 6], type: CellType.CIRCLE, color: Color.gray, delay: 3 },
  // { position: [10, 1], type: CellType.CIRCLE, color: Color.orange, delay: 4 },
  // { position: [6, 1], type: CellType.CIRCLE, color: Color.gray, delay: 5 },
  // { position: [10, 6], type: CellType.CIRCLE, color: Color.gray, delay: 6 },
  // { position: [1, 3], type: CellType.CIRCLE, color: Color.gray, delay: 7 },
  // { position: [9, 6], type: CellType.CIRCLE, color: Color.pink, delay: 8 },
  // { position: [5, 1], type: CellType.CIRCLE, color: Color.pink, delay: 9 },
  // { position: [1, 4], type: CellType.TEXT, color: Color.primary, delay: 10 },

  {
    position: [4, 7],
    type: CellType.BUTTON,
    color: Color.primary,
    buttonText: "학회 소개",
    index: 0,
    url: "introduce_hiarc",
  },
  {
    position: [4, 2],
    type: CellType.BUTTON,
    color: Color.primary,
    buttonText: "스터디",
    index: 1,
    url: "study",
  },
  {
    position: [1, 3],
    type: CellType.BUTTON,
    color: Color.primary,
    buttonText: "학회 활동",
    index: 2,
    url: "activity",
  },
  {
    position: [5, 5],
    type: CellType.BUTTON,
    color: Color.primary,
    buttonText: "수상 경력",
    index: 3,
    url: "award",
  },
];

export default MobileTopLayerGridData;
