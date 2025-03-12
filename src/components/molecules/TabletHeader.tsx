import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerButton from "@/components/atoms/header/HamburgerButton";
import HeaderMenuButton from "@/components/atoms/header/HeaderMenuButton";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem 0;
`;

const LeftContainer = styled.div`
  flex-grow: 1;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

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
    <HeaderContainer ref={dropdownRef}>
      <LeftContainer>
        <HeaderMenuButton text="HI-ARC" onClick={() => navigate("/")} />
      </LeftContainer>
      <RightContainer>
        <HeaderMenuButton
          text="하이팅"
          onClick={() =>
            // (window.location.href = "https://www.hi-rating.com")
            alert("하이팅 페이지는 준비 중입니다!")
          }
        />
        <HamburgerButton />
      </RightContainer>
    </HeaderContainer>
  );
};

export default TabletHeader;
