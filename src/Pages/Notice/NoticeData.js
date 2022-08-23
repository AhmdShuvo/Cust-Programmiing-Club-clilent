import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import NoticeModal from './NoticeModal';

const NoticeData = ({ n }) => {
    const { Subject, noticeBody, date, _id } = n
    // const navigate = useNavigate();
    // const showNoticeBody = () =>{
    //     const path = `/notice/${_id}`;
    //     navigate(path)

    // }
    const {notice} = useParams()
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
                                    <div className="max-w-md text-indigo-100">
                                        <p className="mb-2">{noticeBody.slice(0, 50)}...</p>
                                    </div>
                                    {/* <!-- More link --> */}
                                    {/* <Link to={"/notice/"+_id} className="flex-shrink-0 flex items-center justify-center text-indigo-600 h-10 ">
                                        <label for="my-modal-3" className="modal-button block font-bold text-white text-xs hover:text-white	cursor-pointer hover:uppercase" onClick={showNoticeBody}>Read more</label>
                                        
                                    </Link> */}
                                    <a className="flex-shrink-0 flex items-center justify-center text-indigo-600 h-10 " href='g'>
                                        <label for="my-modal-3" className="modal-button block font-bold text-white text-xs hover:text-white	cursor-pointer hover:uppercase" >Read more</label>
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <NoticeModal className="text-white"></NoticeModal> */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Internet user!{notice}</h3>
                    <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat hic commodi, et quaerat officiis maiores autem repudiandae sit laboriosam ratione voluptas excepturi repellendus reprehenderit qui! Impedit facere praesentium perspiciatis labore nostrum dolor ducimus? Inventore hic iste similique eveniet nemo magni unde sunt, veritatis esse maxime impedit quis, numquam quo.</p>
                </div>
            </div>


        </div>
    );
};

export default NoticeData;