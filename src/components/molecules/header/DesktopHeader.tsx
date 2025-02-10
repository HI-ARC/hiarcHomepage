import { useNavigate } from "react-router-dom";
import HeaderMenuButton from "@/components/atoms/header/HeaderMenuButton";
import HiTingButton from "@/components/atoms/header/HiTingButton";

const DesktopHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex flex-col items-center justify-center w-full py-6">
      {/* 컨텐츠를 감싸는 박스 */}
      <div className="flex items-center justify-center w-full max-w-[1000px]">
        {/* 왼쪽: HI-ARC */}
        <HeaderMenuButton text="HI-ARC" onClick={() => navigate("/")} />

        {/* 오른쪽: 네비게이션 메뉴들 */}
        <nav className="flex space-x-6 ml-auto">
          <HeaderMenuButton
            text="학회소개"
            onClick={() => navigate("/introduce_hiarc")}
          />
          <HeaderMenuButton
            text="학회 활동"
            onClick={() => navigate("/activity")}
          />
          <HeaderMenuButton text="스터디" onClick={() => navigate("/study")} />
          <HeaderMenuButton
            text="수상경력"
            onClick={() => navigate("/award")}
          />
          <HiTingButton />
        </nav>
      </div>
    </div>
  );
};

export default DesktopHeader;
