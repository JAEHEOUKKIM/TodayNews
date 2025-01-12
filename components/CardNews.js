import Image from 'next/image'
import styles from '../styles/CardNews.module.css'

export default function CardNews({ title, content, imageUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          style={{ objectFit: 'cover' }}  // layout과 objectFit 대신 style 사용
          priority
        />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}