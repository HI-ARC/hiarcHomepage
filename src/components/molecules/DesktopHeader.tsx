import { useNavigate } from "react-router-dom";
import HeaderMenuButton from "@/components/atoms/header/HeaderMenuButton";
import styled from "styled-components";

const DesktopHeaderContainer = styled.div`
  display: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1.5rem;
  margin-left: auto;
`;

const DesktopHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <DesktopHeaderContainer>
      <HeaderContent>
        <HeaderMenuButton text="HI-ARC" onClick={() => navigate("/")} />
        <Navigation>
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
          <HeaderMenuButton
            text="하이팅"
            onClick={() =>
              (window.location.href = "https://www.hi-rating.com")
            }
          />
        </Navigation>
      </HeaderContent>
    </DesktopHeaderContainer>
  );
};

export default DesktopHeader;
