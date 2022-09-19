import React from 'react';
import './gallary.css'

const Gallary = () => {
  return (
    <section className=' mt-8 '>
      <center><h1 className='text-7xl my-7'>Gallary </h1></center>
      <div className="grid image-grid">
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
