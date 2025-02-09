interface BottomLayerGridItemData {
  position: [number, number]; // [gridColumn, gridRow]
  type: string;
  direction: any; // 구체적인 타입이 있다면 수정하세요.
  backgroundColor: string;
  index?: number;
  sequence?: number;
  delay?: number;
}

export default BottomLayerGridItemData;
