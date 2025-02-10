interface TopLayerGridItemData {
  position: [number, number]; // [gridColumn, gridRow]
  type: string; // CellType의 값 ("CIRCLE", "CIRCLE_WITH_TEXT", 등)
  color: string;
  text?: string;
  index?: number;
  delay?: number;
  buttonText?: string;
  url?: string;
}

export default TopLayerGridItemData;
