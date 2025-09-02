import Logo from "./Logo";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto relative px-4 py-6">
      <Logo />

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-x-6">
          <li>
            <Link
              href="/"
              className="text-lg hover:text-red-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/recipes"
              className="text-lg hover:text-red-500 transition duration-300"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-lg hover:text-red-500 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-lg hover:text-red-500 transition duration-300"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu (Client logic) */}
      <MobileMenu />
    </header>
  );
}
