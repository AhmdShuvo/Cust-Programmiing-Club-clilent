import React from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css"

const Blog = () => {
   return (
      <div>
         {/* <h1 className='text-center text-4xl'>BLOGS</h1> */}
         <div className='sticky top-0 '>


            <Link to= "/texteditor">
               <button className="btn btn-circle btn-outline absolute right-10 btnTopPosition" title='Add a new blog'>
                  <i className="fa-solid fa-plus"></i>
               </button>
            </Link>

           <button className="btn btn-circle btn-outline absolute right-10 btnTopPosition" title='Add a new blog'>

           
               <i className="fa-solid fa-plus"></i>
            </button>
         </div>

         {/* <!-- ====== Blog Section Start --> */}
         <section className="pt-20 lg:pt-[40px] pb-10 lg:pb-20">
            <div className="container">
               <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full px-4">
                     <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        <span className="font-semibold text-lg  mb-2 block text-white">
                           Our Blogs
                        </span>
                        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                           Our Recent News
                        </h2>
                        <p className="text-base text-white">
                           There are many variations of passages of Lorem Ipsum available
                           but the majority have suffered alteration in some form.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Dec 22, 2023
                           </span>
                           {/* <h3></h3> */}
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 Meet AutoManage, the best AI management tools
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Mar 15, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 How to earn more money as a wellness coach
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                     <div className="max-w-[370px] mx-auto mb-10">
                        <div className="rounded overflow-hidden mb-8">
                           <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                              alt=""
                              className="w-full"
                           />
                        </div>
                        <div>
                           <span
                              className="
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     bg-cyan-600	
                     "
                           >
                              Jan 05, 2023
                           </span>
                           <h3>
                              <a
                                 href="f"
                                 className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-cyan-300
                        "
                              >
                                 The no-fuss guide to upselling and cross selling
                              </a>
                           </h3>
                           <p className="text-base text-white">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- ====== Blog Section End --> */}

      </div>
   );
};

export default Blog;