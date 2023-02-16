import React from "react";
import { useState } from "react";
import { SelectedPage } from "@/shared/type";
import HomePage from "@/assets/HomePageText.png";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = { setSelectedPage: (value: SelectedPage) => void };

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div>
        {/* main header */}
        <div></div>
        {/* main header */}
        <div>
          {/* header */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
