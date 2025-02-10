import FooterLogo from "@/components/atoms/footer/FooterLogo";
import FooterContactInfo from "@/components/molecules/footer/FooterContactInfo";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#fffdf0] py-4 pt-15 mt-[40px] mb-[20px]">
      <div className="w-full max-w-[1000px] px-6 flex flex-col  sm:flex-row justify-between items-center gap-10">
        {/* 왼쪽: 로고 */}
        <FooterLogo />
        {/* 오른쪽: 연락처 정보 */}
        <FooterContactInfo />
      </div>
    </div>
  );
};

export default Footer;
