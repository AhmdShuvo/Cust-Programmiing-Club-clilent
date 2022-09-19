import React from 'react';


const SingleBlog = ({ blogs }) => {
    const { blog } = blogs;

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto my-6 mb-10">
                {

                    <div dangerouslySetInnerHTML={{ __html: blog }}></div>
                }

            </div>
        </div>

    );
};

export default SingleBlog;