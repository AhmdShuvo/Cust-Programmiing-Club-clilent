import React from 'react';
import './gallary.css'

const Gallary = () => {
  return (
    <section className=' mt-8 '>
      <div className="flex flex-wrap justify-center mx-4 mt-32">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg  mb-2 block ">
              GALLARY
            </span>
            <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] mb-4">
              Our Clubs Photoshoot
            </h2>

          </div>
        </div>
      </div>
      <div className="grid image-grid justify-center px-[30px]">
        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="/">
              <img
                className="tile-img tile-img1"
                src="./images/clubgallary/club-image-1.jpg"
                alt="Imagee"
                width="750px"

              />
            </a>
          </div>
        </div>
        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="/">
              <img
                className="tile-img tile-img2"
                src="../images/clubgallary/image-2.jpg"
                alt="Imagee"
              />
            </a>
          </div>
        </div>
        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="/">
              <img
                className="tile-img tile-img3"
                src="../images/clubgallary/image-3.jpg"
                alt="Imagee"
              />
            </a>
          </div>
        </div>
        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="/">
              <img
                className="tile-img tile-img4"
                src="../images/clubgallary/img-4.jpg"
                alt="Imagee"
              />
            </a>
          </div>
        </div>
        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="/">
              <img
                className="tile-img tile-img5"
                src="../images/clubgallary/img-5.jpg"
                alt="Imagee"
              />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Gallary;
