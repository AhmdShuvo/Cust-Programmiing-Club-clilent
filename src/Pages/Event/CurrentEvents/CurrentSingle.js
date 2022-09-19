import React from 'react';

const CurrentSingle = ({event}) => {
    const {time,title,description,image  }=event
    return (
        <div>
            <div className="card w-100 lg:card-side bg-base-100 shadow-xl m-3 border-2">
  <figure><img className='rounded-3xl border-2 p-3' width="600px" src={`data:image/png;base64,${image}`} alt="event poster"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl'> publish Date : {time}</p>
    <p>{description}</p>
  </div>

  <div className="card-actions justify-end">
   
    </div>
</div>
        </div>
    );
};

export default CurrentSingle;