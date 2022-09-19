import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import NoticeModal from './NoticeModal';

const NoticeData = ({ n }) => {
    const { Subject, noticeBody, date, _id } = n

    return (
        <div>
            <div className="h-full">
                {/* <!-- Card --> */}
                <div className="max-w-2xl mx-auto  shadow-lg rounded-lg mb-6" style={{ backgroundColor: "#193d52" }}>
                    <div className="px-6 py-5">
                        <div className="flex items-start">

                            {/* <!-- Card content --> */}
                            <div className="flex-grow truncate">
                                {/* <!-- Card header --> */}
                                <div className="w-full sm:flex justify-between items-center mb-3">
                                    {/* <!-- Title --> */}
                                    <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 capitalize">
                                        {Subject}
                                    </h2>
                                    {/* <!-- Notice issue date --> */}
                                    <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                                        <div className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">

                                            <span>{date}</span>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Card body --> */}
                                <div className="flex items-end justify-between whitespace-normal">
                                    {/* <!-- Paragraph --> */}
                                 
                                    <Link to={`/notice/${_id}`} className="flex-shrink-0 flex items-center justify-center text-indigo-600 h-10 ">
                                        <label HtmlFor="my-modal-3" className="modal-button block font-bold text-white text-xs hover:text-white	cursor-pointer hover:uppercase" >Read more</label>

                                    </Link>

                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>


        </div>
    );
};

export default NoticeData;