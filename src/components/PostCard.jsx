import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

const PostCard = ({post}) => {
    if(!post) return null;
    console.log("File ID:", post.featuredImage);
    console.log("Preview URL:", appwriteService.getFileView(post.featuredImage)
);

  return (
    <Link to={`/post/${post.$id}`}>
       <div className='w-full bg-gray-100 rounded-xl p-4'>
           <div className='w-full justify-center mb-4'>
               <img 
                src={appwriteService.getFileView(post.featuredImage)}
                alt={post.title}
                className='rounded-xl' />

           </div>
           <h2 className='text-xl font-bold'>{post.title}</h2>
       </div>
    </Link>
  )
}
// const PostCard = ({$id, title, featuredImage}) => {
//   console.log({$id, title, featuredImage});
  
//   return (
//     <Link to={`/post/${$id}`}>
//        <div className='w-full bg-gray-100 rounded-xl p-4'>
//            <div className='w-full justify-center mb-4'>
//                <img 
//                 src={appwriteService.getFilePreview(featuredImage)}
//                 alt={title}
//                 className='rounded-xl' />

//            </div>
//            <h2 className='text-xl font-bold'>{title}</h2>
//        </div>
//     </Link>
//   )
// }
  

export default PostCard
