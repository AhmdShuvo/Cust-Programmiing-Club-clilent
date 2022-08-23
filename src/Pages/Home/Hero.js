import React from 'react';

const Hero = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{ backgroundImage: "url(https://i.ibb.co/Yf8fPh5/299379351-512506853976563-8508925898093071248-n.jpg)" }}
>
  <div className="hero-overlay bg-opacity-60" />
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-gray-900">CUST Programming Club</h1>
      <p className="mb-5 text-gray-900">
      Department of Computer Science and Engineering and Computer Programming Club (CPC) successfully arranged the initiation ceremony.  - Spring 2022, at Auditorium, Campus, CUST.
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>

    );
};

export default Hero;