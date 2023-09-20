import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogData } from '../data/BlogData';

const Blog = () => {
  return (
    <section id='blog' className="container">
      <div className='blog-posts-content'>
        <h1>Blog</h1>
        <div className='blog-posts-container'>
          {blogData.map((post) => (
            <div className='blog-posts' key={post.id}>
              <Link href={`/`}>
                  <div className="blog-image-container">
                    <Image
                      className='image'
                      src={post.image}
                      width={300}
                      height={300}
                      alt=""
                    />
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.subtitle}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
