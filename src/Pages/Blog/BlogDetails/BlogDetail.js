import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams()


    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        fetch(`https://desolate-headland-20264.herokuapp.com/blog/${id}`).then(res => res.json()).then(data => setBlogs(data))
    }, [id])

    return (
        <div>
            <div className="container mx-28 my-6 mb-10">
                <h1>{blogs.heading}</h1>
                {

                    <div dangerouslySetInnerHTML={{ __html: blogs.blog }}></div>
                }

            </div>
        </div>
    );
};

export default BlogDetail;