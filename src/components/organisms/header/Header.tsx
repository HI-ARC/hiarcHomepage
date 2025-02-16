import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DesktopHeader from "@/components/molecules/header/DesktopHeader";
import TabletHeader from "@/components/molecules/header/TabletHeader";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Header: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer>
      {isDesktop ? <DesktopHeader /> : <TabletHeader />}
    </HeaderContainer>
  );
};

export default Header;
