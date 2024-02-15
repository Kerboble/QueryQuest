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
      if(location.pathname === '/images'){
        getResults("images", `imagesearch?q=${searchTerm}&gl=us&lr=lang_en&num=10&start=0`)
      } else {
        getResults("search", `?query=${searchTerm}&limit=10&related_keywords=true`)
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
  case '/images':
    return (
      <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
      {results?.items?.map(({link, title, thumbnailImageUrl}, index) => (
        <div key={index} className='md:w-2/5 w-full'>
          <a href={link} target='_blank' rel='noreferrer'>
            <img src={thumbnailImageUrl} alt={title} />
            <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
              {title}
            </p>
          </a>
        </div>
      ))}
    </div>
    );
  case '/news':
    return 'search';
  default:
    return 'error'
 }
}

export default Results