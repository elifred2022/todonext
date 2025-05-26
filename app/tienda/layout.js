import Link from "next/link";

export const metadata = {
  title: "Mi tienda con nextjs",
  description: "Esta es la paguna principal de tienda",
  keywords: "tienda, online, ecomerce",
};

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
