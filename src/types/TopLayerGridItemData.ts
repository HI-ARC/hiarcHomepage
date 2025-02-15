interface TopLayerGridItemData {
  position: [number, number]; // [gridColumn, gridRow]
  type: string; // CellType의 값 ("CIRCLE", "CIRCLE_WITH_TEXT", 등)
  backgroundColor: string;
  contentColor?: string;
  text?: string;
  index?: number;
  delay?: number;
  buttonText?: string;
  url?: string;
  websiteUrl?: string;
}

export default TopLayerGridItemData;
