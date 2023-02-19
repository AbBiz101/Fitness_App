import React from "react";
import { SelectedPage } from "./type";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUS)}
      href={`#${SelectedPage.ContactUS}`}
      className="hover:text:white rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500"
    >
      {children}
    </AnchorLink>
  );
}
