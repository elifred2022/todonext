

"use client"

import { useRouter } from 'next/navigation';

/*export const metadata = {
  title: "A cerca de nosotros"
}*/ // hace problema con el use client tuve q desactivarlo

function About () {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor commodi nam, accusantium quibusdam aspernatur, quia minus quaerat facere nobis eaque praesentium deleniti totam vitae ea dolorem reprehenderit nihil? Error assumenda possimus deserunt optio aut beatae voluptatibus, et facere vel quod ab repudiandae animi perspiciatis aperiam! Ex ipsam quos atque facere expedita exercitationem distinctio id consectetur asperiores fugiat. Quia, animi praesentium! Recusandae veritatis, officiis perferendis iure accusamus, neque, fugiat sit expedita enim dolorem esse voluptatum consectetur voluptatibus odit doloremque unde! Quaerat a sit, sequi sed, soluta labore fugiat omnis ratione expedita rem cum. Velit nulla tempora id eius adipisci aliquam ullam.</p>
      <button className='bg-sky-400 px-3 py-2 rounded-md' onClick={()=> {
            alert("ejecutando")
            router.push('/')
      }}>click</button>
    </section>
  )
}

export default About
