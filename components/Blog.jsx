import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogData } from '@/data/BlogData'

const Blog = () => {
  return (
    <section>
      <div className='popular_posts'>
        <h1>Popular Posts</h1>
        <div className='popular_posts_container'>
          {blogData.map((post, index) => (
            <div className='popular_posts_content ' key={index}>
              <Link href="/">
                <Image
                  className='image'
                  src={post.image}
                  width={300}
                  height={300}
                  alt=""
                />
                <h3>{post.title}</h3>
                <p>{post.subtitle}</p>
                {/* <span className={styles.link}>Read more</span> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog