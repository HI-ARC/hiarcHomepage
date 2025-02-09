import FooterContactText from "@/components/atoms/footer/FooterContactText";
import React from "react";

const FooterContactInfo: React.FC = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col items-end">
        <FooterContactText text="instagram" />
        <FooterContactText text="email" />
        <FooterContactText text="kakao" />
      </div>
      <div className="flex flex-col items-end">
        <FooterContactText text="|" />
        <FooterContactText text="|" />
        <FooterContactText text="|" />
      </div>
      <div className="flex flex-col items-start">
        <FooterContactText text="@hi.arc.official" />
        <FooterContactText text="hiarc.official@gmail.com" />
        <FooterContactText text="@hi-arc" />
      </div>
    </div>
  );
};

export default FooterContactInfo;
