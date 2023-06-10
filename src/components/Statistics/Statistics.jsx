import PropTypes from 'prop-types';
import css from './Statictics.module.css';


export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statList}>
      {stats.map(e => {
        return (
          <li
            className={css.item}
            key={e.id}
            style={{
              backgroundColor: randomColor(),
            }}
          >

            <span className={css.label}>{e.label}</span>
            <span className={css.percentage}>{e.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);


function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const { string, array } = PropTypes;

Statistics.propTypes = {
  title: string,
  stats: array,
};


