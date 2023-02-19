import { useState } from "react";
import Logo from "@/assets/Logo.png";
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/type";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) {
  const flexBetween = "flex items-center justify-between";
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const menu = ["Home", "Benefits", "Our Classes", "Contact Us"];
  return (
    <nav>
      <div
        className={`${!isTopOfPage && "bg-primary-100 drop-shadow"} ${flexBetween} fixed top-0 z-40 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side  */}
            <img alt="logo" src={Logo} />
            {/* right side  */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full gap-16`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {menu.map((item) => (
                    <Link
                      page={item}
                      key={item}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
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

            {!isAboveMediumScreen && menuToggled && (
              <div className=" fixed right-0 bottom-0 z-40 h-full w-[250px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                  <button onClick={() => setMenuToggled(!menuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </button>
                </div>
                <div className="ml-[30%] flex flex-col gap-10 text-2xl">
                  {menu.map((item) => (
                    <Link
                      page={item}
                      key={item}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
