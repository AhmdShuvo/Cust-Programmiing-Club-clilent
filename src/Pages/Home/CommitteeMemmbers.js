import React from 'react';
import "./vujung.css";

const CommitteeMemmbers = () => {
    return (
        <div>
            {/* This is the heading section of this page  */}
            <div class="flex flex-wrap justify-center mx-4 mt-32">
                <div class="w-full px-4">
                    <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        <span class="font-semibold text-lg  mb-2 block text-white">
                            Our Committee
                        </span>
                        <h2 class=" font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                            Our Committee Members 2022-23
                        </h2>
                        <p class="text-base text-white">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>
            {/* Committee members container */}
            <div class="commiteeMemberscontainer">
                <div class="box">
                    <div class="imgBox">
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/272619609_2148501048652105_5399183547860637310_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHsYjn_zuX7f8svxBdT64r0BS7979sbMwUFLv3v2xszBWkbAgCsplN7SLjxifO8wF_50sfsCWFXET9elXW4k8L-&_nc_ohc=JOfQQaDG6hAAX_48-Uj&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_e5HLnLvyMdpdbnh4lH5dm4gthMoBO9JlnA82VRVBu7g&oe=62EB08C9" alt="" />
                    </div>
                    <div class="content">
                        <h2>Md. Aminul Islam<br />
                            <span>ADVISOR</span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt="" />
                    </div>
                    <div class="content">
                        <h2>Imran Nazir<br />
                            <span>TRAINER</span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/143890057_1305412279815054_7819741331719585223_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFdLQU4IwZMhYYgIecQKKimMfFw4HvmoKMx8XDge-ago1J6Zl3G57WsS16AtJ6LZR6EfEgyQyI9C1eC4_cSYxoH&_nc_ohc=TnDbSafOuI8AX_yjuMO&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-BOci_PRIimk7JIMhdvNi3k4eu44x_laO5UfXUpjJ2WQ&oe=630B2318" alt="" />
                    </div>
                    <div class="content">
                        <h2>Banjir Ahmad<br />
                            <span>PRECIDENT</span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/271995115_3120809278178725_4184070734605111682_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGOSsxG_QiZtl-VBS042DvYPHl3ilpOpoA8eXeKWk6mgCfdHu-Pw1y2KJCpdadeDqvavoW5KE-1NVK49dOR4jcZ&_nc_ohc=-SnehzfpSjwAX9MmGqR&_nc_oc=AQkWpEJKmYf_Pdln790Sr9vPoqWQ5YKUUVg9unkHh7fhrykvOVWbsFgfhBc4iSHP8uo&_nc_ht=scontent.fdac7-1.fna&oh=00_AT9SX8bvRGSXDOxp3Iq02qCC0EGo9pGWUEGL-VdIApoOxQ&oe=62EC3E4C" alt="" />
                    </div>
                    <div class="content">
                        <h2>Ariful Islam <br />
                            <span>VICE PRECIDENT</span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                    </div>
                    <div class="content">
                        <h2>Shakil Ahmed Khan<br />
                            <span>SECRETARY</span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/279708463_2921770051447886_5439681024252892163_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG32s05n4sWtOswauRbY0-QePtatH7TzU14-1q0ftPNTZyI4UUEZMn4Ey6N9nwmlHpjr7Q4qTS5lQcPUB-uWZ_V&_nc_ohc=faa0kMjkhjYAX8SQ1wG&_nc_oc=AQnfC1WSYHjhdqDS3ew03ZdKmygABoG3Lsgrv2kW9NC4eST_C8ydOzBntnvmj7noJRI&tn=1Eiy8ybYxLtgfG3l&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_n7zfYfLGN9NVEkGrZ6Cq6Oo57GX17wdr75aZM9UY_4w&oe=62EAB45E" alt="" />
                    </div>
                    <div class="content">
                        <h2>Nabid Hasan<br />
                            <span>PROJECT MANAGER</span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/277802870_1605790496459065_4753792774501787359_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEbfmcWeOIAgWRhsVsB3QWsZuVZ5VOJo-Rm5VnlU4mj5BE1YAEUuu_EOm80zwMdFdK_dsuIMzipky4Op6fXlpft&_nc_ohc=r8lpVxCFbMkAX8cpDT6&_nc_ht=scontent.fdac7-1.fna&oh=00_AT9d7rzY_1893Yj-4gV7s61uE5Iz2SmqUsIwxx3RpJ4KNg&oe=62EB58D8" alt="" />
                    </div>
                    <div class="content">
                        <h2>Fahad Bin Aziz<br />
                            <span>MEDIA MANAGER</span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/273169042_320294090035764_4370449685666685955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeELTTwFDlVcX_dh0F2qZZ9koDxQ_YQAhKWgPFD9hACEpc5aGntUUSHpLApqPGc3MqomVaIFirmbxI5M0QaxNQux&_nc_ohc=XmVyL5QJLuMAX__CorE&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-FOPmaFCNcN17_dznF8U_luIGyws79K68F7kOT3yKPHw&oe=62EBE822" alt="" />
                    </div>
                    <div class="content">
                        <h2>Rafiun Israt<br />
                            <span>PUBLIC SPOKEN PERSON</span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/273710188_1058253164720920_1968900449200685059_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEkpjvDcLWuu7jIM3X-yNCQy18N7j9nYhTLXw3uP2diFH9zfN7QBdnj1Q5EbnGpCAa4y3CNvD0jeqIw67Ucpnpu&_nc_ohc=Okz85uKzuKAAX8us46z&_nc_ht=scontent.fdac7-1.fna&oh=00_AT9pseLGaSMiO8r46ygAzg1nnOAZenFP_EL_9BxsMu9dJQ&oe=62EB311B" alt="" />
                    </div>
                    <div class="content">
                        <h2>Tutul Hossain<br />
                            <span>TREASURER</span></h2>
                    </div>
                </div>
            </div>








        </div>
    );
};

export default CommitteeMemmbers;