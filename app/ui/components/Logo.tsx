"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/water-circle.png" width={60} height={60} alt="Logo" />
      {isHomePage ? (
        <h1 className="text-xl font-bold">BushidoBites</h1>
      ) : (
        <span className="text-xl font-bold">BushidoBites</span>
      )}
    </Link>
  );
}
