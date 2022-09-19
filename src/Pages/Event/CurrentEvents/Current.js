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
           <center> <h1 className='text-7xl my-5'>Events Currently Running</h1></center>

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