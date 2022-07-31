import React from 'react';

const Notice = () => {
    return (
        <div>
            <section class="flex flex-col justify-center antialiased  text-gray-600 p-4">
                <div class="flex flex-wrap justify-center -mx-4">
                    <div class="w-full px-4">
                        <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <span class="font-semibold text-lg  mb-2 block text-white">
                                Our Notices
                            </span>
                            <h2 class=" font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                                Recent Notice
                            </h2>
                            <p class="text-base text-white">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="h-full">
                    {/* <!-- Card --> */}
                    <div class="max-w-2xl mx-auto  shadow-lg rounded-lg" style={{ backgroundColor: "#193d52" }}>
                        <div class="px-6 py-5">
                            <div class="flex items-start">

                                {/* <!-- Card content --> */}
                                <div class="flex-grow truncate">
                                    {/* <!-- Card header --> */}
                                    <div class="w-full sm:flex justify-between items-center mb-3">
                                        {/* <!-- Title --> */}
                                        <h2 class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">Simple Design Tips</h2>
                                        {/* <!-- Notice issue date --> */}
                                        <div class="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                                            <div class="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">

                                                <span>Mar 15 2022 <span class="sr-only">likes</span></span>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Card body --> */}
                                    <div class="flex items-end justify-between whitespace-normal">
                                        {/* <!-- Paragraph --> */}
                                        <div class="max-w-md text-indigo-100">
                                            <p class="mb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        </div>
                                        {/* <!-- More link --> */}
                                        <a class="flex-shrink-0 flex items-center justify-center text-indigo-600 h-10 " href="#0">
                                            {/* <span class="block font-bold"><span class="sr-only">Read more</span>X</span> */}
                                            <span class="block font-bold text-white text-xs">Read more...</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="flex flex-col justify-center antialiased  text-gray-600 p-4">
                <div class="h-full">
                    {/* <!-- Card --> */}
                    <div class="max-w-2xl mx-auto bg-indigo-600 shadow-lg rounded-lg">
                        <div class="px-6 py-5">
                            <div class="flex items-start">

                                {/* <!-- Card content --> */}
                                <div class="flex-grow truncate">
                                    {/* <!-- Card header --> */}
                                    <div class="w-full sm:flex justify-between items-center mb-3">
                                        {/* <!-- Title --> */}
                                        <h2 class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">Simple Design Tips</h2>
                                        {/* <!-- Notice issue date --> */}
                                        <div class="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                                            <div class="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">

                                                <span>Mar 15 2022 <span class="sr-only">likes</span></span>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Card body --> */}
                                    <div class="flex items-end justify-between whitespace-normal">
                                        {/* <!-- Paragraph --> */}
                                        <div class="max-w-md text-indigo-100">
                                            <p class="mb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        </div>
                                        {/* <!-- More link --> */}
                                        <a class="flex-shrink-0 flex items-center justify-center text-indigo-600 h-10 " href="#0">
                                            {/* <span class="block font-bold"><span class="sr-only">Read more</span>X</span> */}
                                            <span class="block font-bold text-white text-xs">Read more...</span>
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