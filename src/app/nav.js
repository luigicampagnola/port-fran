import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between w-full p-4 bg-black bg-opacity-90">
      <div className="flex items-center">
        <Link href="/" className="text-lg font-bold text-white">
          Home
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/about" className="mr-4 text-white">
          About
        </Link>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
}
