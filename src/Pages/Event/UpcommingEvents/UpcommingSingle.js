import React from 'react';

const UpcommingSingle = ({event}) => {
    const {time,title,description,image,_id    }=event
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='rounded-3xl border-2 p-3 ' width="600px"  src={`data:image/png;base64,${image}`} alt="event poster"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>
        </div>
    );
};

export default UpcommingSingle;