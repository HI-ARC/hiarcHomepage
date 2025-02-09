import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerButton from "@/components/atoms/header/HamburgerButton";
import HeaderMenuButton from "@/components/atoms/header/HeaderMenuButton";
import HiTingButton from "@/components/atoms/header/HiTingButton";

const TabletHeader: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="flex md:hidden items-center w-full max-w-[1000px] mx-auto py-6 justify-between">
      {/* 왼쪽: HI-ARC (최대 너비를 차지하도록 flex-grow 적용) */}
      <div className="flex-grow">
        <HeaderMenuButton text="HI-ARC" onClick={() => navigate("/")} />
      </div>

      {/* 오른쪽: 하이팅 버튼 & 햄버거 메뉴 */}
      <div className="flex items-center space-x-4">
        <HiTingButton />
        <HamburgerButton />
      </div>
    </div>
  );
};

export default TabletHeader;
