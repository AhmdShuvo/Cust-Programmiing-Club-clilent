
import React from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css"
import SingleBlog from './SingleBlog';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Blog = () => {
   const [blogs,setBlogs]=useState([])
   const{approved}=useAuth()

   // console.log(approved);
   console.log(blogs.heading);
   useEffect(()=>{



      
       
      fetch("https://desolate-headland-20264.herokuapp.com/blogs").then(res=>res.json()).then(data=>setBlogs(data))
   },[])

   
   return (
      <div>


         {/* <h1 className='text-center text-4xl'>BLOGS</h1> */}
         <div className='sticky top-0 '>
           <Link to="/blogs/upload">  <button className="btn btn-circle btn-outline absolute right-10 btnTopPosition" title='Add a new blog'>
               <i className="fa-solid fa-plus"></i>
            </button></Link>
         </div>

         {/* <!-- ====== Blog Section Start --> */}
         <section className="pt-20 lg:pt-[40px] pb-10 lg:pb-20">
            <div className="container">
               <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full px-4">
                     <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        <span className="font-semibold text-lg  mb-2 block ">
                           Our Blogs
                        </span>
                        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] mb-4">
                           Our Recent News
                        </h2>
                        <p className="text-base ">
                           There are many variations of passages of Lorem Ipsum available
                           but the majority have suffered alteration in some form.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-wrap -mx-4">
                    
                    {
                     blogs.map(Blog=><SingleBlog
                      key={Blog._id}
                      blogs={Blog}
                     ></SingleBlog>)
                    }
                    
          
               </div>
            </div>
         </section>
         {/* <!-- ====== Blog Section End --> */}
         <div className="flex flex-wrap justify-center mx-4">
    
         </div>

      </div>
   );
};

export default Blog;