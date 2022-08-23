import React from 'react';
import "./vujung.css";

const CommitteeMemmbers = () => {
    return (
        <div>
            {/* This is the heading section of this page  */}
            <div className="flex flex-wrap justify-center mx-4 mt-32">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        <span className="font-semibold text-lg  mb-2 block ">
                            Our Committee
                        </span>
                        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] mb-4">
                            Our Committee Members 2022-23
                        </h2>
                        <p className="text-base ">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>
            {/* Committee members container */}
            <div className="commiteeMemberscontainer">
                <div className="box">
                    <div className="imgBox">
                        <img src="./images/aminul.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Md. Aminul Islam<br />
                            <span>ADVISOR</span></h2>
                    </div>
                </div>
             
                <div className="box">
                    <div className="imgBox">
                        <img src="./images/Banjir-ah.jpeg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Banjir Ahmad<br />
                            <span>PRECIDENT</span></h2>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
<<<<<<< HEAD
                        <img src="./images/arif.jpg" alt="" />
=======
                        <img src="./images/50626.jpg" alt="" />
>>>>>>> db6a77e809896739f72775afc5ac056edd3c4ad9
                    </div>
                    <div className="content">
                        <h2>Ariful Islam <br />
                            <span><h3 className='text-xl'>VICE PRECIDENT</h3></span></h2>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="./images/Shakil.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Shakil Ahmed Khan<br />
                            <span><h3 className='tex-xl'>SECRETARY</h3></span></h2>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="./images/nabid.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Nabid Hasan<br />
                            <span><h3 className="text-xl">PROJECT MANAGER</h3></span></h2>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="./images/fahad.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Fahad Bin Aziz<br />
                            <span><h3 className='text-xl'>WEB CONTENT & MEDIA MANAGER</h3></span></h2>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="./images/vabna.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Rafiun Israt<br />
                            <span><h3 className='text-xl'>PUBLIC SPOKEN PERSON</h3></span> </h2>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="./images/tutul.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Tutul Hossain<br />
                            <span>TREASURER</span></h2>
                    </div>
                </div>
            </div>








        </div>
    );
};

export default CommitteeMemmbers;