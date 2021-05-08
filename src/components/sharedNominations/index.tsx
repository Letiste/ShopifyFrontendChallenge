import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { getMovieById, MovieInfoType } from '../../services/movies';
import { SharedNomination } from './sharedNomination';
import style from './style.css';

const SharedNominations: FunctionalComponent = () => {
  const [nominates, setNominates] = useState(Array<MovieInfoType>());
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(location.search);
      const moviesPromises = Array<Promise<MovieInfoType>>();
      params.forEach((params) => {
        moviesPromises.push(getMovieById(params));
      });
      Promise.all(moviesPromises).then(setNominates);
    }
  }, []);

  return (
    <div class={style.container}>
      <a class={style.link_back} href="/">
        Nominate my 5 films
      </a>
      {nominates.length > 0 ? (
        <ul>
          {nominates.map((nominate) => (
            <SharedNomination nominate={nominate} key={nominate.imdbID} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SharedNominations;
