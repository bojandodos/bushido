import { BsCalendar4Week } from "react-icons/bs";
import { LuCookingPot } from "react-icons/lu";
import { BsPersonVideo3 } from "react-icons/bs";

export default function InfoBoxes() {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto grid  md:grid-cols-3 bg-[#1c1c1c] rounded-md py-5 grid-cols-1">
        <div className="flex justify-center items-center py-4">
          <BsCalendar4Week className="text-3xl mb-2 text-red-500" />
          <span className="ml-3">Weekly Special Recipes</span>
        </div>
        <div className="flex justify-center items-center border-gray-950 md:border-l md:border-r py-4 border-b border-t md:border-b-0 md:border-t-0">
          <LuCookingPot className="text-4xl mb-2 text-red-500" />
          <span className="ml-3">Master Japanese cooking</span>
        </div>
        <div className="flex justify-center items-center py-4">
          <BsPersonVideo3 className="text-3xl mb-2 text-red-500" />
          <span className="ml-3">Cooking with guidance</span>
        </div>
      </div>
    </section>
  );
}
