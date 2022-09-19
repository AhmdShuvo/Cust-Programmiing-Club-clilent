import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UpcommingSingle from './UpcommingSingle';


const Upcommint = () => {

    const [events,setEvents]=useState([])
    useEffect(()=>{
            fetch('https://desolate-headland-20264.herokuapp.com/comingevents').then(res=>res.json()).then(data=>setEvents(data))
    },[])
    console.log(events);
    return (
        <>
         <section id="current-events" className='my-24'>
           <center> <h1 className='text-7xl my-5'>Upcoming Events </h1></center>

           {
            events.map(event=><UpcommingSingle
            
                event={event}
            key={event._id}></UpcommingSingle>)
           }
           
            </section> 
        </>
    );
};

export default Upcommint;