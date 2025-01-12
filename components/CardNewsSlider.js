import CardNews from './CardNews';
import styles from '../styles/CardNewsGrid.module.css';

export default function CardNewsGrid({ newsItems }) {
  return (
    <div className={styles.grid}>
      {newsItems.map((item) => (
        <CardNews key={item.id} title={item.title} date={item.date} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
}