import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>Pagina no encontrada</h1>
      <Link href={"/"}>Volver</Link>
    </section>
  );
}
