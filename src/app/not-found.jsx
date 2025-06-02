import React from 'react'
import Link from 'next/link';

function Notfound() {
  return (
    <section>
      <h1>404</h1>
      <p>Pagina no enontrada</p>
      <Link href={"/"} >Volver</Link>
    </section>
  )
}

export default Notfound;

