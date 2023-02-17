import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

export default function OurClasses({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="ourClasses" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUS)}
      ></motion.div>
    </section>
  );
}
