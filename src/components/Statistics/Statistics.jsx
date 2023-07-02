import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomColor() {
  return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
}

const Statistics = ({ title = '', stats }) => {
  return (
    <div className={styles.container}>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
          {stats.map(el => (
            <li
              className={styles.item}
              key={el.id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
Statistics.propTypes = {
  titile: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
