import React, { useEffect, useState } from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useQuill } from 'react-quilljs';
import useAuth from '../../../hooks/useAuth';
import RedAlert from '../../Shared/RedAlert/RedAlert';
const Upload = () => {

  const {user}=useAuth()
  const [data,setData]=useState(null)
  const [heading,setheading]=useState('')
const [error,setError]=useState()
    const { quill, quillRef } = useQuill();
//    const parser=str=>{
//    
// 	var doc = parser.parseFromString(str, 'text/html');
// 	localStorage.setItem("str",doc.body)
//     console.log(doc.body);
//    }

    useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            // console.log('Text change!');
            // console.log(quill.getText()); // Get text only
            // console.log(quill.getContents()); // Get delta contents
            // console.log(quill.root.innerHTML); // Get innerHTML using quill
            setData(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
          });
        }
      }, [quill]);



     const handlechange=e=>{
      setheading(e.target.value);
      console.log(e.target.value);

      }
    //   parser(data)
    const handleSubmit=e=>{
      e.preventDefault()

      if (data==null) {
      
       setError("Please Write something in blog")
       return
      }
      else{
const formData=new FormData()

      //  const BlogData={
      //   data
      //  }
      formData.append('blog', data)
    formData.append("heading" ,heading);
    formData.append("username",user.displayName);
    formData.append("email",user.email);

       fetch("https://desolate-headland-20264.herokuapp.com/blogs", {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: formData
        }).then(res=>console.log(res))
        
        .catch((err=>console.log(err)))
        
      
    }
    alert("Your Blog Posted Successfully")


   setData('')
  }

  
    return (
        <div className='container bg-zinc-800  p-5 shadow-2xl'>
          
  <form onSubmit={handleSubmit} action="">

    <div >
      <input style={{width:"40%",margin:"20px",textAlign:"center",backgroundColor:'inherit',border:'1px solid white',padding:"3px"}} placeholder='heading' onChange={handlechange}  name='blogtitle'  type="text" />
    </div>
  {error&& <RedAlert
  message={error}
  ></RedAlert>}
  <div >
      <div aria-required ref={quillRef} />
    </div>

    <button style={{float:'right'}} className='btn btn-wide my-10' type="submit">Post Your Blog</button>
  </form>


    </div>



    );
};

export default Upload;