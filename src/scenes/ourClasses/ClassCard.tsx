import { ClassType } from "@/shared/type";

export default function ClassCard({ name, image, description }: ClassType) {
  return (
    <li className="relative mx-5 inline-block h-[350px] w-[450px]">
      <div className="absolute z-20 flex h-[320px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
        <p className="text-2xl">{name}</p>
        <p className="mx-auto mt-5 w-full">{description}</p>
      </div>
      <img className=" h-[320px] w-[450px]" src={image} alt={image} />
    </li>
  );
}
