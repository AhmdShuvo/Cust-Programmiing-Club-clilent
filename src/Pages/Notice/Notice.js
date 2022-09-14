import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Notic from './Notic';

const Notice = () => {

    const [notices,setNotices]=useState([])

    useEffect(()=>{
        fetch("https://desolate-headland-20264.herokuapp.com/notice").then(res=>res.json()).then(data=>setNotices(data.reverse()))
    },[])
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
                <div className="h-full">
                    {/* <!-- Card --> */}
                    <div className="max-w-2xl mx-auto  shadow-lg rounded-lg" style={{ backgroundColor: "#193d52" }}>
                       {
                        notices.map(notice=><Notic
                        key={notice._id}
                        notice={notice}
                        ></Notic>)
                       }
                    </div>
                </div>
            </section>
    



        </div>
    );
};

export default Notice;