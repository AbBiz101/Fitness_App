import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/type";
import HomePage from "@/assets/HomePageText.png";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import SponsorForbes from "@/assets/SponsorForbes.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
            }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="HomePage" src={HomePage} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique earum dolorem cum tempore enim nemo nostrum tenetur,
              deserunt exercitationem quasi impedit. Consequatur officiis unde,
              temporibus iusto odio quo earum dolorem.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUS)}
              href={`#${SelectedPage.ContactUS}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* big image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="HomePageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {/* ad */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="SponsorRedBull" src={SponsorRedBull} />
              <img alt="SponsorFortune" src={SponsorFortune} />
              <img alt="SponsorForbes" src={SponsorForbes} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
