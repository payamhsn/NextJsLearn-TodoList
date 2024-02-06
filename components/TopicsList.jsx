import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">t.title</h2>
          <div>t.description</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />

          <HiPencilAlt size={24} />
        </div>
      </div>
    </>
  );
}
