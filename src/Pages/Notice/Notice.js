import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NoticeData from './NoticeData';
// import NoticeModal from './NoticeModal';

const Notice = () => {
    const [notices, setNotices] = useState([])
    useEffect(() => {
        fetch("https://desolate-headland-20264.herokuapp.com/notice?fbclid=IwAR0k2suNoR36ZE3k1U741J26njG_VLIIIPH6ob4T6Q4bASfVoykDmxDuo0s")
            .then(res => res.json())
            .then(data => setNotices(data))
    }, [])
    // console.log(notices[1].noticeBody);

    return (
        <div>
            <section className="flex flex-col justify-center antialiased  text-gray-600 p-4">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <span className="font-semibold text-lg  mb-2 block text-white">
                                Our Notices
                            </span>
                            <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                                Recent Notice
                            </h2>
                        </div>
                    </div>
                </div>
                
            </section>
            
            <section className="flex flex-col justify-center antialiased  text-gray-600 p-4">
                {
                    notices.map(n =><>
                         <NoticeData n={n}></NoticeData></>

                    )
                }
            </section>
       


        </div >
    );
};

export default Notice;