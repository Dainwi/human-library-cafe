import React from 'react'
import { blogData } from '@/data/BlogData'

const Blog = () => {
  return (
    <div className={styles.popular_posts}>
      <h1>Popular Posts</h1>
      <div className={styles.popular_posts_container}>
        {blogData.map((post, index) => (
          <div className={styles.popular_posts_content} key={index}>
            <Link href="/">
              <Image
                className={styles.image}
                src={post.image}
                width={300}
                height={300}
                alt=""
              />
              <h3>{post.title}</h3>
              <p>{post.subtitle}</p>
              <span className={styles.link}>Read more</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog