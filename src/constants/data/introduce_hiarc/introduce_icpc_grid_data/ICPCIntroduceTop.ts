// src/constants/data/main_title/ICPCIntroduceTop.ts
import Color from "@/components/ui/Color";
import CellType from "@/enum/CellType";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const ICPCIntroduceTop: TopLayerGridItemData[] = [
  {
    position: [1, 1],
    type: CellType.LONG_BUTTON_WITH_ICON,
    backgroundColor: Color.primary,
    contentColor: Color.white,
    buttonText: "ICPC 신촌",
    websiteUrl: "https://icpc-sinchon.github.io/",
  },
];

export default ICPCIntroduceTop;
