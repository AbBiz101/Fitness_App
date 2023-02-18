import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/type";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

export default function ContactUS({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (isValid) {
      e.preventDefault();
    }
  };
  const inputClass =
    "w-full mt-5 rounded-lg px-5 py-3 placeholder-white border- bg-primary-300";
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUS)}
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
          className="md:w-3/5"
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            quaerat perferendis quo nemo dicta nobis veritatis illo pariatur
            laborum nulla harum consequatur repellendus assumenda consectetur,
            vel sequi. Nobis, sunt reiciendis.{" "}
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
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
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/f1156c610a679d7cb3f522152a42a98f"
              method="POST"
            >
              <input
                type="text"
                placeholder="NAME"
                className={`${inputClass}`}
                {...register("name", { maxLength: 50, required: true })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 50 char."}
                </p>
              )}

              <input
                type="email"
                placeholder="EMAIL"
                className={`${inputClass}`}
                {...register("email", {
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  required: true,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                placeholder="Message"
                className={`${inputClass}`}
                {...register("message", { maxLength: 600, required: true })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 600 char."}
                </p>
              )}
              <button
                type="submit"
                className="translate mt-5 rounded-lg bg-secondary-500 px-20 py-3 duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
