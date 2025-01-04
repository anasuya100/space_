import React from 'react'

const Home = () => {
  return (
    <div className=' h-full text-white relative z-60'>
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className='space-y-4 lg:pr-36'>
            <h1 data-aos="fade-right"className='text-5xl font-bold uppercase'>Beyond the Horizon, Into the Stars</h1>
            <p data-aos="fade-left delay-20" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quasi. Esse libero quam unde modi, similique explicabo error, incidunt recusandae aspernatur assumenda quaerat illo dicta exercitationem eaque sequi temporibus nesciunt?
            </p>
            <button data-aos="zoom-in" className='primary-button'>learn More</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
