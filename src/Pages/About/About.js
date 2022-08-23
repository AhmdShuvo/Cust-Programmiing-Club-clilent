import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center mt-[30px] mb-[15px]">
                <div className="w-full px-4">
                    <div className="text-center mx-auto  max-w-[510px]">
                        <span className="font-semibold text-lg  mb-2 block text-white">
                            Developers Team
                        </span>
                        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                            Our Developers
                        </h2>
                        <p className="text-base text-white">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container flex flex-wrap justify-center ">

                <div class="card-wrapper">

                    <div class="card">

                        <div class="card-image">
                            <img src="./images/arif.jpg" alt="profile one" />
                        </div>

                        <ul class="social-icons">
                            <li>
                                <a href="https://www.facebook.com/dawodibrahim247" target={'_blank'} rel="noreferrer">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ArifRexa" target={'_blank'} rel="noreferrer">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/md-arif-rexa/" target={'_blank'} rel="noreferrer">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://arifportfolio-6f864.web.app/" target={'_blank'} rel="noreferrer">
                                    <i class="fa-solid fa-link"></i>
                                </a>
                            </li>
                        </ul>

                        <div class="details">
                            <h2>MD. ARIFUL ISLAM
                                <br />
                                <span class="job-title">MERN-STACK DEVELOPER</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="card-wrapper">

                    <div class="card">

                        <div class="card-image">
                            <img src="./images/shuvo.jpg" alt="profile one" />
                        </div>

                        <ul class="social-icons">
                            <li>
                                <a href="https://www.facebook.com/ahmed.shuvo.0" target={'_blank'} rel="noreferrer">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/AhmdShuvo" target={'_blank'} rel="noreferrer">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/tanjir-ahmd/" target={'_blank'} rel="noreferrer">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://tanjir-ahmed-portfolio.netlify.app/" target={'_blank'} rel="noreferrer">
                                    <i class="fa-solid fa-link"></i>
                                </a>
                            </li>
                        </ul>

                        <div class="details">
                            <h2>TANJIR AHMED SHUVO
                                <br />
                                <span class="job-title">MERN-STACK DEVELOPER</span>
                            </h2>
                        </div>
                    </div>
                </div><div class="card-wrapper">

                    <div class="card">

                        <div class="card-image">
                            <img src="./images/vabna.jpg" alt="profile one" />
                        </div>

                        <ul class="social-icons">
                            <li>
                                <a href="https://www.facebook.com/israt.vabna.96" target={'_blank'} rel="noreferrer">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/vabnaweb" target={'_blank'} rel="noreferrer">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/rafiun-vabna/" target={'_blank'} rel="noreferrer">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://vabnaweb.github.io/portfolio/" target={'_blank'} rel="noreferrer">
                                    <i class="fa-solid fa-link"></i>
                                </a>
                            </li>
                        </ul>

                        <div class="details">
                            <h2>RAFIUN ISRAT VABNA
                                <br />
                                <span class="job-title">MERN-STACK DEVELOPER</span>
                            </h2>
                        </div>
                    </div>
                </div><div class="card-wrapper">

                    <div class="card">

                        <div class="card-image">
                            <img src="./images/shakil.jpg" alt="profile one" />
                        </div>

                        <ul class="social-icons">
                            <li>
                                <a href="0" target={'_blank'} rel="noreferrer">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="0" target={'_blank'} rel="noreferrer">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>

                            <li>
                                <a href="0" target={'_blank'} rel="noreferrer">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="0" target={'_blank'} rel="noreferrer">
                                    <i class="fa-solid fa-link"></i>
                                </a>
                            </li>
                        </ul>

                        <div class="details">
                            <h2>SHAKIL AHMED KHAN
                                <br />
                                <span class="job-title">WEB DEVELOPER</span>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* <!-- end box wrapper --> */}

            </div>
            {/* <!-- END container --> */}

        </div>
    );
};

export default About;