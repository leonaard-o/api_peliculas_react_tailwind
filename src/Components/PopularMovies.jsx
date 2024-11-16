import React, { useEffect, useState } from 'react'

export const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1)
    const [totalPages,setTotalPages] = useState()
    const GetMovies = async () =>{
        try {
            const peticion = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0a52bbb05174cc0707e2ada43b4a1423&page=${pages}`)
            const data = await peticion.json()
            setMovies(data.results)
            setTotalPages(data.total_pages)
            console.log('algo salio mal' + error)
            
        } catch (error) {
            
        }

    }
    useEffect(()=>{
        GetMovies()

    },[pages])

    const prevPage = ()=>{
        if (pages > 1)
        setPages(pages  - 1)
        }
    
    const nextPage = ()=>{
        if (pages < totalPages)
        setPages(pages + 1)
    }

  return (
    <div className="bg-[#e95d5d]">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Peliculiando</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {movies.map((movie) => (
          <div key={movie.id} className="group relative">
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={movie.title}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {/* {movie.overview} */}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{movie.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{movie.original_title}</p>
            </div>
          </div>
        ))}
      </div>
        <div className=''>
                
        <button onClick={prevPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Prev</button>
       
                    <span>
                pagina {pages} de {totalPages}
            </span>
          
            <button onClick={nextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Prev</button>
        </div>

    </div>
  </div>
  )
    }