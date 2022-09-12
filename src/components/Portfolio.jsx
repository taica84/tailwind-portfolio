import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import usestate from '../assets/portfolio/usestate.jpg';







const Portfolio = () => {

    const portfolios = [
        {
            id:1,
           src:arrayDestruct,
           demo:'https://red-or-black-taica84.netlify.app/',
           code: 'https://github.com/taica84/red-or-black'
        },
        {
            id:2,
            src:installNode,
            demo:'https://agency-estate-taica84.netlify.app'

        },
        {
            id:3,
            src:navbar,
            demo:'https://app.netlify.com/sites/moi-snake'

        },
        {
            id:4,
            src:reactParallax,
            demo:'https://app.netlify.com/sites/vadanamihai-cv'

        },
        {
            id:5,
            src:reactSmooth,
            demo:'https://app.netlify.com/sites/wine-house-taica84'

        },
        {
            id:6,
            src:reactWeather,
            demo:'https://tesla-clone-taica84.netlify.app'

        },
        {
            id:7,
            src:usestate,
            demo:'https://app.netlify.com/sites/fb-clone-taica84'

        }
    ];



  return (
     <div 
     name='portfolio' 
     className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen'
     > 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
                <p className='py-6' >Check out some of my work right here</p>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8' >
           


               {
                portfolios.map(({id,src,demo,code}) => (
                    <div key={id} className='shadow-md shadow shadow-gray-600 rounded-lg' >
  
                      <img className='rounded-md duration-200 hover:scale-105'  src={src} alt='' />
                     
                      <div className='flex items-center justify-center' >

                          <a href={demo} target='_blank' 
                          rel="noreferrer"
                          className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 cursor-pointer' >Demo</a>

                          <a href={code} target="_blank" 
                          rel="noreferrer"
                          className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 cursor-pointer' >Code</a>

                      </div>

                 
                  </div>
               
                ))
               }

              </div>

          </div>
       </div>
  )
}

export default Portfolio ;