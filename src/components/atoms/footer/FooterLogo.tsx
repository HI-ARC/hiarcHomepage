import HiarcLogo from "../../../assets/image/hiarc_logo.png";
import AssetImage from "../image/AssetImage";

const FooterLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* AssetImage 사용 */}
      <AssetImage
        src={HiarcLogo}
        minWidth={40}
        maxWidth={120}
        height="w-14 h-14"
      />
      <div className="flex flex-col gap-1">
        <div className="text-base text-primary tracking-tighter subhead2SemiBold whitespace-nowrap">
          HI-ARC 하이아크
        </div>
        <p className="text-primary captionRegular whitespace-nowrap">
          홍익대학교 컴퓨터공학과 알고리즘 학회
        </p>
      </div>
    </div>
  );
};

export default FooterLogo;
