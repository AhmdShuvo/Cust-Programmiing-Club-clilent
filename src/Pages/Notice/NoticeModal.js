import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NoticeModal = () => {
    // const {noticeId} = useParams()
    // const [notices, setNotices] = useState([])
    // useEffect(() => {
    //     fetch(`https://desolate-headland-20264.herokuapp.com/notice?fbclid=IwAR0k2suNoR36ZE3k1U741J26njG_VLIIIPH6ob4T6Q4bASfVoykDmxDuo0s/${noticeId}`)
    //         .then(res => res.json())
    //         .then(data => setNotices(data))
    // }, [noticeId])

    // const fr = notices.filter(itemd => itemd._id===noticeId)
    // console.log(fr[0].noticeBody);

    return (
        <div>
            {/* <h1>hello: {noticeId}</h1>
            {
                notices.map(nott => <h1>{nott.Subject}</h1>)
            } */}
            {/* <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold capitalize">{Subject}</h3>
                    <p class="py-4">{noticeBody}</p>
                </div>
            </div> */}
            {/* <h1>{fr[0]?.noticeBody}</h1> */}
            {/* <h1>{noticeId}</h1> */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat hic commodi, et quaerat officiis maiores autem repudiandae sit laboriosam ratione voluptas excepturi repellendus reprehenderit qui! Impedit facere praesentium perspiciatis labore nostrum dolor ducimus? Inventore hic iste similique eveniet nemo magni unde sunt, veritatis esse maxime impedit quis, numquam quo.</p>
                </div>
            </div>

        </div>
    );
};

export default NoticeModal;