import { useState } from "react";
import Navbar from "@/scenes/navbar/Navbar";
import {SelectedPage} from "@/shared/type"

type Props = {};
export default function App({}: Props) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}
