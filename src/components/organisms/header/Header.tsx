import DesktopHeader from "@/components/molecules/header/DesktopHeader";
import TabletHeader from "../../molecules/header/TabletHeader";

const Header: React.FC = () => {
  return (
    <header className="w-full justify-center">
      <DesktopHeader />
      <TabletHeader />
    </header>
  );
};

export default Header;
