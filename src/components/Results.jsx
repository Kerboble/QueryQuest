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
        getResults("images", `imagesearch?q=${searchTerm}&gl=us&lr=lang_en&num=20&start=0`)
      } else if (location.pathname === '/search') {
        getResults("search", `?query=${searchTerm}&limit=40&related_keywords=true`)
      } else if (location.pathname === '/news'){
        getResults("news", `search?query=${searchTerm}{&country=US&lang=en`)
      }
      else if (location.pathname === '/videos'){
        getResults("videos", `search?q=${searchTerm}&c=continuation_token`)
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
      <div className='flex flex-wrap justify-between space-y-6 sm:px-56 pt-5'>
      {results?.items?.map(({title, thumbnailImageUrl, originalImageUrl}, index) => (
        <div key={index} className='md:w-2/5 w-full'>
          <a href={originalImageUrl} target='_blank' rel='noreferrer'>
            <img src={thumbnailImageUrl} alt={title} className='h-30 w-30 rounded'/>
            <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
              {title}
            </p>
          </a>
        </div>
      ))}
    </div>
    );
  case '/news':
    return (
      <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
      {results?.data?.map((item, index) => (
        <div key={index} className='md:w-2/5 w-full'>
          <a href={item.link} target='_blank' rel='noreferrer'>
            <img src={item.photo_url} alt={item.title} />
            <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
              {item.title}
            </p>
          </a>
        </div>
      ))}
    </div>
    );
  case '/videos':
    return (
      <div className='flex flex-wrap'>
        {results?.items?.map((video, index) => (
          <div key={index} className='p-2 rounded'>
            {console.log(video.url)}
            <ReactPlayer url={video.url} controls width="355px" height="200px" />
          </div>
        ))}
      </div>
    );
 }
}

export default Results