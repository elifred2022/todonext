import React from 'react'
import Link from "next/link";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className='navbar py-5'>

        <li>
              <Link href="/"> <h1 className='text-3xl font-bold'>Nextjs curso</h1></Link>
            </li>
           <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/tienda">Tienda</Link>
            </li>
            <li>
              <Link href={"/posts"}>Posts</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
