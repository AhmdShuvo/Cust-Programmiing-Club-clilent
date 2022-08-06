import React, { useEffect, useState } from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const Upload = () => {
    const [convertedText, setConvertedText] = useState("Type Your Text Here ");
    return (
        <div className='container'>
   <ReactQuill
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
        style={{minHeight: '300px'}}
      />
    </div>
    );
};

export default Upload;