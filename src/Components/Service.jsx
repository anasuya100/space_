import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6';

const serviceData = [
    {
        title: 'HST',
        content: '300-1500km',
        description: 'The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope but it is one of the largest and most versatile, well known both as a vital research tool and as a public relations boon for astronomy.',
        icon: <FaReact className="text-7xl"/>,
        aosDelay: '300',
    },
    {
        title: 'ISS',
        content: '500-1500km',
        description: 'The International Space Station is a modular space station in low Earth orbit. It is a multinational collaborative project involving five space agencies: NASA, Roscosmos, JAXA, ESA, and CSA. The ownership and use of the space station is established by intergovernmental treaties and agreements.',
        icon: <FaShuttleSpace className="text-7xl"/>,
        aosDelay: '500',
    },
    {
        title: 'GPS',
        content: '300-1500km',
        description: 'The Global Positioning System is a satellite-based radionavigation system owned by the United States government and operated by the United States Space Force. It is one of the global navigation satellite systems that provides geolocation and time information to a GPS receiver anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites.',
        icon: <FaSpaceAwesome className="text-7xl"/>,
        aosDelay: '700',
    },
]
const Service = () => {
  return (
    <div className='bg-gradient-to-b from-transparent from-10% to-black to-20% text-white relative z-60'>
        <div className="container">
              <div className="min-h-[400px]">
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                      {
                          serviceData.map((data) => (
                              <div data-aos="fade-up" data-aos-delay={data.aosDelay} className='min-h-[180px] flex flex-col gap-2 items-center justify-center bg-sky-800/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px]mx-auto'>
                                    {data.icon}
                                  <h1>{data.title}</h1>
                                  <p>{data.content}</p>
                                  <p className='text-sm'>{data.description}</p>
                              </div>
                          ))
                      }
                  </div>
              </div>  
        </div>
    </div>
  )
}

export default Service
