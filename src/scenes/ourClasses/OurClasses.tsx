import HText from "@/shared/HText";
import ClassCard from "./ClassCard";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { SelectedPage, ClassType } from "@/shared/type";

type Props = { setSelectedPage: (value: SelectedPage) => void };

export default function OurClasses({ setSelectedPage }: Props) {
  const allClasses: Array<ClassType> = [
    {
      name: "Weight Training Classes",
      image: image1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos, iste laboriosam laborum ipsam cupiditate atque quae in, quidem accusantium totam fugiat ut culpa, dolorem veniam esse velit minima accusamus.",
    },
    {
      name: "Yoga Classes",
      image: image2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos, iste laboriosam laborum ipsam cupiditate atque quae in, quidem accusantium totam fugiat ut culpa, dolorem veniam esse velit minima accusamus.",
    },
    {
      name: "Ab Core Classes",
      image: image3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos, iste laboriosam laborum ipsam cupiditate atque quae in, quidem accusantium totam fugiat ut culpa, dolorem veniam esse velit minima accusamus.",
    },
    {
      name: "Adventure Classes",
      image: image4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos, iste laboriosam laborum ipsam cupiditate atque quae in, quidem accusantium totam fugiat ut culpa, dolorem veniam esse velit minima accusamus.",
    },
    {
      name: "Fitness Classes",
      image: image5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos, iste laboriosam laborum ipsam cupiditate atque quae in, quidem accusantium totam fugiat ut culpa, dolorem veniam esse velit minima accusamus.",
    },
    {
      name: "Training Classes",
      image: image6,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos, iste laboriosam laborum ipsam cupiditate atque quae in, quidem accusantium totam fugiat ut culpa, dolorem veniam esse velit minima accusamus.",
    },
  ];
  return (
    <section id="ourclasses" className="z-5 w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
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
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consequatur odio, modi rem, ea, totam esse vel iure sed qui nisi
              quas dolore quaerat rerum eum natus ut doloribus! Iste!
            </p>
          </div>
          <div className="h-[350px} mt-10 w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[200px] whitespace-nowrap">
              {allClasses.map((item: ClassType) => (
                <ClassCard
                  key={item.name}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
