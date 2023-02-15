import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/type";
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCase = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
      href={`#${lowerCase}`}
      onClick={() => setSelectedPage(lowerCase)}
      className={`${
        selectedPage === lowerCase ? "text-primary-500" : ""
      } translate duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
}
