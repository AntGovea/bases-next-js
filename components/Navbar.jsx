import Link from "next/link";
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar py-5">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold"> Next.JS Curso</h1>
      </Link>
      <ul className="navbar__list ">
        <li className="navbar__list__item">
          <Link className="Link" href={"/"}>
            Home
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link className="Link" href={"/about"}>
            About
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link className="Link" href={"/tienda"}>
            Tienda
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link className="Link" href={"/posts"}>
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
