import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ Title, FetchUrl, rowID }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(FetchUrl).then((response) => {setMovies(response.data.results)})
    }, [FetchUrl])

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
          <h4 className='text-black font-bold md:text-xl p-4'>{Title}</h4> 
          <div className='relative flex items-center group'>
              <MdChevronLeft
                  onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={25} />
              <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                  {movies.map((item, id) => (
                      <Movie key={id} item={item} />
                  ))}
              </div>
              <MdChevronRight
                  onClick={slideRight}
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={25} />
          </div>
    </>
  )
}

export default Row