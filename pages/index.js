import Image from 'next/image'
import styles from '../styles/Home.module.css'

const newsItems = [
  {
    id: 1,
    title: "The Road Ahead",
    subtitle: "The road ahead might be paved - it might not be.",
    date: "September 25, 2023",
    author: "Jennifer Vogels",
    category: "PHOTOGRAPHY",
    imageUrl: "/images/northern-lights.jpg"
  },
  {
    id: 2,
    title: "From Top Down",
    subtitle: "Once a year, go someplace you've never been before.",
    date: "September 25, 2023",
    author: "William Wong",
    category: "ADVENTURE",
    imageUrl: "/images/lantern.jpg"
  },
  // More items...
];

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Let's do it together.</h1>
        <p>We travel the world in search of stories. Come along for the ride.</p>
        <button className={styles.viewLatest}>View Latest Posts</button>
      </section>

      {/* Categories */}
      <nav className={styles.categories}>
        <ul>
          <li>Nature</li>
          <li>Photography</li>
          <li>Relaxation</li>
          <li>Vacation</li>
          <li>Travel</li>
          <li>Adventure</li>
        </ul>
      </nav>

      {/* Featured Posts */}
      <section className={styles.featured}>
        <h2>Featured Posts</h2>
        <div className={styles.featuredGrid}>
          {newsItems.slice(0, 2).map(item => (
            <div key={item.id} className={styles.featuredCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <span className={styles.category}>{item.category}</span>
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <div className={styles.meta}>
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}