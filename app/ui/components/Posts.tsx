import Image from "next/image";
import Link from "next/link";

export default function Posts() {
  return (
    <div className="flex flex-col basis-[70%] gap-y-5">
      <article className="flex flex-col md:flex-row gap-y-4 md:gap-y-0">
        <Image
          src="/article-1.jpg"
          width={384}
          height={278}
          alt="Article name"
          className="rounded-md opacity-65 hover:cursor-pointer hover:opacity-100 transition duration-300 w-full"
        />
        <div className="flex flex-col justify-center px-0 md:px-6">
          <time className="text-neutral-600 font-bold">Mar 3, 2025</time>

          <h2 className="text-3xl font-bold mt-2 font-serif tracking-widest">
            Miso Soup
          </h2>

          <p className="mt-2 text-neutral-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat.
          </p>

          <Link href="#" className="text-red-600 mt-2">
            Read More ...
          </Link>
        </div>
      </article>
      <article className="flex flex-col md:flex-row gap-y-4 md:gap-y-0">
        <Image
          src="/article-2.jpg"
          width={384}
          height={278}
          alt="Article name"
          className="rounded-md opacity-65 hover:cursor-pointer hover:opacity-100 transition duration-300 w-full"
        />
        <div className="flex flex-col justify-center px-0 md:px-6">
          <time className="text-neutral-600 font-bold">Mar 3, 2025</time>

          <h2 className="text-3xl font-bold mt-2 font-serif tracking-widest">
            Tonkatsu
          </h2>

          <p className="mt-2 text-neutral-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat.
          </p>

          <Link href="#" className="text-red-600 mt-2">
            Read More ...
          </Link>
        </div>
      </article>
      <article className="flex flex-col md:flex-row gap-y-4 md:gap-y-0">
        <Image
          src="/article-2.jpg"
          width={384}
          height={278}
          alt="Article name"
          className="rounded-md opacity-65 hover:cursor-pointer hover:opacity-100 transition duration-300 w-full"
        />
        <div className="flex flex-col justify-center px-0 md:px-6">
          <time className="text-neutral-600 font-bold">Mar 3, 2025</time>

          <h2 className="text-3xl font-bold mt-2 font-serif tracking-widest">
            Tonkatsu
          </h2>

          <p className="mt-2 text-neutral-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat.
          </p>

          <Link href="#" className="text-red-600 mt-2">
            Read More ...
          </Link>
        </div>
      </article>
    </div>
  );
}
