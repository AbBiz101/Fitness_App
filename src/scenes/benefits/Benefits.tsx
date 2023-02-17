import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";
import ActionButton from "@/shared/ActionButton";
import { BenefitType, SelectedPage } from "@/shared/type";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

export default function Benefits({ setSelectedPage }: Props) {
  
  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos cumque quis, sint nobis mollitia laboriosam",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos cumque quis, sint nobis mollitia laboriosam",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos cumque quis, sint nobis mollitia laboriosam",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
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
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos cumque
            quis, sint nobis mollitia laboriosam tempora ullam et illo nam alias
            animi illum vitae aliquam odit dolorum obcaecati dignissimos
            possimus.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitCard
              icon={benefit.icon}
              title={benefit.title}
              key={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* graphics + description  */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            alt="benefits page"
            src={BenefitsPageGraphic}
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
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
                    hidden: { opacity: 0, x: 60 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500"> FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 },
              }} 
            >
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium error maiores accusamus est sit nostrum aliquid
                reprehenderit ex consectetur fugiat quidem quaerat excepturi
                modi suscipit, ipsa voluptas animi enim beatae!
              </p>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium error maiores accusamus est sit nostrum aliquid
                reprehenderit ex consectetur fugiat quidem quaerat excepturi
                modi suscipit, ipsa voluptas animi enim beatae!
              </p>
            </motion.div>
            <div className="relative mt-16 ">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
