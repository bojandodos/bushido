import Image from "next/image";
import InfoBoxes from "./ui/components/InfoBoxes";
import Posts from "./ui/components/Posts";
import Sidebar from "./ui/components/Sidebar";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#313131] to-[#0a0a0a] flex justify-center items-center">
        <div className="w-full md:max-w-6xl sm:max-w-lg max-w-3xs relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[1000px]">
          <Image
            src="/hero-image.png"
            fill
            className="object-contain"
            priority
            alt="Logo"
          />
        </div>
      </section>
      <InfoBoxes />
      <section className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto mt-16 px-4 xl:px-0 gap-8">
        <Posts />
        <Sidebar />
      </section>
    </>
  );
}
