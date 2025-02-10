import React, { useState, useEffect, useRef } from "react";
import HamburgerMenuIcon from "@/assets/icon/hamburger_menu.svg?react";
import { useNavigate } from "react-router-dom";

const HamburgerButton: React.FC = () => {
  const navigate = useNavigate();
  const menuItems = [
    { label: "홈", onClick: () => navigate("/") },
    { label: "학회소개", onClick: () => navigate("/introduce_hiarc") },
    { label: "학회 활동", onClick: () => navigate("/activity") },
    { label: "스터디", onClick: () => navigate("/study") },
    { label: "수상경력", onClick: () => navigate("/award") },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 메뉴 토글 함수
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // 외부 클릭 감지 후 메뉴 닫기
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
    <div className="relative flex items-center" ref={dropdownRef}>
      {/* 햄버거 버튼 */}
      <button
        onClick={toggleMenu}
        className={`
          text-primary
          transition 
          duration-300 
          hover:text-blue-700 
          focus:outline-none
        `}
      >
        <HamburgerMenuIcon className="w-8 h-8" />
      </button>

      {/* 드롭다운 메뉴 (페이드인/아웃 적용) */}
      <div
        className={`
          absolute
          right-0 
          top-full 
          w-40 
          bg-white 
          border 
          border-primary
          rounded-md 
          shadow-lg 
          z-50
          transition-opacity duration-300 ease-in-out
          ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-100 pointer-events-none"}
        `}
      >
        <ul className="py-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  item.onClick();
                  setMenuOpen(false); // 메뉴 클릭 시 닫힘
                }}
                className="block w-full text-left  px-4 py-2 text-primary subhead2SemiBold hover:bg-gray-100 transition duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerButton;
