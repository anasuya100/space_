import React from 'react';

function Footer() {
  return (
    <div className='bg-gray-900 text-white relative z-60'>
      <section className='max-w-[1200px] mx-auto px-4 text-white'>
        <div className='grid md:grid-cols-3 py-10 gap-8'>
          <div>
            <h1 className='text-2xl font-bold mb-4'>Be Ready To Grow</h1>
            <p className='text-sm text-gray-400 mb-6'> Get exclusive <span className='font-bold text-white'>updates</span> straight to your inbox.</p>
            <div className='relative'>
              <input type='text' className='py-3 px-4 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 bg-gray-800 border border-gray-700 text-sm' placeholder='Enter your email'/>
              <button className='absolute right-2 top-2 bottom-2 bg-sky-500 text-white px-4 rounded-full hover:bg-sky-600 transition'> Subscribe </button>
            </div>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-4'>Quick Links</h2>
            <ul className='text-sm text-gray-400 space-y-2'>
              <li><a href='#' className='hover:text-sky-400 transition'>Privacy Policy</a></li>
              <li><a href='#' className='hover:text-sky-400 transition'>Terms of Service</a></li>
              <li><a href='#' className='hover:text-sky-400 transition'>Support</a></li>
              <li><a href='#' className='hover:text-sky-400 transition'>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-4'> Contact Us </h2>
            <p className='text-sm text-gray-400'>
              123 Modern Street, Suite 456 <br />
              City, State, 123453 <br />
              Email: support@A-space.com
            </p>
            <div className='flex space-x-4 mt-4'>
              <a href='#' className='text-gray-400 hover:text-sky-400 transition'>
                <i className='fab fa-facebook'>FaceBook</i>
              </a>
              <a href='#' className='text-gray-400 hover:text-sky-400 transition'>
                <i className='fab fa-Git-Hub'>Git-hub</i>
              </a>
              <a href='#' className='text-gray-400 hover:text-sky-400 transition'>
                <i className='fab fa-instagram'> Instagram</i>
              </a>
              <a href='#' className='text-gray-400 hover:text-sky-400 transition'>
                <i className='fab fa-linkedin'> Linked-In </i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
