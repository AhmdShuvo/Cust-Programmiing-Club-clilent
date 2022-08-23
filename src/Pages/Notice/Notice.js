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
                            <p className="text-base text-white">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
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
            {/* <NoticeModal></NoticeModal> */}


            {/* <!-- Put this part before </body> tag-- > */}
            {/* <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum dignissimos voluptatum alias hic vitae? Totam, vitae dolorum atque soluta nesciunt sequi commodi tempora quo iste sint nobis laudantium! Amet sequi nam nemo consequatur doloremque vero itaque fugiat? Recusandae, ducimus! Et odit est repudiandae voluptates, fuga veniam corporis itaque hic quidem?</p>
                </div>
            </div> */}


        </div >
    );
};

export default Notice;