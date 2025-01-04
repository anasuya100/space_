import React from 'react';
import satelite2 from "../assets/satelite2.jpg";

function Banner2() {
  return (
    <div className='bg-black text-white pb-1 relative z-60'>
      <div className='Container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800'>
            <p data-aos="fade-up" className='text-sky-800 uppercase'> Our Mission </p>
            <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl'> Columbus </h1>
            <p data-aos="fade-up" data-aos-delay="500"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fuga, corporis quibusdam aperiam laudantium sed iure eligendi autem! Laboriosam error nesciunt doloremque dolorem atque commodi dicta, tenetur blanditiis numquam laudantium nulla id voluptatem consectetur nam assumenda enim odio ex vero. </p>
            <a data-aos="fade-up" data-aos-delay="700" className='primary-button inline-block text-white bg-sky-800 px-4 py-2 rounded'
              href="https://en.wikipedia.org/wiki/Columbus_(ISS_module)" target="_blank"rel="noopener noreferrer"> Learn More </a>
          </div>
          <div data-aos="zoom-in">
            <img src={satelite2} alt="" className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
