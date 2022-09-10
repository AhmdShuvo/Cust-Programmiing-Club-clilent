import React from 'react';
import { Link } from 'react-router-dom';


const SingleBlog = ({blogs}) => {
const {blog}=blogs;
   console.log(blogs._id);
    return (
       
                    
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
               <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                     <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                        alt="imageg"
                        className="w-full"
                     />
                  </div>
                  <div>
                     <div className="flex items-center justify-between mb-5">
                           <div className="flex items-center flex-1">
                              <img
                                 className="object-cover h-10 rounded-full"
                                 src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                                 alt="Avatar"
                              />
                              <div className="flex flex-col mx-2 ">
                                 <a href="2" className="font-semibold  hover:underline text-white">
                                    {blogs.username}
                                 </a>
                                 <span className="mx-1 text-xs text-white">28 Sep 2020</span>
                              </div>
                           </div>
                        </div>
                     <h3>
                        <Link
                        to={`blog/${blogs._id}`}
                           href="javascript"
                           className="
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
                          {blogs.heading}
                        </Link >
                     </h3>
                     {/* <p className="text-base text-body-color text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                     </p>
                     <span
                        className="
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
                     style={{"background":"#193d52"}}
                     >
                        Read more...
                     </span> */}
                  </div>
               </div>
           
            {/*  */}
        </div>

    );
};

export default SingleBlog;