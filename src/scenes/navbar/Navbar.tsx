import Logo from "@/assets/Logo.png";
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({ selectedPage, setSelectedPage }: Props) {
  const [menuToggled, setMenuToggled] = useState<boolean>(true);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side  */}
            <img alt="logo" src={Logo} />
            {/* right side  */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full gap-16`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMenuToggled(!menuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}

            {!isAboveMediumScreen && menuToggled && <div className="fixed right-0 bottom-0 z-40 h-full w-[300px]"> </div>}
          </div>
        </div>
      </div>
    </nav>
  );
}
