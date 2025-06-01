import React from 'react'
import PostPage from '../page'
import { Suspense } from 'react'

async function loadPosts(id) {
  const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data

}

async function Page({params}) {

  const post = await loadPosts(params.postsId)
   
  return (
    <div>
      
      <h1>{post.id} {post.title} </h1>
      <p>{post.body} </p>
      <hr />
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>Cargando publicaciones...</div>} >
         <PostPage/>
      </Suspense>
     
    </div>
  )
}

export default Page
