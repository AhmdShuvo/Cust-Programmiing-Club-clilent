import React from 'react';

const NoticeModal = ({notice}) => {
if(!notice){
    return "loading"
}
   
    return (
       <>       
        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg"></h3>
            <p className="py-4">{notice.noticeBody}</p>
            <div className="modal-action">
             <a href="#" className="btn">Ok</a>
            </div>
          </div>
        </div>
        </>

    );
};

export default NoticeModal;