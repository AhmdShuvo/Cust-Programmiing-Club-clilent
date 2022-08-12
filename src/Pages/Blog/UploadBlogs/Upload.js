import React, { useEffect, useState } from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useQuill } from 'react-quilljs';
const Upload = () => {
  const [data,setData]=useState({})
const [document,setDocument]=useState()
    const { quill, quillRef } = useQuill();
//    const parser=str=>{
//    
// 	var doc = parser.parseFromString(str, 'text/html');
// 	localStorage.setItem("str",doc.body)
//     console.log(doc.body);
//    }
console.log(data)
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

      

    //   parser(data)

    const parser =new DOMParser();
  
    return (
        <div className='container'>
   <div >
      <div ref={quillRef} />
    </div>

{
  
  <div dangerouslySetInnerHTML={{__html:data}}></div>
}
    
    </div>



    );
};

export default Upload;