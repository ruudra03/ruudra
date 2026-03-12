import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div>
        <h1>@ruudra</h1>
      </div>
      <div>
        <Link href="/index">Index</Link>
        <Link href="/work">Work</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  );
}
