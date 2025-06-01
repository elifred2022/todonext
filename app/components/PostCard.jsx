"use client";

import Link from "next/link";

function PostCard({post}) {
  return (
    <div>
      {
        
            <div className="bg-grey-950 p-10">
              <Link href={`/posts/${post.id}`} >
              
              <h3 className="text-xl font-bold mb-4">{post.id}. {post.title} </h3></Link>
                
                <p className="texslate-300">{post.body} </p>
                <button onClick={()=> {alert("click funciona")} } >click</button>
            </div>
      
      }
    </div>
  )
}

export default PostCard
