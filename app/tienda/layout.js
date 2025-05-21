import Link from "next/link";

function TeindaLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Seccion tienda</h1>
        <ul>
          <li>
            <Link href={"/tienda/categorias/computadoras"}>Computadoras</Link>
          </li>
          <li>
            <Link href={"/tienda/categorias/celulares"}>Celulares</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default TeindaLayout;
