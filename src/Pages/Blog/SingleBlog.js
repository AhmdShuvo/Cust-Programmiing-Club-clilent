import React from 'react';
import { Link } from 'react-router-dom';


const SingleBlog = ({blogs}) => {
const {blog}=blogs;
   console.log(blogs);
    return (
       
                    
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
               <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                  
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
                                 <p  className="font-semibold  hover:underline text-white">
                                    {blogs.username}
                                 </p>
                                 <span className="mx-1 text-xs text-white">{blogs.email}</span>
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
                  </div>
               </div>
           
            {/*  */}
        </div>

    );
};

export default SingleBlog;