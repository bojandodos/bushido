import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="w-full sm:basis-[30%]  rounded-md flex flex-col">
        <Image
          src="/pdf-download.jpg"
          width={386}
          height={394}
          alt="Article name"
          className="rounded-md opacity-65 hover:cursor-pointer hover:opacity-100 transition duration-300 w-full md:w-96"
        />
        <div className="lg:px-5 flex flex-col items-start lg:items-center">
          <p className=" text-neutral-500 mb-4 mt-4">
            Enjoy this free collection of easy and delicious recipes, created to
            inspire your everyday cooking.
          </p>
          <Link
            href="/download-file.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 text-white px-4 py-2 rounded mb-4"
          >
            Download PDF
          </Link>
        </div>
      </div>
    </>
  );
}
