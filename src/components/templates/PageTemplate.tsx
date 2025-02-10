import React, { ReactNode } from "react";
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";

interface PageTemplateProps {
  children: ReactNode;
  align?: "center" | "top"; // 정렬 옵션 추가
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  align = "center",
}) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 헤더 (가운데 정렬) */}
      <div className="w-full flex justify-center">
        <Header />
      </div>

      {/* 메인 콘텐츠 (정렬 방식 결정) */}
      <main
        className={`
          flex
          flex-col
          flex-grow
          self-center
          w-full
          max-w-[1000px]
          px-4
          ${align === "center" ? "items-center justify-center" : "items-start justify-start"}
        `}
      >
        {children}
      </main>

      {/* 푸터 (가운데 정렬) */}
      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default PageTemplate;
