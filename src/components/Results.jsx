import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Loading from './Loading'

import { useResultContext } from '../context/resultContextProvider'

function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm){
      if(location.pathname === '/videos'){
        getResults(`?query=${searchTerm}&limit=10&related_keywords=true videos`)
      } else {
        getResults(`?query=${searchTerm}&limit=10&related_keywords=true`)
      }
    }
  },[searchTerm, location.pathname])

  if(isLoading) return <Loading />
       
 switch (location.pathname) {
  case '/search':
    return (
      <div className='flex flex-wrap justify-between space-y-6 sm:px-56 p-5'>
          {results?.results?.map(({url, title}, index) => (
              <div key={index} className='md:w-2/5 w-full'> 
                  <a href={url} target='_blank' rel='noreferrer'>
                    <p className='text-sm dark:text-white text-gray-900'>
                      {url.length > 30 ? url.substring(0, 30) : url}                    
                    </p>
                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                      {title}
                    </p>
                  </a>
             </div>
          ))}
      </div>
    )
  case '/videos':
    return (
      <div className='flex flex-wrap justify-center items-center'>
          {results?.image_results?.map(({image, url: {href, title}, index}) => {
              <a className='sm:p-3 p-5' href={href} key={index} target='_blank' rel='noreferrer'>
                  <img src={image?.src} alt={title} loading='lazy'/>
                  <p className='w-36 break-words text-sm mt-2'>
                      {title}
                  </p>
              </a>
          })}
      </div>
    );
  case '/news':
    return 'search';
  default:
    return 'error'
 }
}

export default Results