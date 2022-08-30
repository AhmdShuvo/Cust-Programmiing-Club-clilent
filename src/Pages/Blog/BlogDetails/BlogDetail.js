import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const {id}=useParams()
  

    const [blogs,setBlogs]=useState([])

    useEffect(()=>{

        fetch(`http://localhost:9000/blog/${id}`).then(res=>res.json()).then(data=>setBlogs(data))
     },[])
 
    return (
        <div>
            <div className="max-w-[370px] mx-auto my-6 mb-10">
                <h1>{blogs.heading}</h1>
            {
  
  <div dangerouslySetInnerHTML={{__html:blogs.blog}}></div>
}
    
            </div>
        </div>
    );
};

export default BlogDetail;