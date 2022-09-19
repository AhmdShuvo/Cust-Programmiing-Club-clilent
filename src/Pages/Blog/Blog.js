
import React from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css"
import SingleBlog from './SingleBlog';
import { useEffect } from 'react';
import { useState } from 'react';

const Blog = () => {
   const [blogs, setBlogs] = useState([])
   useEffect(() => {





      fetch("https://desolate-headland-20264.herokuapp.com/blogs").then(res => res.json()).then(data => setBlogs(data))
   }, [])
   return (
      <div>


         {/* <Link to= "/texteditor">
               <button className="btn btn-circle btn-outline absolute right-10 btnTopPosition" title='Add a new blog'>
                  <i className="fa-solid fa-plus"></i>
               </button>
            </Link>

           <button className="btn btn-circle btn-outline absolute right-10 btnTopPosition" title='Add a new blog' /> */}


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
                     blogs.map(Blog => <SingleBlog
                        key={Blog._id}
                        blogs={Blog}
                     ></SingleBlog>)
                  }


               </div>
            </div>
         </section>
         {/* <!-- ====== Blog Section End --> */}
         <div class="flex flex-wrap justify-center mx-4">

            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
               <div class="max-w-[370px] mx-auto mb-10">
                  <div class="rounded overflow-hidden mb-8">
                     <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                        alt="imageg"
                        class="w-full"
                     />
                  </div>
                  <div>
                     <div class="flex items-center justify-between mb-5">
                        <div class="flex items-center flex-1">
                           <img
                              class="object-cover h-10 rounded-full"
                              src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                              alt="Avatar"
                           />
                           <div class="flex flex-col mx-2 ">
                              <a href="2" class="font-semibold  hover:underline text-white">
                                 Fajrian Aidil Pratama
                              </a>
                              <span class="mx-1 text-xs text-white">28 Sep 2020</span>
                           </div>
                        </div>
                     </div>
                     <h3>
                        <a
                           href="javascript"
                           class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-primary
                        "
                        >
                           Meet AutoManage, the best AI management tools
                        </a>
                     </h3>
                     <p class="text-base text-body-color text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                     </p>
                     <span
                        class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mt-5
                     "
                        style={{ "background": "#193d52" }}
                     >
                        Read more...
                     </span>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
};

export default Blog;