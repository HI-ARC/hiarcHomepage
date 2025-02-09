import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// 타입스크립트에서는 path 모듈을 사용할 때 명시적인 타입이 필요할 수 있음
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // __dirname은 Node.js에서 기본적으로 지원됨
    },
  },
});
