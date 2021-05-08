import { FunctionalComponent, h } from 'preact';
import { MovieType } from '../../services/movies';
import style from './style.css';

export const Banner: FunctionalComponent<{ nominates: MovieType[] }> = ({
  nominates,
}) => {
  let link = '/shared/';
  nominates.forEach((nominate, index) => {
    if (index === 0) {
      link += `?${index}=${nominate.imdbID}`;
    } else {
      link += `&${index}=${nominate.imdbID}`;
    }
  });

  return (
    <div class={style.container}>
      <p class={style.strong}>You nominated your 5 films !</p>
      <p>
        You can share your list with this link:
        <br />
        <a href={link}>
          {' '}
          {typeof window !== 'undefined' ? location.href + link : 'link'}
        </a>
      </p>
    </div>
  );
};
