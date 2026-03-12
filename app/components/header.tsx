import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">@ruudra</Link>
      </div>
      <nav>
        <div>
          <Link href="/index">Index</Link>
        </div>
        <div>
          <Link href="/work">Work</Link>
        </div>
        <div>
          <Link href="/notes">Notes</Link>
        </div>
        <div>
          <Link href="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
}
