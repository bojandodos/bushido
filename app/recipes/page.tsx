import InfoBoxes from "../ui/components/InfoBoxes";
import Posts from "../ui/components/Posts";
import Sidebar from "../ui/components/Sidebar";

export default function Recipes() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#313131] to-[#0a0a0a]">
        <div className="pt-38">
          <h1 className="text-center text-3xl md:text-5xl mb-10 font-serif tracking-wider">
            Our Recipes
          </h1>
          <InfoBoxes />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto mt-16 px-4 xl:px-0 gap-8">
        <Posts />
        <Sidebar />
      </section>
    </>
  );
}
