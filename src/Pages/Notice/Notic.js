import React from 'react';
import { Link } from 'react-router-dom';
import Notice from './Notice';
import NoticeModal from './NoticeModal';

const Notic = ({ notice }) => {
Array.from(notice)
 console.log(notice);
    return (
        <section className="flex flex-col justify-center antialiased  text-gray-600 p-4">
            <div className="h-full">
                {/* <!-- Card --> */}
                <div className="max-w-2xl mx-auto bg-indigo-600 shadow-lg rounded-lg">
                    <div className="px-6 py-5">
                        <div className="flex items-start">

                            {/* <!-- Card content --> */}
                            <div className="flex-grow truncate">
                                {/* <!-- Card header --> */}
                                <div className="w-full sm:flex justify-between items-center mb-3">
                                    {/* <!-- Title --> */}
                                    <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1  sm:mb-0">{notice.Subject}</h2>
                                    {/* <!-- Notice issue date --> */}
                                    <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                                        <div className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">

                                            <span>{notice.date} </span>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Card body --> */}
                                <div className="flex items-end justify-between whitespace-normal">
                                    {/* <!-- Paragraph --> */}
                                    <div className="max-w-md text-indigo-100">
                                        <p>{notice.noticeBody}</p>
                                    </div>
                                    {/* <!-- More link --> */}
                                    <a className="flex-shrink-0 flex items-center justify-center text-indigo-600 h-10 " href="#0">
                                        {/* <span className="block font-bold"><span className="sr-only">Read more</span>X</span> */}
                                        <span className="block font-bold text-white text-xs">
                                            </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notic;