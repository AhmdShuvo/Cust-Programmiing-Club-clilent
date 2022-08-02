import React from 'react';

const Notice = () => {
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
                <div className="h-full">
                    {/* <!-- Card --> */}
                    <div className="max-w-2xl mx-auto  shadow-lg rounded-lg" style={{ backgroundColor: "#193d52" }}>
                        <div className="px-6 py-5">
                            <div className="flex items-start">

                                {/* <!-- Card content --> */}
                                <div className="flex-grow truncate">
                                    {/* <!-- Card header --> */}
                                    <div className="w-full sm:flex justify-between items-center mb-3">
                                        {/* <!-- Title --> */}
                                        <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">Simple Design Tips</h2>
                                        {/* <!-- Notice issue date --> */}
                                        <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                                            <div className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">

                                                <span>Mar 15 2022 <span className="sr-only">likes</span></span>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Card body --> */}
                                    <div className="flex items-end justify-between whitespace-normal">
                                        {/* <!-- Paragraph --> */}
                                        <div className="max-w-md text-indigo-100">
                                            <p className="mb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        </div>
                                        {/* <!-- More link --> */}
                                        <a className="flex-shrink-0 flex items-center justify-center text-indigo-600 h-10 " href="#0">
                                            {/* <span className="block font-bold"><span className="sr-only">Read more</span>X</span> */}
                                            <span className="block font-bold text-white text-xs">Read more...</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                        <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">Simple Design Tips</h2>
                                        {/* <!-- Notice issue date --> */}
                                        <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                                            <div className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">

                                                <span>Mar 15 2022 <span className="sr-only">likes</span></span>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Card body --> */}
                                    <div className="flex items-end justify-between whitespace-normal">
                                        {/* <!-- Paragraph --> */}
                                        <div className="max-w-md text-indigo-100">
                                            <p className="mb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        </div>
                                        {/* <!-- More link --> */}
                                        <a className="flex-shrink-0 flex items-center justify-center text-indigo-600 h-10 " href="#0">
                                            {/* <span className="block font-bold"><span className="sr-only">Read more</span>X</span> */}
                                            <span className="block font-bold text-white text-xs">Read more...</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Notice;