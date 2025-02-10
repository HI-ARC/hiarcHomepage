import React from "react";

interface FooterContactTextProps {
  text: string;
}

const FooterContactText: React.FC<FooterContactTextProps> = ({ text }) => {
  return <div className=" text-primary captionRegular ">{text}</div>;
};

export default FooterContactText;
