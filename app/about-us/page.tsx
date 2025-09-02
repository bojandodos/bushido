import InfoBoxes from "../ui/components/InfoBoxes";
import About from "../ui/components/AboutUs";
import Sidebar from "../ui/components/Sidebar";

export default function AboutUs() {
  return (
    <section>
      <div className="pt-38 bg-gradient-to-b from-[#313131] to-[#0a0a0a]">
        <h1 className="text-center text-3xl md:text-5xl mb-10 font-serif tracking-wider">
          About us
        </h1>
        <InfoBoxes />
      </div>
      <section className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto mt-16 px-4 xl:px-0 gap-8">
        <About></About>
        <Sidebar />
      </section>
    </section>
  );
}
