import styles from "./page.module.css";

export const metadata = {
  title: "Pagina principal"
}

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hola mundo</h1>
    </div>
  );
}
