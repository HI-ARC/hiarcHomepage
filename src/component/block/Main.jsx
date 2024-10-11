import styled from "styled-components";
import newHomeImg from "./../../assets/newHome.png";

const MainImageWrapper = styled.div`
  max-width: 800px; /* 최대 너비를 1140px로 설정 */
  padding: 0 20px; /* 좌우에 약간의 패딩을 추가해줌 */
  box-sizing: border-box; /* padding을 포함한 너비 계산 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainImage = styled.img`
  width: 100%; /* 너비를 100%로 설정 */
  height: auto; /* 비율에 맞춰 높이를 자동으로 설정 */
`;

const Main = () => {
  return (
    <MainImageWrapper >
      <MainImage src={newHomeImg} alt="Main Image" />
    </MainImageWrapper >
  );
};

export default Main;