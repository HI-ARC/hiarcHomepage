import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HamburgerMenuIcon from "@/assets/icon/hamburger_menu.svg?react";
import Colors from "@/constants/ui/Colors";
import FontStyles from "@/constants/ui/FontStyles";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button`
  border: none;
  background: none;
  color: ${Colors.primary};
  transition: color 300ms;
  &:hover {
    color: #1d4ed8;
  }
  &:focus {
    outline: none;
  }
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: 100%;
  width: 10rem;
  background-color: #fff;
  border: 1px solid ${Colors.primary};
  border-radius: 0.375rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  transition: opacity 300ms ease-in-out;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
`;

const MenuList = styled.ul`
  padding: 0.5rem 0;
  margin: 0;
  list-style: none;
`;

const MenuItemButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  color: ${Colors.primary};
  ${FontStyles.body3Medium}
  font-weight: 600; /* Semi-bold */
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 200ms;
  &:hover {
    background-color: ${Colors.gray100};
  }
`;

const StyledHamburgerIcon = styled(HamburgerMenuIcon)`
  width: 2rem;
  height: 2rem;
`;

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

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu when clicking outside
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
    <Container ref={dropdownRef}>
      <ToggleButton onClick={toggleMenu}>
        <StyledHamburgerIcon />
      </ToggleButton>
      <DropdownMenu $isOpen={menuOpen}>
        <MenuList>
          {menuItems.map((item, index) => (
            <li key={index}>
              <MenuItemButton
                onClick={() => {
                  item.onClick();
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </MenuItemButton>
            </li>
          ))}
        </MenuList>
      </DropdownMenu>
    </Container>
  );
};

export default HamburgerButton;
