import React, { useState } from 'react';
import { useFetch } from '../hooks/custom-hooks';

const MovieList = () => {
  const [searchText, setSearchText] = useState('spider');
  const [url, setUrl] = useState(
    'http://omdbapi.com/?apikey=aa9e49f&s=' + searchText
  );
  const { data, isLoading, error } = useFetch(url);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;

    setUrl('http://omdbapi.com/?apikey=aa9e49f&s=' + searchText);
  };
  return (
    <>
      <h3>Movie list</h3>
      <form onSubmit={submitHandler}>
        <input
          type='search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='form-control'
        />
      </form>

      {isLoading && <h5>loading... pls wait.</h5>}
      {error && (
        <p className='lead text-danger'>
          there was an error while fetching movie data. pls check logs.
          <pre>{JSON.stringify(error, null, 4)}</pre>
        </p>
      )}

      {data && (
        <>
          <p className='lead'>here are the movies titles containing `iron`</p>
          {/* table.table.table-striped.table-bordered>(thead>tr>th*4)+(tbody>tr>td*4) */}
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Poster</th>
                <th>Title</th>
                <th>Year</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {data.Search.map((m) => (
                <tr key={m.imdbID}>
                  <td>
                    <img
                      style={{ height: '200px' }}
                      src={m.Poster}
                      alt={m.Title}
                    />
                  </td>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default MovieList;
