import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NoticeModal = () => {
    const { id } = useParams()

    const [notice, setnotice] = useState();
    console.log(notice);
    useEffect(() => {

        fetch(`https://desolate-headland-20264.herokuapp.com/notice/${id}`).then(res => res.json()).then(data => setnotice(data))
    }, [id])

    if(!notice){

        return "loading"
    }
    return (
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
            <div className="w-3/5 bg-white text-dark shadow-xl rounded-3xl my-5 p-5">
                <div className="card-body">
                    <h2 className="card-title">{notice.Subject}</h2>
                    <p>{notice.noticeBody}</p>
                  
                </div>
            </div>
        </div>

    );
};

export default NoticeModal;