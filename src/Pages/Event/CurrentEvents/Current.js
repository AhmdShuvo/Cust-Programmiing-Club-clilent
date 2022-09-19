import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CurrentSingle from './CurrentSingle';

const Current = () => {

    const [events,setEvents]=useState([])
    useEffect(()=>{
            fetch('https://desolate-headland-20264.herokuapp.com/currentevents').then(res=>res.json()).then(data=>setEvents(data.reverse()))
    },[])
   
    return (
        <>
         <section id="current-events" className='my-5'>
         <div className="flex flex-wrap justify-center mx-4 mt-32">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        <span className="font-semibold text-lg  mb-2 block ">
                            EVENTS
                        </span>
                        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] mb-4">
                            Our Current Events
                        </h2>

                    </div>
                </div>
            </div>

           {
            events.map(event=><CurrentSingle
            
                event={event}
            key={event._id}></CurrentSingle>)
           }
           
            </section> 
        </>
    );
};

export default Current;